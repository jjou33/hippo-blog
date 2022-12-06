import React, { useRef, MutableRefObject, useEffect } from 'react'

interface sectionObjectPropsType {
  sectionRef: {
    [key: string]: MutableRefObject<HTMLDivElement | null>
  }
  mainMessageRef: {
    [key: string]: MutableRefObject<HTMLDivElement | null>
  }
}
interface scrollInfoType {
  type: string
  heightNum: number
  scrollHeight: number
  objs: {
    [key: string]: MutableRefObject<HTMLDivElement | null>
  }
  values?: {
    [key: string]: number | object
  }[]
}

export const useShowScene = (
  props: sectionObjectPropsType,
  setShowScene: React.Dispatch<React.SetStateAction<string>>,
) => {
  let yOffset = 0 // window.pageYOffset 대신 쓸 변수
  let prevScrollHeight = 0 //  현재 스크롤 위치(yOffset)보다 이전에 위치한 스크롤 섹션들의 스크롤 높이값의 합
  let currentScene = 0 // 현재 호라성화된(눈 앞에 보고있는) 씬(scroll-section)
  let enterNewScene = false // 새로운 scene 이 시작된 순간 true 로 변경
  const sceneInfo: scrollInfoType[] = [
    {
      // 1
      type: 'stricky',
      heightNum: 4, // 브라우저 높이의 5배로 scrollHeight 세팅
      scrollHeight: 0,
      objs: {
        container: props.sectionRef.section1,
        messageA: props.mainMessageRef.mainMessage1,
        messageB: props.mainMessageRef.mainMessage2,
        messageC: props.mainMessageRef.mainMessage3,
        messageD: props.mainMessageRef.mainMessage5,
      },
      values: {
        messageA_opacity_in: [0, 1, { start: 0.1, end: 0.2 }],
        messageA_opacity_out: [1, 0, { start: 0.3, end: 0.4 }],
        messageB_opacity_in: [0, 1, { start: 0.4, end: 0.5 }],
        messageB_opacity_out: [1, 0, { start: 0.6, end: 0.7 }],
      },
    },
    {
      // 2
      type: 'normal',
      heightNum: 4, // 브라우저 높이의 5배로 scrollHeight 세팅
      scrollHeight: 0,
      objs: {
        container: props.sectionRef.section2,
      },
    },
    {
      // 3
      type: 'stricky',
      heightNum: 4, // 브라우저 높이의 5배로 scrollHeight 세팅
      scrollHeight: 0,
      objs: {
        container: props.sectionRef.section3,
      },
    },
    {
      // 4
      type: 'stricky',
      heightNum: 4, // 브라우저 높이의 5배로 scrollHeight 세팅
      scrollHeight: 0,
      objs: {
        container: props.sectionRef.section4,
      },
    },
  ]

  const setLayout = () => {
    // 각 스크롤 섹션의 높이 세팅ㄹ
    for (let i = 0; i < sceneInfo.length; i++) {
      const info = sceneInfo[i]
      info.scrollHeight = info.heightNum * window.innerHeight

      if (info.objs.container.current) {
        info.objs.container.current.style.height = `${info.scrollHeight}px`
      }
    }
    yOffset = window.pageYOffset

    let totalScrollHeight = 0
    for (let i = 0; i < sceneInfo.length; i++) {
      totalScrollHeight += sceneInfo[i].scrollHeight
      if (totalScrollHeight >= yOffset) {
        currentScene = i
        break
      }
    }
  }

  const calcValues = (
    values: scrollInfoType['values'],
    currentYOffset: number,
  ) => {
    let rv = 0
    const scrollHeight = sceneInfo[currentScene].scrollHeight
    // 현재 씬에서 스크롤된 범위를 비율로 구하기
    const scrollRatio = currentYOffset / sceneInfo[currentScene].scrollHeight
    if (values.length === 3) {
      // start ~ end 사이에 애니메이션 실행
      const partScrollStart: number = values[2].start * scrollHeight
      const partScrollEnd: number = values[2].end * scrollHeight
      const partScrollHeight: number = partScrollEnd - partScrollStart

      if (
        currentYOffset >= partScrollStart &&
        currentYOffset <= partScrollEnd
      ) {
        rv =
          ((currentYOffset - partScrollStart) / partScrollHeight) *
            (values[1] - values[0]) +
          values[0]
      } else if (currentYOffset < partScrollStart) {
        rv = values[0]
      } else if (currentYOffset > partScrollEnd) {
        rv = values[1]
      }
    } else {
      rv = scrollRatio * (values[1] - values[0]) + values[0]
    }
    return rv
  }
  const playAnimation = () => {
    const objs = sceneInfo[currentScene].objs
    const values = sceneInfo[currentScene].values
    const currentYOffset = yOffset - prevScrollHeight
    const scrollHeight = sceneInfo[currentScene].scrollHeight
    const scrollRatio = currentYOffset / scrollHeight

    switch (currentScene) {
      case 0:
        // console.log('0 play')

        if (scrollRatio <= 0.22) {
          // in
          objs.messageA.current.style.opacity = calcValues(
            values.messageA_opacity_in,
            currentYOffset,
          )
        } else {
          // out
          objs.messageA.current.style.opacity = calcValues(
            values.messageA_opacity_out,
            currentYOffset,
          )
        }

        if (scrollRatio <= 0.55) {
          // in
          objs.messageB.current.style.opacity = calcValues(
            values.messageB_opacity_in,
            currentYOffset,
          )
        } else {
          // out
          objs.messageB.current.style.opacity = calcValues(
            values.messageB_opacity_out,
            currentYOffset,
          )
        }
        break
      case 1:
        // console.log('1 play')
        break
      case 2:
        // console.log('2 play')
        break
      case 3:
        // console.log('3 play')
        break
    }
  }
  const scrollLoop = () => {
    prevScrollHeight = 0
    enterNewScene = false
    for (let i = 0; i < currentScene; i++) {
      prevScrollHeight += sceneInfo[i].scrollHeight
    }

    if (yOffset > prevScrollHeight + sceneInfo[currentScene].scrollHeight) {
      if (currentScene < sceneInfo.length - 1) {
        enterNewScene = true
        currentScene++
        // 스크롤 중 Section 을 넘어갔을때 상태 변경
        setShowScene(`section-${currentScene}`)
      }
    }

    if (yOffset < prevScrollHeight) {
      if (currentScene === 0) return // 브라우저 별 위로 스크롤 했을때 yOffset - 값으로 되는 현상 방지
      enterNewScene = true
      currentScene--
      // 스크롤 중 Section 을 넘어갔을때 상태 변경
      setShowScene(`section-${currentScene}`)
    }
    if (enterNewScene) return
    playAnimation()
  }

  window.addEventListener('resize', setLayout)
  window.addEventListener('scroll', () => {
    yOffset = window.pageYOffset
    scrollLoop()
  })

  setLayout()
}

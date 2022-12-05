import React, { useRef, MutableRefObject, useEffect } from 'react'

interface sectionObjectPropsType {
  [key: string]: MutableRefObject<HTMLDivElement | null>
}
interface scrollInfoType {
  type: string
  heightNum: number
  scrollHeight: number
  objs: sectionObjectPropsType
}

export const useShowScene = (
  {
    section1Ref,
    section2Ref,
    section3Ref,
    section4Ref,
  }: sectionObjectPropsType,
  setShowScene: React.Dispatch<React.SetStateAction<string>>,
) => {
  let yOffset = 0 // window.pageYOffset 대신 쓸 변수
  let prevScrollHeight = 0 //  현재 스크롤 위치(yOffset)보다 이전에 위치한 스크롤 섹션들의 스크롤 높이값의 합
  let currentScene = 0 // 현재 호라성화된(눈 앞에 보고있는) 씬(scroll-section)
  const sceneInfo: scrollInfoType[] = [
    {
      // 1
      type: 'stricky',
      heightNum: 4, // 브라우저 높이의 5배로 scrollHeight 세팅
      scrollHeight: 0,
      objs: {
        container: section1Ref,
      },
    },
    {
      // 2
      type: 'normal',
      heightNum: 4, // 브라우저 높이의 5배로 scrollHeight 세팅
      scrollHeight: 0,
      objs: {
        container: section2Ref,
      },
    },
    {
      // 3
      type: 'stricky',
      heightNum: 4, // 브라우저 높이의 5배로 scrollHeight 세팅
      scrollHeight: 0,
      objs: {
        container: section3Ref,
      },
    },
    {
      // 4
      type: 'stricky',
      heightNum: 4, // 브라우저 높이의 5배로 scrollHeight 세팅
      scrollHeight: 0,
      objs: {
        container: section4Ref,
      },
    },
  ]

  const setLayout = () => {
    // 각 스크롤 섹션의 높이 세팅
    for (let i = 0; i < sceneInfo.length; i++) {
      const info = sceneInfo[i]
      info.scrollHeight = info.heightNum * window.innerHeight

      if (info.objs.container.current) {
        info.objs.container.current.style.height = `${info.scrollHeight}px`
      }
    }
  }

  const scrollLoop = () => {
    prevScrollHeight = 0

    for (let i = 0; i < currentScene; i++) {
      prevScrollHeight += sceneInfo[i].scrollHeight
    }

    if (yOffset > prevScrollHeight + sceneInfo[currentScene].scrollHeight) {
      if (currentScene < sceneInfo.length - 1) {
        currentScene++
      }
    }

    if (yOffset < prevScrollHeight) {
      if (currentScene === 0) return // 브라우저 별 위로 스크롤 했을때 yOffset - 값으로 되는 현상 방지
      currentScene--
    }
    setShowScene(`section-${currentScene}`)
    console.log(currentScene)
  }
  window.addEventListener('resize', setLayout)
  window.addEventListener('scroll', () => {
    yOffset = window.pageYOffset
    scrollLoop()
  })

  setLayout()
}

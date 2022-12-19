import React, { useRef, MutableRefObject, useEffect, useState } from 'react'

interface sectionObjectPropsType {
  sectionRef: {
    [key: string]: MutableRefObject<HTMLDivElement | null>
  }
  mainMessageRef: {
    [key: string]: MutableRefObject<HTMLDivElement | null>
  }
  thirdMainMessageRef: {
    [key: string]: MutableRefObject<HTMLDivElement | null>
  }
  fourthMainMessageRef: {
    [key: string]: MutableRefObject<HTMLDivElement | null>
  }
  canvasRef: {
    [key: string]: MutableRefObject<HTMLDivElement | null>
  }
}
interface scrollInfoType {
  type: string
  heightNum?: number
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
  imageSet,
) => {
  let yOffset = 0 // window.pageYOffset 대신 쓸 변수
  let prevScrollHeight = 0 //  현재 스크롤 위치(yOffset)보다 이전에 위치한 스크롤 섹션들의 스크롤 높이값의 합
  let currentScene = 0 // 현재 호라성화된(눈 앞에 보고있는) 씬(scroll-section)
  let enterNewScene = false // 새로운 scene 이 시작된 순간 true 로 변경

  const sceneInfo: scrollInfoType[] = [
    {
      // 1
      type: 'sticky',
      heightNum: 5, // 브라우저 높이의 5배로 scrollHeight 세팅
      scrollHeight: 0,
      objs: {
        container: props.sectionRef.section1,
        messageA: props.mainMessageRef.mainMessage1,
        messageB: props.mainMessageRef.mainMessage2,
        messageC: props.mainMessageRef.mainMessage3,
        messageD: props.mainMessageRef.mainMessage4,
        canvas: props.canvasRef.canvasElem,
        context: props.canvasRef.canvasElem.current.getContext('2d'),
        videoImages: [],
      },
      values: {
        videoImageCount: 300,
        imageSequence: [0, 299],
        canvas_opacity: [1, 0, { start: 0.9, end: 1 }],
        messageA_opacity_in: [0, 1, { start: 0.1, end: 0.2 }],
        messageB_opacity_in: [0, 1, { start: 0.3, end: 0.4 }],
        messageC_opacity_in: [0, 1, { start: 0.5, end: 0.6 }],
        messageD_opacity_in: [0, 1, { start: 0.7, end: 0.8 }],
        messageA_translateY_in: [20, 0, { start: 0.1, end: 0.2 }],
        messageB_translateY_in: [20, 0, { start: 0.3, end: 0.4 }],
        messageC_translateY_in: [20, 0, { start: 0.5, end: 0.6 }],
        messageD_translateY_in: [20, 0, { start: 0.7, end: 0.8 }],
        messageA_opacity_out: [1, 0, { start: 0.25, end: 0.3 }],
        messageB_opacity_out: [1, 0, { start: 0.45, end: 0.5 }],
        messageC_opacity_out: [1, 0, { start: 0.65, end: 0.7 }],
        messageD_opacity_out: [1, 0, { start: 0.85, end: 0.9 }],
        messageA_translateY_out: [0, -20, { start: 0.25, end: 0.3 }],
        messageB_translateY_out: [0, -20, { start: 0.45, end: 0.5 }],
        messageC_translateY_out: [0, -20, { start: 0.65, end: 0.7 }],
        messageD_translateY_out: [0, -20, { start: 0.85, end: 0.9 }],
      },
    },
    {
      // 2
      type: 'normal',
      scrollHeight: 0,
      objs: {
        container: props.sectionRef.section2,
      },
    },
    {
      // 3
      type: 'sticky',
      heightNum: 5, // 브라우저 높이의 5배로 scrollHeight 세팅
      scrollHeight: 0,
      objs: {
        container: props.sectionRef.section3,
        messageA: props.thirdMainMessageRef.thirdMainMessage1,
        messageB: props.thirdMainMessageRef.thirdMainMessage2,
        messageC: props.thirdMainMessageRef.thirdMainMessage3,
        pinB: props.thirdMainMessageRef.thirdPinB,
        pinC: props.thirdMainMessageRef.thirdPinC,
        canvas: props.canvasRef.canvasElem2,
        context: props.canvasRef.canvasElem2.current.getContext('2d'),
        videoImages: [],
      },
      values: {
        videoImageCount: 960,
        imageSequence: [0, 959],
        canvas_opacity_in: [0, 1, { start: 0, end: 0.1 }],
        canvas_opacity_out: [1, 0, { start: 0.95, end: 1 }],
        messageA_translateY_in: [20, 0, { start: 0.15, end: 0.2 }],
        messageB_translateY_in: [30, 0, { start: 0.5, end: 0.55 }],
        messageC_translateY_in: [30, 0, { start: 0.72, end: 0.77 }],
        messageA_opacity_in: [0, 1, { start: 0.15, end: 0.2 }],
        messageB_opacity_in: [0, 1, { start: 0.5, end: 0.55 }],
        messageC_opacity_in: [0, 1, { start: 0.72, end: 0.77 }],
        messageA_translateY_out: [0, -20, { start: 0.3, end: 0.35 }],
        messageB_translateY_out: [0, -20, { start: 0.58, end: 0.63 }],
        messageC_translateY_out: [0, -20, { start: 0.85, end: 0.9 }],
        messageA_opacity_out: [1, 0, { start: 0.3, end: 0.35 }],
        messageB_opacity_out: [1, 0, { start: 0.58, end: 0.63 }],
        messageC_opacity_out: [1, 0, { start: 0.85, end: 0.9 }],
        pinB_scaleY: [0.5, 1, { start: 0.5, end: 0.55 }],
        pinC_scaleY: [0.5, 1, { start: 0.72, end: 0.77 }],
        pinB_opacity_in: [0, 1, { start: 0.5, end: 0.55 }],
        pinC_opacity_in: [0, 1, { start: 0.72, end: 0.77 }],
        pinB_opacity_out: [1, 0, { start: 0.58, end: 0.63 }],
        pinC_opacity_out: [1, 0, { start: 0.85, end: 0.9 }],
      },
    },
    {
      // 4
      type: 'sticky',
      heightNum: 5, // 브라우저 높이의 5배로 scrollHeight 세팅
      scrollHeight: 0,
      objs: {
        container: props.sectionRef.section4,
        canvasCaption: props.fourthMainMessageRef.canvasCaption,
        canvas: props.canvasRef.canvasImage,
        context: props.canvasRef.canvasImage.current.getContext('2d'),
        imagePath: [imageSet['blend-image-1'], imageSet['blend-image-2']],
        images: [],
      },
      values: {
        rect1X: [0, 0, { start: 0, end: 0 }],
        rect2X: [0, 0, { start: 0, end: 0 }],
        rectStartY: 0,
      },
    },
  ]

  const setCanvasImages = () => {
    let imgElem
    for (let i = 0; i < sceneInfo[0].values.videoImageCount; i++) {
      imgElem = new Image()
      imgElem.src = imageSet[`IMG_${6726 + i}`]
      sceneInfo[0].objs.videoImages.push(imgElem)
    }
    let imgElem2
    for (let i = 0; i < sceneInfo[2].values.videoImageCount; i++) {
      imgElem2 = new Image()
      imgElem2.src = imageSet[`IMG_${7027 + i}`]

      sceneInfo[2].objs.videoImages.push(imgElem2)
    }
    let imgElem3
    for (let i = 0; i < sceneInfo[3].objs.imagePath.length; i++) {
      imgElem3 = new Image()
      imgElem3.src = sceneInfo[3].objs.imagePath[i]

      sceneInfo[3].objs.images.push(imgElem3)
    }
  }
  setCanvasImages()

  const setLayout = () => {
    // 각 스크롤 섹션의 높이 세팅ㄹ
    for (let i = 0; i < sceneInfo.length; i++) {
      const info: scrollInfoType = sceneInfo[i]
      if (info.type === 'sticky' && info.heightNum) {
        info.scrollHeight = info.heightNum * window.innerHeight
      } else if (info.type === 'normal' && info.objs.container.current) {
        info.scrollHeight =
          info.objs.container.current.offsetHeight + window.innerHeight
      }
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

    // canvas 를 브라우저 사이즈가 변경되더라도 항상 중앙 정렬 할 수 있도록 하는 소스
    const heightRatio = window.innerHeight / 1080
    sceneInfo[0].objs.canvas.current.style.transform = `translate3d(-50%, -50%, 0) scale(${heightRatio})`
    sceneInfo[2].objs.canvas.current.style.transform = `translate3d(-50%, -50%, 0) scale(${heightRatio})`
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
        // console.log(objs.videoImages)

        const sequence = Math.round(
          calcValues(values.imageSequence, currentYOffset),
        )

        if (sequence > 0) {
          objs.context.drawImage(objs.videoImages[sequence], 0, 0)
          objs.canvas.current.style.opacity = calcValues(
            values.canvas_opacity,
            currentYOffset,
          )
        }

        if (scrollRatio <= 0.22) {
          // in
          objs.messageA.current.style.opacity = calcValues(
            values.messageA_opacity_in,
            currentYOffset,
          )
          objs.messageA.current.style.transform = `translate3d(0, ${calcValues(
            values.messageA_translateY_in,
            currentYOffset,
          )}%, 0)`
        } else {
          // out
          objs.messageA.current.style.opacity = calcValues(
            values.messageA_opacity_out,
            currentYOffset,
          )
          objs.messageA.current.style.transform = `translate3d(0, ${calcValues(
            values.messageA_translateY_out,
            currentYOffset,
          )}%, 0)`
        }

        if (scrollRatio <= 0.42) {
          // in
          objs.messageB.current.style.opacity = calcValues(
            values.messageB_opacity_in,
            currentYOffset,
          )
          objs.messageB.current.style.transform = `translate3d(0, ${calcValues(
            values.messageB_translateY_in,
            currentYOffset,
          )}%, 0)`
        } else {
          // out
          objs.messageB.current.style.opacity = calcValues(
            values.messageB_opacity_out,
            currentYOffset,
          )
          objs.messageB.current.style.transform = `translate3d(0, ${calcValues(
            values.messageB_translateY_out,
            currentYOffset,
          )}%, 0)`
        }

        if (scrollRatio <= 0.62) {
          // in
          objs.messageC.current.style.opacity = calcValues(
            values.messageC_opacity_in,
            currentYOffset,
          )
          objs.messageC.current.style.transform = `translate3d(0, ${calcValues(
            values.messageC_translateY_in,
            currentYOffset,
          )}%, 0)`
        } else {
          // out
          objs.messageC.current.style.opacity = calcValues(
            values.messageC_opacity_out,
            currentYOffset,
          )
          objs.messageC.current.style.transform = `translate3d(0, ${calcValues(
            values.messageC_translateY_out,
            currentYOffset,
          )}%, 0)`
        }

        if (scrollRatio <= 0.82) {
          // in
          objs.messageD.current.style.opacity = calcValues(
            values.messageD_opacity_in,
            currentYOffset,
          )
          objs.messageD.current.style.transform = `translate3d(0, ${calcValues(
            values.messageD_translateY_in,
            currentYOffset,
          )}%, 0)`
        } else {
          // out
          objs.messageD.current.style.opacity = calcValues(
            values.messageD_opacity_out,
            currentYOffset,
          )
          objs.messageD.current.style.transform = `translate3d(0, ${calcValues(
            values.messageD_translateY_out,
            currentYOffset,
          )}%, 0)`
        }

        break
      case 2:
        const sequence2 = Math.round(
          calcValues(values.imageSequence, currentYOffset),
        )

        if (sequence2 > 0) {
          objs.context.drawImage(objs.videoImages[sequence2], 0, 0)
        }

        if (scrollRatio <= 0.5) {
          // in
          objs.canvas.current.style.opacity = calcValues(
            values.canvas_opacity_in,
            currentYOffset,
          )
        } else {
          // out
          objs.canvas.current.style.opacity = calcValues(
            values.canvas_opacity_out,
            currentYOffset,
          )
        }
        if (scrollRatio <= 0.25) {
          // in

          objs.messageA.current.style.opacity = calcValues(
            values.messageA_opacity_in,
            currentYOffset,
          )
          objs.messageA.current.style.transform = `translate3d(0, ${calcValues(
            values.messageA_translateY_in,
            currentYOffset,
          )}%, 0)`
        } else {
          // out
          objs.messageA.current.style.opacity = calcValues(
            values.messageA_opacity_out,
            currentYOffset,
          )
          objs.messageA.current.style.transform = `translate3d(0, ${calcValues(
            values.messageA_translateY_out,
            currentYOffset,
          )}%, 0)`
        }

        if (scrollRatio <= 0.57) {
          // in
          objs.messageB.current.style.transform = `translate3d(0, ${calcValues(
            values.messageB_translateY_in,
            currentYOffset,
          )}%, 0)`
          objs.messageB.current.style.opacity = calcValues(
            values.messageB_opacity_in,
            currentYOffset,
          )
          objs.pinB.current.style.transform = `scaleY(${calcValues(
            values.pinB_scaleY,
            currentYOffset,
          )})`
        } else {
          // out
          objs.messageB.current.style.transform = `translate3d(0, ${calcValues(
            values.messageB_translateY_out,
            currentYOffset,
          )}%, 0)`
          objs.messageB.current.style.opacity = calcValues(
            values.messageB_opacity_out,
            currentYOffset,
          )
          objs.pinB.current.style.transform = `scaleY(${calcValues(
            values.pinB_scaleY,
            currentYOffset,
          )})`
        }

        if (scrollRatio <= 0.83) {
          // in
          objs.messageC.current.style.transform = `translate3d(0, ${calcValues(
            values.messageC_translateY_in,
            currentYOffset,
          )}%, 0)`
          objs.messageC.current.style.opacity = calcValues(
            values.messageC_opacity_in,
            currentYOffset,
          )
          objs.pinC.current.style.transform = `scaleY(${calcValues(
            values.pinC_scaleY,
            currentYOffset,
          )})`
        } else {
          // out
          objs.messageC.current.style.transform = `translate3d(0, ${calcValues(
            values.messageC_translateY_out,
            currentYOffset,
          )}%, 0)`
          objs.messageC.current.style.opacity = calcValues(
            values.messageC_opacity_out,
            currentYOffset,
          )
          objs.pinC.current.style.transform = `scaleY(${calcValues(
            values.pinC_scaleY,
            currentYOffset,
          )})`
        }

        break
      case 3:
        // console.log('3 play')
        // 가로/세로 모두 꽉차게 하기 위해서 여기에 셋팅(계산 필요)
        const widthRatio = window.innerWidth / objs.canvas.current.width
        const heightRatio = window.innerHeight / objs.canvas.current.height

        let canvasScaleRatio

        if (widthRatio <= heightRatio) {
          // 캔버스보다 브라우저 창이 홀쭉한 경우
          canvasScaleRatio = heightRatio
        } else {
          // 캔버스보다 브라우저 창이 납작한 경우
          canvasScaleRatio = widthRatio
        }

        objs.canvas.current.style.transform = `scale(${canvasScaleRatio})`
        objs.context.fillStyle = 'white'
        objs.context.drawImage(objs.images[0], 0, 0)

        // 캔버스 사이즈에 맞춰 가정한 innerWidth 와 innerHeight
        const recalculatedInnerWidth =
          document.body.offsetWidth / canvasScaleRatio
        const recalculatedInnerHeight = window.innerHeight / canvasScaleRatio

        if (!values.rectStartY) {
          // values.rectStartY = objs.canvas.current.getBoundingClientRect().top
          values.rectStartY =
            objs.canvas.current.offsetTop +
            (objs.canvas.current.height -
              objs.canvas.current.height * canvasScaleRatio) /
              2

          values.rect1X[2].start = window.innerHeight / 2 / scrollHeight
          values.rect2X[2].start = window.innerHeight / 2 / scrollHeight
          values.rect1X[2].end = values.rectStartY / scrollHeight
          values.rect2X[2].end = values.rectStartY / scrollHeight
          console.log(values)
        }

        const whiteRectWidth = recalculatedInnerWidth * 0.15

        values.rect1X[0] =
          (objs.canvas.current.width - recalculatedInnerWidth) / 2
        values.rect1X[1] = values.rect1X[0] - whiteRectWidth

        values.rect2X[0] =
          values.rect1X[0] + recalculatedInnerWidth - whiteRectWidth
        values.rect2X[1] = values.rect2X[0] + whiteRectWidth

        // 좌우 흰색 박스 그리기

        objs.context.fillRect(
          parseInt(calcValues(values.rect1X, currentYOffset)),
          0,
          parseInt(whiteRectWidth),
          objs.canvas.current.height,
        )
        objs.context.fillRect(
          parseInt(calcValues(values.rect2X, currentYOffset)),
          0,
          parseInt(whiteRectWidth),
          objs.canvas.current.height,
        )

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

    // if (enterNewScene) return

    playAnimation()
  }

  window.addEventListener('load', () => {
    setLayout()
    sceneInfo[0].objs.context.drawImage(sceneInfo[0].objs.videoImages[0], 0, 0)
  })
  window.addEventListener('resize', setLayout)
  window.addEventListener('scroll', () => {
    yOffset = window.pageYOffset
    scrollLoop()
  })

  setLayout()
}

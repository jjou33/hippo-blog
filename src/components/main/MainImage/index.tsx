import React, { useEffect, useState } from 'react'
import { useTypingTitle } from 'hooks/useTypingTitle'
import Image from './MainImage'

import { menuOpenState } from 'states/menuOpenState'
import { useRecoilValue, useSetRecoilState } from 'recoil'
import WaveImageAnimation from './WaveImageAnimation'
import ScrollIndicator from 'components/common/ScrollIndicator/ArrowIndicator'

import * as S from './styles'

interface MainImageProps {
  imagePath: {
    [key: string]: string
  }
}
const typedList = ['FRONT DEVELOPER', 'HAPPY', 'PASSION', 'ENJOY']

const MainImage = ({ imagePath }: MainImageProps) => {
  const setState = useSetRecoilState(menuOpenState)
  const state = useRecoilValue<{ [key: string]: boolean }>(menuOpenState)
  const currentTitle = useTypingTitle(typedList)
  const [totalHeight, setTotalHeight] = useState<number>(0)
  const [totalWidth, setTotalWidth] = useState<number>(0)

  const closeModal = () => {
    setState(false)
  }
  useEffect(() => {
    setTotalHeight(window.innerHeight)
    setTotalWidth(window.innerWidth)

    const changeSize = () => {
      setTotalHeight(window.innerHeight)
      setTotalWidth(window.innerWidth)
    }

    window.addEventListener('resize', changeSize)
  }, [])

  return (
    <>
      <S.MainAnimationContainer>
        <S.MainImageTextWrapper
          totalHeight={totalHeight}
          totalWidth={totalWidth}
        >
          <S.MainImageStaticText>Welcome to HippoDev</S.MainImageStaticText>
          <br />
          {/* <S.MainImageDynamicText>I AM {currentTitle}</S.MainImageDynamicText> */}
        </S.MainImageTextWrapper>

        <Image />
        <ScrollIndicator />
        {/* <S.MainImageWrapper>
          <WaveImageAnimation
            imagePath={imagePath}
            totalHeight={totalHeight}
            totalWidth={totalWidth}
          />
        </S.MainImageWrapper> */}
      </S.MainAnimationContainer>
      {state && <S.ModalOverlay visible={state} />}
    </>
  )
}

export default MainImage

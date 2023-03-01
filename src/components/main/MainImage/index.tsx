import React, { useState } from 'react'
import Image from './MainImage'
import Modal from 'components/common/Modal/Modal'
import ScrollIndicator from 'components/common/ScrollIndicator/ArrowIndicator'
import MouseScrollIndicator from 'components/common/ScrollIndicator/MouseIndicator'
import { useTypingTitle } from 'hooks/useTypingTitle'
import { menuOpenState } from 'states/menuOpenState'
import { useRecoilValue, useSetRecoilState } from 'recoil'

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

  const calcSize = () => {
    console.log('total : ', totalHeight)
    return (totalHeight + totalWidth) / 2
  }
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

        <Image imagePath={imagePath} />
        <S.CircleDiv>
          <MouseScrollIndicator />
        </S.CircleDiv>
      </S.MainAnimationContainer>
      {state && <Modal visible={state} />}
    </>
  )
}

export default MainImage

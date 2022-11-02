import React, { useRef } from 'react'
import ProfileImage from './ProfileImage'
import NavTabMenu from './NavTabMenu'
import { useStarEffect } from 'hooks/useStarEffect'
import * as Styled from './style/IntroductionStyled'

interface IntroductionProps {
  profileImage: string
  roketImage: string
}

const Introduction = ({ profileImage, roketImage }: IntroductionProps) => {
  // const sceneRef = useStarEffect()

  return (
    <Styled.IntroductionContainer>
      <Styled.IntroductionWrapper>
        <ProfileImage profileImage={profileImage} roketImage={roketImage} />
        <Styled.SubTitle>Hippo's Dev</Styled.SubTitle>
        <NavTabMenu />
      </Styled.IntroductionWrapper>
    </Styled.IntroductionContainer>
  )
}

export default Introduction

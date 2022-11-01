import React from 'react'
import ProfileImage from './ProfileImage'
import NavTabMenu from './NavTabMenu'
import * as Styled from './style/IntroductionStyled'

interface IntroductionProps {
  profileImage: string
}

const Introduction = ({ profileImage }: IntroductionProps) => {
  return (
    <Styled.IntroductionContainer>
      <Styled.IntroductionWrapper>
        <ProfileImage profileImage={profileImage} />
        <Styled.SubTitle>Hippo's Dev</Styled.SubTitle>
        <NavTabMenu />
      </Styled.IntroductionWrapper>
    </Styled.IntroductionContainer>
  )
}

export default Introduction

import React from 'react'
import ProfileImage from './ProfileImage'
import NavTabMenu from './NavTabMenu'
import {
  IntroductionContainer,
  IntroductionWrapper,
  SubTitle,
} from './style/IntroductionStyled'

interface IntroductionProps {
  profileImage: string
}

const Introduction = ({ profileImage }: IntroductionProps) => {
  return (
    <IntroductionContainer>
      <IntroductionWrapper>
        <ProfileImage profileImage={profileImage} />
        <SubTitle>Hippo's Dev</SubTitle>
        <NavTabMenu />
      </IntroductionWrapper>
    </IntroductionContainer>
  )
}

export default Introduction

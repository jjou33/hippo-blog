import React, { FunctionComponent, useEffect } from 'react'
import styled from '@emotion/styled'
import ProfileImage from './ProfileImage'
import NavigationTabMenu from './NavigationTabMenu'

interface IntroductionProps {
  profileImage: string
}

const Container = styled.div`
  width: 100%;
  height: 350px;
  background-image: linear-gradient(0deg, #ebeff4 20%, #c6dcf0 45%);
`

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 768px) {
    width: 100%;
    height: 300px;
    padding: 0 20px;
  }
`

const SubTitle = styled.div`
  font-size: 10px;
  font-weight: 400;
  font-style: italic;

  @media (max-width: 768px) {
    font-size: 15px;
  }
`

const Introduction: FunctionComponent<IntroductionProps> = function ({
  profileImage,
}) {
  return (
    <Container>
      <Wrapper>
        <ProfileImage profileImage={profileImage} />
        <SubTitle>Hippo's Dev</SubTitle>
        <NavigationTabMenu />
      </Wrapper>
    </Container>
  )
}

export default Introduction

import React, { FunctionComponent } from 'react'
import styled from '@emotion/styled'
// import { IGatsbyImageData } from 'gatsby-plugin-image'
import ProfileImage from 'components/Main/ProfileImage'

type IntroductionProps = {
  profileImage: string
}

const Background = styled.div`
  width: 100%;
  height: 350px;
  background-image: linear-gradient(60deg, #f1f3f5 0%, #c6daf0 100%);
  color: black;
`

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
  width: 100%;
  height: 100vh;
  margin: 0 auto;

  @media (max-width: 768px) {
    width: 100%;
    height: 300px;
    padding: 0 20px;
  }
`

const SubTitle = styled.div`
  margin-top: 5px;
  font-size: 20px;
  font-weight: 400;

  @media (max-width: 768px) {
    font-size: 15px;
  }
`

const Title = styled.div`
  margin-top: 0px;
  font-size: 20px;
  font-weight: 700;

  @media (max-width: 768px) {
    font-size: 25px;
  }
`

const Introduction: FunctionComponent<IntroductionProps> = function ({
  profileImage,
}) {
  return (
    <Background>
      <Wrapper>
        <ProfileImage profileImage={profileImage} />

        <Title>HIPPO DEV</Title>
        <SubTitle>개발 일기장</SubTitle>
      </Wrapper>
    </Background>
  )
}

export default Introduction

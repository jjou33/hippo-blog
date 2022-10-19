import React, { FunctionComponent } from 'react'
import styled from '@emotion/styled'
// import { IGatsbyImageData } from 'gatsby-plugin-image'
import ProfileImage from './ProfileImage'

type IntroductionProps = {
  profileImage: string
}

const Background = styled.div`
  width: 100%;
  height: 350px;
  background-image: linear-gradient(60deg, #c3dcd2 0%, #cddff2 100%);
  color: black;
`

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
  width: 100%;
  height: 116px;
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

const Logo = styled.img`
  display: flex;
  justify-content: center;
  width: 200px;
  height: 30px;
`

const Introduction: FunctionComponent<IntroductionProps> = function ({
  profileImage,
  logo,
}) {
  return (
    <Background>
      <Wrapper>
        <ProfileImage profileImage={profileImage} />

        <Title>
          <Logo src={logo}></Logo>
        </Title>
        <SubTitle>개발 일기장</SubTitle>
      </Wrapper>
    </Background>
  )
}

export default Introduction

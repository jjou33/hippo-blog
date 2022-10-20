import React, { FunctionComponent, useEffect } from 'react'
import styled from '@emotion/styled'
// import { IGatsbyImageData } from 'gatsby-plugin-image'
import ProfileImage from './ProfileImage'
import ComputerModel from 'components/Common/ComputerGraphic'

type IntroductionProps = {
  profileImage: string
}

const Background = styled.div`
  width: 100%;
  height: 350px;
  background-image: linear-gradient(60deg, #94def3 0%, #ebf0c4 100%);
  color: black;
`

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
  width: 100%;
  height: 200px;
  margin: 0 auto;
  z-index: 1;

  #canvas {
    background-color: linear-gradient(60deg, #94def3 0%, #ebf0c4 100%);
  }
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
  color: #676565;

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
const Temp = styled.canvas``
const Introduction: FunctionComponent<IntroductionProps> = function ({
  profileImage,
}) {
  const ref = ComputerModel()

  useEffect(() => {
    const canvas = document.getElementById('canvas')
    if (ref.current) {
      const ctx = ref.current
      console.log('ctx : ', ctx)
    }
  }, [])
  return (
    <Background>
      <Wrapper>
        {/* <ProfileImage profileImage={profileImage} /> */}
        <Temp ref={ref} />
        <SubTitle>Hippo's Dev</SubTitle>
      </Wrapper>
    </Background>
  )
}

export default Introduction

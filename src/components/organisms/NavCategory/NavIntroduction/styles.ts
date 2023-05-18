import styled from '@emotion/styled'
import { keyframes } from '@emotion/react'

export const ImageWrapper = styled.div`
  width: 100px;
  height: 100px;
  margin: 50px 20px 0px 0px;
  border-radius: 15px;

  @media (max-width: 768px) {
    width: 80px;
    height: 80px;
  }
`

const animate = keyframes`
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(200vh);
  }
`

export const NavIntroContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 320px;
  border-width: 0 0 0.5px 0;
  border-style: solid;
  background-image: linear-gradient(0deg, white 20%, #fdf3db 45%);
  i {
    position: absolute;
    top: -250px;
    background: rgba(255, 255, 255, 0.5);
    animation: ${animate} linear infinite;
  }

  @media (max-width: 768px) {
    width: 100%;
    height: 300px;
    padding: 0 20px;
  }
`

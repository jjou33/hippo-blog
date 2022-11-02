import styled from '@emotion/styled'
import { keyframes } from '@emotion/react'

const animate = keyframes`
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(200vh);
  }
`
export const IntroductionContainer = styled.div`
  width: 100%;
  height: 280px;
  border-width: 0 0 0.5px 0;
  border-style: solid;
  background-image: linear-gradient(0deg, white 20%, #fdf3db 45%);
  i {
    position: absolute;
    top: -250px;
    background: rgba(255, 255, 255, 0.5);
    animation: ${animate} linear infinite;
  }
`

export const IntroductionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 768px) {
    width: 100%;
    height: 300px;
    padding: 0 20px;
  }
`

export const SubTitle = styled.div`
  font-size: 10px;
  font-weight: 400;
  font-style: italic;

  @media (max-width: 768px) {
    font-size: 15px;
  }
`

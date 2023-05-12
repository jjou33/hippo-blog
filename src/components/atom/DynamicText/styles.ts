import styled from '@emotion/styled'
import { keyframes } from '@emotion/react'

const blinkCursorKeyframe = keyframes`
  50% {
    opacity: 0;
  }
`

interface StaticTextPropsType {
  fontFamily?: string
  fontColor?: string
  fontSize?: number
}

export const MainImageDynamicText = styled.span`
  font-family: ${(props: StaticTextPropsType) =>
    props.fontFamily ? props.fontFamily : ''};
  color: ${(props: StaticTextPropsType) =>
    props.fontColor ? props.fontColor : 'rgb(238, 240, 124)'};

  &::after {
    content: '';
    position: absolute;
    background-color: #e65454;

    height: 55px;
    width: 5px;
    animation: ${blinkCursorKeyframe} 0.5s infinite;
    margin-top: 20px;
    @media screen and (max-width: 768px) {
      height: 30px;
      margin-top: 0;
    }
  }
`

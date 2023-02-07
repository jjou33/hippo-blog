import styled from '@emotion/styled'
import { keyframes, css } from '@emotion/react'
export const ArrowScroll = keyframes`
  0% {
    bottom: 80%;
    opacity: 1;
  }

  100% {
    bottom: 20%;
    opacity: 0;
  }
`

export const arrow1 = keyframes`
  100% {
    opacity: 0;
    top: 100%;
  }
`
export const arrow2 = keyframes`
  100% {
    opacity: 0;
    top: 50%;
  }
`
export const ArrowIndicatorWrapper = styled.div`
  position: relative;
  height: 4em;
  bottom: 20%;
  left: 50%;
  z-index: 1004;
`

export const ArrowIndicator = styled.div`
  border: solid black;
  border-width: 0 5px 5px 0;
  display: inline-block;
  padding: 12px;
  position: absolute;
  top: 0;

  transform: translateX(-50%) rotate(45deg);

  :nth-of-type(2) {
    animation: ${arrow1} 1.5s ease-in-out infinite;
  }

  :nth-of-type(3) {
    animation: ${arrow2} 1.5s ease-in-out infinite;
  }
`

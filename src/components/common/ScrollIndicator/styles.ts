import styled from '@emotion/styled'
import { keyframes } from '@emotion/react'
export const scroll = keyframes`
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
  border: solid white;
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

export const MouseIndicatorWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 5px;
`
export const MouseIndicator = styled.div`
  position: relative;
  width: 2.5em;
  height: 4em;
  border: solid 4px #3e54ac;
  border-radius: 30px;

  &::before {
    content: '';
    position: absolute;
    width: 0.4em;
    height: 0.4em;
    border-radius: 50%;
    background: #3e54ac;
    left: 50%;
    transform: translateX(-50%);
    animation: ${scroll} 2s infinite;
  }
`

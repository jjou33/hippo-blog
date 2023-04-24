import styled from '@emotion/styled'
import { keyframes, css } from '@emotion/react'

/**
 * @description Hover 혹은 Event 발생 시 양옆으로 흔들리는 Keyframes
 */
export const boat_in_animation = keyframes`
 0% {
   transform: rotate(10deg);
 }

 50% {
   transform: rotate(-10deg);
 }
 100% {
   transform: rotate(10deg);
 }
 `

export const WaveAnimationWrapper = styled.div`
  margin-bottom: 20px;
`

const animate = keyframes`
  0% {
   background-position-x: 0px;
  }

 100% {
   background-position-x: 1000px;
 }
`
const animate2 = keyframes`
 0% {
   background-position-x: 0px;
 }

 100% {
   background-position-x: -1000px;
 }
`
interface WaveItemProps {
  src: string
  waveType: string
}
export const WaveAnimationItem = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 100px;

  ${(props: WaveItemProps) => {
    if (props.waveType && props.src) {
      switch (props.waveType) {
        case 'first':
          return css`
            background: url(${props.src});
            animation: ${animate} 30s linear infinite;
            z-index: 900;
            opacity: 1;
            animation-delay: 0s;
            bottom: 0px;
          `
        case 'second':
          return css`
            background: url(${props.src});
            animation: ${animate2} 15s linear infinite;
            z-index: 899;
            opacity: 0.5;
            animation-delay: -5s;
            bottom: 5px;
          `
        case 'third':
          return css`
            background: url(${props.src});
            animation: ${animate2} 5s linear infinite;
            z-index: 898;
            opacity: 0.2;
            animation-delay: -2s;
            bottom: 10px;
          `
        case 'fourth':
          return css`
            background: url(${props.src});
            animation: ${animate2} 15s linear infinite;
            z-index: 897;
            opacity: 0.7;
            animation-delay: -5s;
            bottom: 15px;
          `
        case 'five':
          return css`
            background: url(${props.src});
            animation: ${animate2} 15s linear infinite;
            z-index: 997;
            opacity: 0.9;
            animation-delay: -1s;
            bottom: 15px;
          `
        default:
          return css``
      }
    } else {
      return css`
        display: none;
      `
    }
  }}

  background-size: 1000px 100px;
`
export const BoatImage = styled.img``
export const BoatIcon = styled.div`
  position: absolute;
  width: 80px;
  height: 80px;
  z-index: 1001;
  animation: ${boat_in_animation} 10s ease infinite;

  ${(props: { totalHeight: number; totalWidth: number }) => {
    return css`
      top: ${props.totalHeight * 0.82}px;
      margin-left: ${props.totalWidth * 0.1}px;
    `
  }}
`

export const islandIcon = styled.div`
  position: absolute;
  width: 150px;
  height: 150px;
  margin: 90px 0 0 1000px;
  z-index: 1001;
`

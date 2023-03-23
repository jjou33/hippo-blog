import styled from '@emotion/styled'
import { keyframes, css } from '@emotion/react'
import { boat_in_animation } from 'styles/AnimationKeyframes'

export const MainAnimationContainer = styled.div`
  height: calc(100vh);
  

  @media (max-width: 768px) {
    height: 60vh;
  }
  /* overflow: hidden; */
`

export const MainImageTextWrapper = styled.div`
  position: absolute;
  width: 100%;
  text-align: center;
  font-weight: 300;
  top: 30%;
  color: black;
  letter-spacing: 5px;

  span {
    background: -webkit-linear-gradient(white, #38495a);
    -webkit-background-clip: text;
    background-clip: text;
  }

  ${(props: { totalHeight: number; totalWidth: number }) => {
    const averageValue: number =
      (props.totalHeight + props.totalWidth * 0.8) / 2
    return props.totalHeight
      ? css`
          font-size: ${averageValue * 0.06}px;
        `
      : css`
          font-size: 60px;
        `
  }}
`
export const MainImageStaticText = styled.h3`
  font-family: Rocher;
  text-transform: uppercase;

  display: inline-block;
`

const blinkCursorKeyframe = keyframes`
  50% {
    opacity: 0;
  }
`

export const MainImageDynamicText = styled.span`
  color: #b7efe8;
  font-family: MontserratAlternates;
  &::after {
    content: '';
    position: absolute;
    background-color: #e65454;

    height: 100px;
    width: 5px;
    animation: ${blinkCursorKeyframe} 1s infinite;

    ${(props: { totalHeight: number; totalWidth: number }) => {
      const averageValue: number =
        (props.totalHeight + props.totalWidth * 0.8) / 2
      return props.totalHeight
        ? css`
            height: ${averageValue * 0.1}px;
          `
        : css`
            font-size: 100px;
          `
    }}
  }
`
export const MainImage = styled.img`
  width: 100vw;
  height: calc(100vh - 70px);
  background-color: rgba(0, 0, 0, 0.6);
  margin-top: 40px;
  cursor: auto;
  -webkit-user-drag: none;
  -khtml-user-drag: none;
  -moz-user-drag: none;
  -o-user-drag: none;

  @media (max-width: 768px) {
    height: 60vh;
    margin-top: 0px;
  }
`

export const CircleDiv = styled.div`
  position: relative;
  bottom: 50px;
  margin: auto;
  width: 130px;
  height: 100px;
  border-radius: 50%;
  background-color: white;
  z-index: 998;

  @media (max-width: 768px) {
    display: none;
  }
`

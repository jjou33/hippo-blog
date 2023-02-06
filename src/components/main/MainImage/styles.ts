import styled from '@emotion/styled'
import { keyframes, css } from '@emotion/react'
import { boat_in_animation } from 'styles/AnimationKeyframes'
export const WaveAnimationWrapper = styled.div`
  margin-bottom: 20px;

  @media (max-width: 768px) {
    display: none;
  }
`

interface FooterWavePropsType {
  src: string
  waveType: string
}

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
  totalHeight: number
}
export const WaveAnimationItem = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 100px;
  ${(props: WaveItemProps) =>
    props.totalHeight
      ? css`
          top: ${props.totalHeight - 110}px;
        `
      : css`
          top: ${props.totalHeight};
        `}

  ${(props: WaveItemProps) => {
    if (props.waveType && props.src) {
      switch (props.waveType) {
        case 'first':
          return css`
            background: url(${props.src});
            animation: ${animate} 30s linear infinite;
            z-index: 1000;
            opacity: 1;
            animation-delay: 0s;
            bottom: 0px;
          `
        case 'second':
          return css`
            background: url(${props.src});
            animation: ${animate2} 15s linear infinite;
            z-index: 999;
            opacity: 0.5;
            animation-delay: -5s;
            bottom: 5px;
          `
        case 'third':
          return css`
            background: url(${props.src});
            animation: ${animate2} 5s linear infinite;
            z-index: 998;
            opacity: 0.2;
            animation-delay: -2s;
            bottom: 10px;
          `
        case 'fourth':
          return css`
            background: url(${props.src});
            animation: ${animate2} 15s linear infinite;
            z-index: 997;
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
          return css`
            display: none;
          `
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
/**
 * Main Image Section
 */

const blinkCursorKeyframe = keyframes`
  50% {
    opacity: 0;
  }
`

export const MainAnimationContainer = styled.div`
  height: 97vh;
  margin-left: 2px;

  @media (max-width: 768px) {
    display: none;
  }
  overflow: hidden;
`
export const MainImageTextWrapper = styled.div`
  position: absolute;

  margin-left: 10%;
  font-weight: 300;
  top: 10%;
  color: black;
  letter-spacing: 5px;
  span {
    background: -webkit-linear-gradient(white, #38495a);
    -webkit-background-clip: text;
    background-clip: text;
  }

  ${(props: { totalHeight: number; totalWidth: number }) => {
    const averageValue: number = (props.totalHeight + props.totalWidth) / 2
    return props.totalHeight
      ? css`
          font-size: ${averageValue * 0.06}px;
        `
      : css`
          font-size: 60px;
        `
  }}

  @media (max-width: 768px) {
    font-size: 30px;
  }
`

export const MainImage = styled.div`
  ${(props: { backgroundImage: string }) =>
    props.backgroundImage
      ? css`
          background-image: url(${props.backgroundImage});
        `
      : css`
          // TODO NO IMAGE Background 추가 필요
        `}
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 0 100%;
  width: 100vw;
  height: 100%;
`

export const MainImageItem = styled.img``
const TextEffectKeyFrame = keyframes`
  to {
    background-position: 200% center;
  }
`
export const MainImageStaticText = styled.h4`
  text-transform: uppercase;
  background-image: linear-gradient(
    -225deg,
    #b7b7ee 0%,
    #b197cc 29%,
    #ff1361 67%,
    #fff800 100%
  );
  background-size: auto auto;
  background-clip: border-box;
  background-size: 200% auto;
  color: #fff;
  background-clip: text;
  text-fill-color: transparent;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: ${TextEffectKeyFrame} 2s linear infinite;
  display: inline-block;
`
export const MainImageDynamicText = styled.span`
  /* color: #f44b2a; */
  &::after {
    content: '';
    position: absolute;
    background-color: #e65454;

    height: 100px;
    width: 5px;
    animation: ${blinkCursorKeyframe} 1s infinite;
  }
`
export const MainImageWrapper = styled.div`
  height: 100vh;
  width: 100%;
`

export const MainImageIconItem = styled.div`
  position: absolute;
  ${(props: { iconType: string; totalHeight: number; totalWidth: number }) => {
    if (props.iconType) {
      switch (props.iconType) {
        case 'html':
          return css`
            top: ${props.totalHeight * 0.1}px;
            left: ${props.totalHeight * 0.4}px;
          `
        case 'vue':
          return css`
            top: ${props.totalHeight * 0.1}px;
            left: ${props.totalHeight}px;
          `

        case 'react':
          return css`
            top: ${props.totalHeight * 0.1}px;
            left: ${props.totalHeight * 0.6}px;
          `

        case 'javascript':
          return css`
            top: ${props.totalHeight * 0.1}px;
            left: ${props.totalHeight * 0.8}px;
          `
        default:
          return css``
      }
    } else {
      return css`
        top: ${props.totalHeight * 0.1}px;
        left: ${props.totalHeight * 0.1}px;
      `
    }
  }}
`

export const HeaderContainer = styled.nav`
  position: fixed;
  top: 0;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: saturate(180%) blur(15px);
  left: 0;
  z-index: 10;
  width: 100%;
  height: 44px;
  border-bottom: 1px solid #ddd;
  padding: 0 1rem;
  color: white;
`

export const HeaderItemTitle = styled.div`
  margin-right: auto;
`
export const HeaderItemLink = styled.div``

export const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;

  max-width: 1600px;
  height: 100%;
  margin: 0 auto;

  a {
    font-size: 1rem;
  }
  a:not(${HeaderItemTitle}) {
    margin-left: 2px;
  }

  ${HeaderItemTitle} {
    margin-right: auto;
    font-size: 1.4rem;
    font-weight: bold;
  }
`

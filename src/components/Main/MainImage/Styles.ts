import styled from '@emotion/styled'
import { keyframes, css } from '@emotion/react'
import { boat_in_animation } from 'styles/AnimationKeyframes'
export const FooterFirstWaveAnimation = styled.div`
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

export const FooterWaveStyle = styled.div`
  position: absolute;
  bottom: 0;
  top: ${props => props.totalHeight - 110}px;
  width: 100%;
  height: 100px;

  ${(props: FooterWavePropsType) => {
    if (props.src) {
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
      }
    }
  }}

  background-size: 1000px 100px;
`
export const BoatImage = styled.img``
export const BoatIcon = styled.div`
  position: absolute;
  width: 80px;
  height: 80px;
  /* margin: 90px 0 0 300px; */
  z-index: 1001;
  animation: ${boat_in_animation} 10s ease infinite;

  ${(props: any) => {
    return css`
      /* margin: 0 0 ${props.totalHeight * 0.4}px ${props.totalHeight *
      0.3}px; */
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

  ${(props: any) => {
    if (props.totalHeight) {
      return css`
        font-size: ${props.totalHeight * 0.08}px;
      `
    }
  }};
  font-weight: 300;
  top: 10%;
  color: black;
  letter-spacing: 5px;
  span {
    background: -webkit-linear-gradient(white, #38495a);
    -webkit-background-clip: text;
  }

  @media (max-width: 768px) {
    font-size: 30px;
  }
`

export const MainImage = styled.div`
  background-image: url(${(props: any) => props.backgroundImage});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 0 100%;
  width: 100vw;
  height: 100%;
`

export const MainImageStaticText = styled.span`
  top: 50%;
  color: white;
`
export const MainImageDynamicText = styled.span`
  color: #f44b2a;
  &::after {
    content: '';
    position: absolute;
    background-color: #e65454;

    height: 80px;
    width: 5px;
    animation: ${blinkCursorKeyframe} 1s infinite;
  }
`
export const MainImageWrapper = styled.div`
  height: 100vh;
  width: 100%;
`
export const MainImageIconWrapper = styled.div`
  display: flex;
  ${(props: any) => {
    return css`
      /* margin: 0 0 ${props.totalHeight * 0.4}px ${props.totalHeight *
      0.3}px; */
      top: ${props.totalHeight * 0.1}px;
      left: ${props.totalHeight * 0.1}px;
    `
  }}
`

export const MainImageHtmlIcon = styled.div`
  position: absolute;
  /* margin: 50px 0 0 200px; */
  ${(props: any) => {
    return css`
      /* margin: 0 0 ${props.totalHeight * 0.4}px ${props.totalHeight *
      0.3}px; */
      top: ${props.totalHeight * 0.1}px;
      left: ${props.totalHeight * 0.4}px;
    `
  }}
`

export const MainImageVueIcon = styled.div`
  position: absolute;
  ${(props: any) => {
    return css`
      /* margin: 0 0 ${props.totalHeight * 0.4}px ${props.totalHeight *
      0.3}px; */
      top: ${props.totalHeight * 0.1}px;
      left: ${props.totalHeight}px;
    `
  }}
`

export const MainImageReactIcon = styled.div`
  position: absolute;
  ${(props: any) => {
    return css`
      /* margin: 0 0 ${props.totalHeight * 0.4}px ${props.totalHeight *
      0.3}px; */
      top: ${props.totalHeight * 0.1}px;
      left: ${props.totalHeight * 0.6}px;
    `
  }}
`

export const MainImageJavscriptIcon = styled.div`
  position: absolute;
  ${(props: any) => {
    return css`
      /* margin: 0 0 ${props.totalHeight * 0.4}px ${props.totalHeight *
      0.3}px; */
      top: ${props.totalHeight * 0.1}px;
      left: ${props.totalHeight * 0.8}px;
    `
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

import styled from '@emotion/styled'
import { css, keyframes } from '@emotion/react'
import { upDownAnimation } from 'styles/AnimationKeyframes'
import { boat_in_animation } from 'styles/AnimationKeyframes'

import { Link } from 'gatsby'

/**
 * Template Component Styled Section
 * 템플릿 컴포넌트 스타일 영역
 */

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  /* flex: 1 0 auto; */
`
export const LayoutWrapper = styled.div`
  display: flex;
  flex-direction: row;
`
/**
 * Header Component Styled Section
 * 헤더 컴포넌트 스타일 영역
 */

interface ScrollStateIconType {
  scroll: number
}

export const HeaderContainer = styled.nav`
  position: fixed;
  top: 0;
  /* background: rgba(255, 255, 255, 0.1); */
  background-color: white;
  backdrop-filter: saturate(180%) blur(15px);
  left: 0;
  z-index: 1100;
  width: 100%;
  height: 44px;
  border-bottom: 1px solid #ddd;
  padding: 0 1rem;
`

export const HeaderItemTitle = styled(Link)`
  /* margin-right: auto; */
`
export const HeaderItemLink = styled.div`
  margin: 0 2px;
  cursor: pointer;
`
export const HeaderMenuButton = styled.div`
  float: left;
  height: 100%;
  display: flex;
  align-items: center;
`
export const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;

  max-width: 100%;
  height: 100%;
  margin: 0 50px;

  a {
    font-size: 0.8rem;
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

export const IconWrapper = styled.div`
  animation: ${upDownAnimation} 0.6s infinite ease-in-out alternate;
`

export const Icon = styled.div`
  position: absolute;
  width: 30px;
  height: 30px;
  transition: 0.2s;
  margin-top: 0px;
  ${(props: ScrollStateIconType) =>
    props.scroll !== undefined
      ? css`
          transform: translateX(${props.scroll}px);
        `
      : ''};

  svg {
    transform: rotate(45deg);
  }
`

/**
 * Footer Component Styled Section
 * 푸터 컴포넌트 스타일 영역
 */

export const FooterWrapper = styled.div`
  display: grid;
  place-items: center;
  margin-top: auto;
  padding: 50px 0;
  font-size: 15px;
  text-align: center;
  line-height: 1.5;
  border: 3px solid;

  @media (max-width: 768px) {
    font-size: 13px;
  }
`

/**
 * Main Image Styled Section
 * 메인 상단 이미지 관련
 */

export const ScrollIndicatorWrapper = styled.div`
  position: absolute;
  /* top: 95%;
  left: 98%; */
  transform: translate(-50%, -50%);
  z-index: 1003;
`
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
  bottom: 50%;
  left: 95%;
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
const scroll = keyframes`
  0% {
    transform: translate(-50%, 20px);
    opacity: 0;
  }
  80% {
    transform: translate(-50%, 60px);
    opacity: 1;
  }
  100% {
    transform: translate(-50%, 100px);
    opacity: 0;
  }
`
export const ScrollIndicator = styled.div`
  position: relative;
  width: 50px;
  height: 80px;
  border-radius: 25px;
  background: transparent;
  border: 4px solid #000;
  overflow: hidden;

  ::before {
    content: '';
    position: absolute;
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background-color: #000;
    left: 50%;
    top: 5px;
    transform: translate(-50%, 0);
    animation: ${scroll} 1.5s linear infinite;
  }
  ::after {
    content: '';
    position: absolute;
    width: 6px;
    height: 15px;
    border-radius: 50%;
    background-color: #000;
    left: 50%;
    top: 10px;
    transform: translate(-50%, 0);
    border-radius: 3px;
  }
`

/**
 * Header Progress Bar Styled Section
 * 헤더 상단 Progress Bar 관련
 */
export const ProgressBarContainer = styled.div`
  position: sticky;
  z-index: 1101;
  background: white;
  width: 100%;
  height: 3px;
  top: 0;
  left: 0;
  opacity: 0.5;
`
interface ProgressBarPropsType {
  scroll: number
}
export const ProgressBar = styled.div`
  background: red;
  transform-origin: top left;
  width: ${(props: ProgressBarPropsType) => props.scroll};
  height: 3px;
  opacity: 1;
  z-index: 1100;
`

export const MainImageCssIcon = styled.div`
  position: absolute;
  margin: 600px 0 0 600px;
`

export const MainImageIcon = styled.div`
  background-color: black;
  width: 100%;
  height: 100px;
`
export const ButtonComponent = styled(Link)``

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
  top: ${(props: any) => props.totalHeight - 97}px;
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

  ${(props: { totalHeight: number; totalWidth: number }) => {
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

import styled from '@emotion/styled'
import { css, keyframes } from '@emotion/react'
import { upDownAnimation } from 'styles/AnimationKeyframes'
import { HeaderPropsType } from 'types/index'
import { Link } from 'gatsby'

/**
 * Template Component Styled Section
 * 템플릿 컴포넌트 스타일 영역
 */

export const Container = styled.div`
  display: flex;
`
export const MainContainer = styled.main``
export const NavigationContainer = styled.nav`
  box-shadow: 0px 0px 4px 0px;

  @media (max-width: 768px) {
    display: none;
  }
`
export const NavigationWrapper = styled.div`
  position: sticky;
  top: 0px;
  ::-webkit-scrollbar {
    display: none;
  }
  overflow-y: auto;
  height: 1000px;
  z-index: 1;
`

/**
 * Header Component Styled Section
 * 헤더 컴포넌트 스타일 영역
 */

interface ScrollStateIconType {
  scroll: number
}

export const HeaderContainer = styled.header`
  display: flex;
  position: sticky;
  top: 0;
  z-index: 1;
  background: white;
  border-style: solid;
  border-color: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 30px;

  h1 {
    color: black;
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
  border: 3px;
  border-style: dashed;

  @media (max-width: 768px) {
    font-size: 13px;
  }
`

/**
 * Main Image Styled Section
 * 메인 상단 이미지 관련
 */

const blinkCursorKeyframe = keyframes`
  50% {
    opacity: 0;
  }
`

export const MainImageStaticText = styled.span``
export const MainImageDynamicText = styled.span`
  &::after {
    content: '';
    position: absolute;
    background-color: #e65454;

    height: 80px;
    width: 5px;
    animation: ${blinkCursorKeyframe} 1s infinite;
  }
`

export const ScrollIndicatorWrapper = styled.div`
  position: absolute;
  top: 95%;
  left: 98%;
  transform: translate(-50%, -50%);
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
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background-color: #000;
    left: 50%;
    top: 10px;
    transform: translate(-50%, 0);
    animation: ${scroll} 1s linear infinite;
  }
  ::after {
    content: '';
    position: absolute;
    width: 6px;
    height: 15px;
    border-radius: 50%;
    background-color: #000;
    left: 50%;
    top: 5px;
    transform: translate(-50%, 0);
    border-radius: 3px;
  }
`
export const MainImageTextWrapper = styled.div`
  position: absolute;
  /* margin-right: 50%; */
  /* margin-top: 5%; */
  margin-left: 10%;
  font-size: 60px;
  font-weight: 300;

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
/**
 * Header Progress Bar Styled Section
 * 헤더 상단 Progress Bar 관련
 */
export const ProgressBarContainer = styled.div`
  position: sticky;
  z-index: 10;
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
  /* transform: scale(0, 0); */
  transform: scale(${(props: ProgressBarPropsType) => props.scroll});
  height: 3px;
  opacity: 1;
  z-index: 999;
`
export const MainAnimationContainer = styled.div`
  height: 100vh;
  margin-left: 2px;

  @media (max-width: 768px) {
    height: 400px;
  }
  overflow: hidden;
  /* background: url(${(props: any) => props.backgroundImage.mainImage2});
  background-size: cover; */
  /* background-color: black; */
`
export const MainImageWrapper = styled.div`
  height: 100vh;
  width: 100%;
`
export const MainImage = styled.div`
  background-image: url(${(props: any) => props.backgroundImage});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 0 100%;
  width: 100%;
  height: 100%;
`
export const MainImageIconWrapper = styled.div`
  position: relative;
`

export const MainImageHtmlIcon = styled.div`
  position: absolute;
  margin: 50px 0 0 200px;
`
export const MainImageCssIcon = styled.div`
  position: absolute;
  margin: 600px 0 0 600px;
`
export const MainImageReactIcon = styled.div`
  position: absolute;
  margin: 50px 0 0 800px;
`
export const MainImageJavscriptIcon = styled.div`
  position: absolute;
  margin: 600px 0 0 1400px;
`

export const MainImageVueIcon = styled.div`
  position: absolute;
  margin: 50px 0 0 1400px;
`

export const MainImageIcon = styled.div`
  background-color: black;
  width: 100%;
  height: 100px;
`
export const ButtonComponent = styled(Link)``

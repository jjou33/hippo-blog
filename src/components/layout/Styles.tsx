import styled from '@emotion/styled'
import { css } from '@emotion/react'
import { upDownAnimation } from 'styles/AnimationKeyframes'
import { HeaderPropsType } from 'types/index'

/**
 * Template Component Styled Section
 * 템플릿 컴포넌트 스타일 영역
 */

export const Container = styled.div`
  display: flex;
`
export const MainContainer = styled.main`
  flex: 4;
`
export const NavigationContainer = styled.nav`
  flex: 0.4;
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
  overflow: scroll;
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
  top: 0;
  z-index: 999;
  background: white;

  h1 {
    color: black;
  }
  border-style: solid;
  border-color: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 700px;
  background-image: url(${(props: HeaderPropsType) => props.backgroundImg});
  background-repeat: no-repeat;
  background-size: 100% 700px;
`
export const HeaderBackgroundImg = styled.div`
  width: 100%;
  height: 500px;
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

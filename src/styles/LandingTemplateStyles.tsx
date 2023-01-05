import { css, keyframes } from '@emotion/react'
import { Link } from 'gatsby'
import styled from '@emotion/styled'

interface CanvasPropsType {
  makeSticky: boolean
}

interface ScrollSectionTypes {
  currentScene: string
}

/**
 *  Common 활용 스타일드 태그
 */

const StickyStyle = css`
  display: none;
  position: fixed;
  left: 0;
  width: 100%;
`

export const ScrollStickyTextWrapper = styled.div`
  display: flex;
  opacity: 0;
  align-items: center;
  justify-content: center;
  top: 35vh;
  margin: 5px 0;
  height: 3em;
  font-size: 2.5rem;
  ${StickyStyle}
  p {
    font-weight: bold;
    text-align: center;
    line-height: 1.2;
  }

  small {
    display: block;
    font-size: 1.2rem;
    margin-bottom: 0.5em;
  }
`
export const ScrollDefaultDesc = styled.p``

/**
 * LandingPage Header 영역
 */

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
`

export const HeaderItemTitle = styled(Link)`
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

/**
 * First Section 영역
 */

export const FirstSectionTitle = styled.h1`
  position: relative;
  z-index: 5;
  top: -10vh;
`
export const FirstSectionStickyCanvasWrapper = styled.div<ScrollSectionTypes>`
  ${props =>
    props.currentScene === 'section-0'
      ? css`
          display: block;
        `
      : css`
          display: none;
        `}

  position: fixed;
  left: 0;
  width: 100%;

  top: 0;
  height: 100%;
`

export const FirstSectionStickyCanvas = styled.canvas`
  position: absolute;

  top: 50%;
  left: 50%;
`

/**
 * Third Section 영역
 */

export const ThirdSectionStickyCanvasWrapper = styled.div<ScrollSectionTypes>`
  ${props =>
    props.currentScene === 'section-2'
      ? css`
          display: block;
        `
      : css`
          display: none;
        `}
  position: fixed;
  left: 0;
  width: 100%;

  top: 0;
  height: 100%;
`

export const ThirdSectionStickyCanvas = styled.canvas`
  position: absolute;

  top: 50%;
  left: 50%;
`

export const ScrollStickDescWrapper = styled.div`
  ${StickyStyle}
  font-weight: bold;
  width: 50%;
  opacity: 0;
`
export const ScrollDescription = styled.p`
  font-size: 1.2rem;
  color: #888;
  margin: 0 auto;
  padding: 0 1rem;
  max-width: 1000px;

  strong {
    float: left;
    margin-right: 0.2em;
    font-size: 2.7rem;
    color: rgb(29, 29, 31);
  }
`

export const ScrollPin = styled.div`
  width: 1px;
  height: 100px;
  background: rgb(29, 29, 31);
`
export const FourthMainMessageWrapper = styled.p`
  font-size: 1.8rem;
  color: #888;
  padding: 0 1rem;
  max-width: 1000px;
  margin: 0 auto;
  strong {
    color: rgb(29, 29, 31);
  }
`

export const ScrollImageBlendCanvas = styled.canvas<CanvasPropsType>`
  ${props =>
    props.makeSticky
      ? css`
          position: fixed;
          top: 0;
        `
      : css``}
`
export const ScrollCanvasCaption = styled.p`
  color: #888;
  padding: 0 1rem;
  font-size: 1.2rem;

  max-width: 1000px;
  margin: 0 auto;

  ${(props: CanvasPropsType) =>
    props.makeSticky
      ? css`
          display: none;
        `
      : css`
          display: block;
        `}
`
export const ScrollFooter = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 7rem;
  background: #fff000;
`

/**
 * Section Containers 영역
 */

export const FirstSectionContainer = styled.section<ScrollSectionTypes>`
  position: relative;
  padding-top: 50vh;

  ${props =>
    props.currentScene === 'section-0'
      ? css`
          ${ScrollStickyTextWrapper} {
            display: block;
          }
        `
      : css``}

  h1 {
    font-size: 4rem;
    text-align: center;
  }

  @media (min-width: 1024px) {
    h1 {
      font-size: 7vw;
    }
  }
`
export const SecondSectionContainer = styled.section`
  position: relative;
  padding-top: 50vh;
  /* border: 3px solid red; */
  ${ScrollStickyTextWrapper} {
    font-size: 6vw;
  }
`
export const ThirdSectionContainer = styled.section<ScrollSectionTypes>`
  position: relative;
  padding-top: 50vh;
  /* border: 3px solid red; */
  ${ScrollStickyTextWrapper} {
    font-size: 3.5rem;
  }

  ${props =>
    props.currentScene === 'section-2'
      ? css`
          ${ScrollStickyTextWrapper} {
            display: block;
          }
          ${ScrollStickDescWrapper} {
            display: block;
          }

          .b {
            top: 10%;
            left: 40%;
          }

          .c {
            top: 15%;
            left: 45%;
          }
        `
      : css``}
`
export const FourthSectionContainer = styled.section`
  position: relative;
  padding-top: 50vh;

  display: flex;
  flex-direction: column;
  align-items: center;
`

export const LandingPageContainer = styled.div`
  width: 100vw;
  @media (min-width: 1024px) {
    ${ScrollStickyTextWrapper} {
      font-size: 4vw;

      small {
        font-size: 1.5vw;
      }
    }

    ${ScrollDescription} {
      font-size: 2rem;
      padding: 0;

      strong {
        font-size: 6rem;
      }
    }

    ${ScrollStickDescWrapper} {
      width: 20%;
    }

    ${FourthMainMessageWrapper} {
      padding: 0;
      font-size: 4vw;
    }

    ${ScrollCanvasCaption} {
      font-size: 2rem;
    }

    ${ThirdSectionContainer} {
      .b {
        top: 20%;
        left: 53%;
      }

      .c {
        left: 55%;
      }
    }
  }
`

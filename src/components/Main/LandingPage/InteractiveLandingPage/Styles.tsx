import { css, keyframes } from '@emotion/react'
import { boat_in_animation } from 'styles/AnimationKeyframes'
import styled from '@emotion/styled'

export const HeaderNav = styled.nav`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 10;
  width: 100%;
  height: 44px;
  border-bottom: 1px solid #ddd;
  padding: 0 1rem;
`

export const TitleLinkItem = styled.a`
  margin-right: auto;
`
export const LinkItem = styled.a``

export const NavLinkItems = styled.div`
  display: flex;
  align-items: center;

  max-width: 1600px;
  height: 100%;
  margin: 0 auto;

  a {
    font-size: 0.8rem;
  }
  a:not(${TitleLinkItem}) {
    margin-left: 2px;
  }

  ${TitleLinkItem} {
    margin-right: auto;
    font-size: 1.4rem;
    font-weight: bold;
  }
`
const StickyStyle = css`
  position: fixed;
  left: 0;
  width: 100%;
  display: none;
`
export const ScrollSectionTitle = styled.h1``
export const ScrollStickElemCanvas = styled.div``
export const ScrollStickElemMainMessage = styled.div`
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
export const ScrollStickElemDescMessage = styled.div`
  ${StickyStyle}
  font-weight: bold;
  width: 50%;
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
export const ScrollDefaultDesc = styled.p``

export const ScrollPin = styled.div`
  width: 1px;
  height: 100px;
  background: rgb(29, 29, 31);
`
export const ScrollMidMessage = styled.p`
  font-size: 1.8rem;
  color: #888;
  padding: 0 1rem;
  max-width: 1000px;
  margin: 0 auto;
  strong {
    color: rgb(29, 29, 31);
  }
`
export const ScrollImageBlendCanvas = styled.canvas``
export const ScrollCanvasCaption = styled.p`
  color: #888;
  padding: 0 1rem;
  font-size: 1.2rem;

  max-width: 1000px;
  margin: 0 auto;
`
export const ScrollFooter = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 7rem;
  background: #fff000;
`
// export const SectionText = styled.p``
// export const ScrollSectionSubTitleWrapper = styled.div``
// export const ScrollStickyWrapper = styled.div``
// export const ScrollDescMessageWrapper = styled.div``
export const ScrollSectionContainer1 = styled.section`
  padding-top: 50vh;
  border: 3px solid red;
  ${(props: any) => {
    if (props.currentScene === 'section-0') {
      return css`
        ${ScrollStickElemMainMessage} {
          display: block;
        }
      `
    }
    return css``
  }}
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
export const ScrollSectionContainer2 = styled.section`
  padding-top: 50vh;
  border: 3px solid red;
  ${ScrollStickElemMainMessage} {
    font-size: 6vw;
  }
`
export const ScrollSectionContainer3 = styled.section`
  padding-top: 50vh;
  border: 3px solid red;
  ${ScrollStickElemMainMessage} {
    font-size: 3.5rem;
  }

  ${(props: any) => {
    if (props.currentScene === 'section-2') {
      return css`
        ${ScrollStickElemMainMessage} {
          display: block;
        }
        ${ScrollStickElemDescMessage} {
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
    }
    return css``
  }}
`
export const ScrollSectionContainer4 = styled.section`
  padding-top: 50vh;
  border: 3px solid red;
`

export const LandingPageContainer = styled.div`
  width: 100vw;
  @media (min-width: 1024px) {
    ${ScrollStickElemMainMessage} {
      font-size: 4vw;

      small {
        font-size: 1.5vw;
      }
    }

    ${ScrollDescription} {
      font-size: 2rem;

      strong {
        font-size: 6rem;
      }
    }

    ${ScrollStickElemDescMessage} {
      width: 20%;
    }

    ${ScrollMidMessage} {
      font-size: 4vw;
    }

    ${ScrollCanvasCaption} {
      font-size: 2rem;
    }

    ${ScrollSectionContainer3} {
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

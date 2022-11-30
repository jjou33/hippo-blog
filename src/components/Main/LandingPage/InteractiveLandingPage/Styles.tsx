import { css, keyframes } from '@emotion/react'
import { boat_in_animation } from 'styles/AnimationKeyframes'
import styled from '@emotion/styled'

export const LandingPageContainer = styled.div``
export const HeaderNav = styled.nav`
  height: 52px;
  border-bottom: 1px solid #ddd;
`

export const TitleLinkItem = styled.a`
  margin-right: auto;
`
export const LinkItem = styled.a``

export const NavLinkItems = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 1000px;
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
export const ScrollSection = styled.section``
export const ScrollSectionTitle = styled.h1``
export const ScrollSectionSubTitle = styled.p``
export const ScrollSectionSubTitleWrapper = styled.div``

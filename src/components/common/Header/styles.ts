import styled from '@emotion/styled'
import { css, keyframes } from '@emotion/react'
import { Link } from 'gatsby'
import { themedPalette } from 'styles/themeVariables'

export const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  background: rgba(255, 255, 255, 0.1);
  background-color: ${themedPalette.bg_page1};
  color: ${themedPalette.text1};
  backdrop-filter: saturate(180%) blur(5px);
  left: 0;
  z-index: 1100;
  width: 100vw;
  height: 80px;
  padding: 0 1rem;
  ${(props: { isHide: boolean }) =>
    props.isHide
      ? css`
          transition: 0.4s ease-in-out;
          transform: translateY(-80px);
        `
      : css`
          transition: 0.4s ease-in-out;
          transform: translateY(0px);
        `}
`

export const HeaderMenuButton = styled.div`
  float: left;
  height: 100%;
  display: flex;
  align-items: center;
  cursor: pointer;
`

export const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;

  max-width: 100%;
  height: 100%;
  margin: 0 50px;

  @media screen and (max-width: 768px) {
    margin: 0 0px;
  }
`

export const HeaderItemTitle = styled(Link)`
  margin: auto;
  font-size: 30px;
  font-weight: bold;
  padding-left: 50px;
  @media screen and (max-width: 768px) {
    font-size: 20px;
    padding-left: 0px;
  }
`

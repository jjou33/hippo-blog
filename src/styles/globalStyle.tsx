import React from 'react'
import reset from './reset'
import fontStyle from '../assets/fonts/index'
import { Global, css } from '@emotion/react'
import { themes } from './themeVariables'
// import { useThemeEffect } from 'hooks/useThemeEffect'
const defaultStyle = css`
  ${reset}
  ${fontStyle}

  html,
  body {
    overflow-x: hidden;
    max-width: 100%;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    ${themes.light}
  }
  /* @media (prefers-color-scheme: dark) {
    body {
      ${themes.dark}
    }
  } */

  body[data-theme='light'] {
    ${themes.light};
  }

  body[data-theme='dark'] {
    ${themes.dark};
  }
`

const GlobalStyle = () => {
  return <Global styles={defaultStyle} />
}

export default GlobalStyle

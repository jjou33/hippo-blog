import React from 'react'
import { Global, css } from '@emotion/react'
import Reset from './Reset'
import FontStyle from './fontStyles'
import { themes } from './themeVariables'
const defaultStyle = css`
  ${Reset}
  ${FontStyle}

  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    shape-rendering: auto;
    font-family: NanumSquareNeo;
  }

  html,
  body {
    ${themes.dark}
  }
  @media (prefers-color-scheme: dark) {
    body {
      ${themes.dark}
    }
  }

  body[data-theme='light'] {
    ${themes.dark};
  }

  body[data-theme='dark'] {
    ${themes.dark};
  }
`

const GlobalStyle = () => {
  return <Global styles={defaultStyle} />
}

export default GlobalStyle

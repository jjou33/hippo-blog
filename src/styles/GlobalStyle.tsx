import React from 'react'
import { Global, css } from '@emotion/react'
import Reset from './Reset'
import FontStyle from './fontStyles'
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
    max-width: 100%;
    overflow-x: hidden;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }
`

const GlobalStyle = () => {
  return <Global styles={defaultStyle} />
}

export default GlobalStyle

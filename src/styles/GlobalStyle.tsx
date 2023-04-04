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
    font-family: IBMPlexSansBold;
  }
  html,
  body {
    max-width: 100%;
    overflow-x: hidden;
  }
`

const GlobalStyle = () => {
  return <Global styles={defaultStyle} />
}

export default GlobalStyle

import React, { FunctionComponent } from 'react'
import { Global, css } from '@emotion/react'
import MaplestoryLight from '../../font/MaplestoryLight.ttf'
import JetBrainMono from '../../font/JetBrainsMono-Bold.ttf'
const defaultStyle = css`
  @font-face {
    font-family: 'MaplestoryLight';
    src: local('MaplestoryLight'), local('MaplestoryLight');
    font-style: normal;
    src: url(${MaplestoryLight}) format('truetype');
  }
  @font-face {
    font-family: 'JetBrainsMono';
    src: local('JetBrainsMono'), local('JetBrainsMono');
    font-style: normal;
    src: url(${JetBrainMono}) format('truetype');
  }
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: MaplestoryLight;
  }


  html,
  body,
  #___gatsby {
    height: 100%;
  }

  a,
  a:hover {
    color: inherit;
    text-decoration: none;
    cursor: pointer;
  }
`

const GlobalStyle: FunctionComponent = function () {
  return <Global styles={defaultStyle} />
}

export default GlobalStyle

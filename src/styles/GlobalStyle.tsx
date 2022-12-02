import React from 'react'
import { Global, css } from '@emotion/react'
import Reset from './Reset'
import MaplestoryLight from '../assets/font/MaplestoryLight.ttf'
import MaplestoryBold from '../assets/font/MaplestoryBold.ttf'
import JetBrainMono from '../assets/font/JetBrainsMono-Bold.ttf'
import GmarketSansTTFMedium from '../assets/font/GmarketSansTTFMedium.ttf'
import GmarketSansTTFLight from '../assets/font/GmarketSansTTFLight.ttf'
import GmarketSansTTFBold from '../assets/font/GmarketSansTTFBold.ttf'
const defaultStyle = css`
  @font-face {
    font-family: 'GmarketSansTTFLight';
    src: local('GmarketSansTTFLight'), local('GmarketSansTTFLight');
    font-style: normal;
    src: url(${GmarketSansTTFLight}) format('truetype');
  }
  @font-face {
    font-family: 'GmarketSansTTFBold';
    src: local('GmarketSansTTFBold'), local('GmarketSansTTFBold');
    font-style: normal;
    src: url(${GmarketSansTTFBold}) format('truetype');
  }
  @font-face {
    font-family: 'GmarketSansTTFMedium';
    src: local('GmarketSansTTFMedium'), local('GmarketSansTTFMedium');
    font-style: normal;
    src: url(${GmarketSansTTFMedium}) format('truetype');
  }
  @font-face {
    font-family: 'MaplestoryLight';
    src: local('MaplestoryLight'), local('MaplestoryLight');
    font-style: normal;
    src: url(${MaplestoryLight}) format('truetype');
  }
  @font-face {
    font-family: 'MaplestoryBold';
    src: local('MaplestoryBold'), local('MaplestoryBold');
    font-style: normal;
    src: url(${MaplestoryBold}) format('truetype');
  }
  @font-face {
    font-family: 'JetBrainsMono';
    src: local('JetBrainsMono'), local('JetBrainsMono');
    font-style: normal;
    src: url(${JetBrainMono}) format('truetype');
  }
  ${Reset}

  #___gatsby {
    height: 100%;
    letter-spacing: -0.05px;
  }
  /* * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: JetBrainsMono;
    shape-rendering: auto;
  }

  html,
  body,
  #___gatsby {
    height: 100%;
    overflow-x: hidden;
    color: rgb(29, 29, 31);
    letter-spacing: -0.05px;
    background: white;
  } */

  a,
  a:hover {
    color: inherit;
    text-decoration: none;
    color: rgb(29, 29, 31);
    cursor: pointer;
  }
`

const GlobalStyle = () => {
  return <Global styles={defaultStyle} />
}

export default GlobalStyle

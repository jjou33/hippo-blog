import { css } from '@emotion/react'
import IBMPlexSansBold from '../assets/font/IBMPlexSans-Bold.woff2'
import MontserratAlternates from '../assets/font/MontserratAlternates-Regular.ttf'
import MaplestoryLight from '../assets/font/MaplestoryLight.ttf'
import NanumSquareNeo from '../assets/font/NanumSquareNeoTTF-bRg.woff2'
const fontStyle = css`
  @font-face {
    font-family: 'IBMPlexSansBold';
    src: local('IBMPlexSansBold'), local('IBMPlexSansBold');
    font-style: normal;
    src: url(${IBMPlexSansBold}) format('woff2');
    font-style: normal;
  }
  @font-face {
    font-family: 'MontserratAlternates';
    src: local('MontserratAlternates'), local('MontserratAlternates');
    font-style: normal;
    src: url(${MontserratAlternates}) format('truetype');
  }
  @font-face {
    font-family: 'MaplestoryLight';
    src: local('MaplestoryLight'), local('MaplestoryLight');
    font-style: normal;
    src: url(${MaplestoryLight}) format('truetype');
  }
  @font-face {
    font-family: 'NanumSquareNeo';
    src: local('NanumSquareNeo');
    font-style: normal;
    src: url(${NanumSquareNeo}) format('woff2');
  }
`

export default fontStyle

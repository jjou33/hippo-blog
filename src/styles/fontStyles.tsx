import { css } from '@emotion/react'
import IBMPlexSansBold from '../assets/font/IBMPlexSans-Bold.woff2'
import MontserratAlternates from '../assets/font/MontserratAlternates-Regular.ttf'
const fontStyle = css`
  @font-face {
    font-family: 'IBMPlexSansBold';
    src: local('IBMPlexSansBold'), local('IBMPlexSans');
    font-style: normal;
    src: url(${IBMPlexSansBold}) format('woff2');
    font-style: normal;
    font-display: swap;
  }
  @font-face {
    font-family: 'MontserratAlternates';
    src: local('MontserratAlternates'), local('MontserratAlternates');
    font-style: normal;
    src: url(${MontserratAlternates}) format('truetype');
  }
`

export default fontStyle

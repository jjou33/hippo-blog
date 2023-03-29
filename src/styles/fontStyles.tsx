import { css } from '@emotion/react'
import MaplestoryLight from '../assets/font/MaplestoryLight.ttf'
import MaplestoryBold from '../assets/font/MaplestoryBold.ttf'
import JetBrainMono from '../assets/font/JetBrainsMono-Bold.ttf'
import IBMPlexSans from '../assets/font/IBMPlexSansKR-Bold.ttf'
import MontserratAlternates from '../assets/font/MontserratAlternates-Regular.ttf'
const fontStyle = css`
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
  @font-face {
    font-family: 'IBMPlexSans';
    src: local('IBMPlexSans'), local('IBMPlexSans');
    font-style: normal;
    src: url(${IBMPlexSans}) format('truetype');
  }
  @font-face {
    font-family: 'MontserratAlternates';
    src: local('MontserratAlternates'), local('MontserratAlternates');
    font-style: normal;
    src: url(${MontserratAlternates}) format('truetype');
  }
`

export default fontStyle

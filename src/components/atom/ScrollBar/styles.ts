import styled from '@emotion/styled'
import { themedPalette } from 'styles/themeVariables'

export const ProgressBarContainer = styled.div`
  position: fixed;
  z-index: 1101;
  background: white;
  width: 100%;
  height: 4px;
  top: 0;
  left: 0;
`

export const ProgressBar = styled.div`
  background: ${themedPalette.scroll_color};
  transform-origin: top left;
  width: ${(props: { scroll: number }) => `${props.scroll}%`};
  height: 4px;
  opacity: 1;
  z-index: 1100;
`

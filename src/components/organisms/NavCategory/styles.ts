import styled from '@emotion/styled'
import { css, keyframes } from '@emotion/react'

export const SlideNavigationKeyframe = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`

export const NavigationContainer = styled.div`
  animation: ${SlideNavigationKeyframe} 0.5s ease-in-out;
  position: sticky;
  background: white;
  width: 350px;
  overflow-y: auto;
  height: calc(100vh - 48px);
  float: left;
  opacity: 1;
  clear: both;
  transition: opacity 0.2s ease-in-out;
  top: 48px;
  ::-webkit-scrollbar {
    display: none;
  }
  z-index: 1002;
  ${(props: { isOpen: boolean }) =>
    props.isOpen
      ? css`
          display: block;
        `
      : css`
          display: none;
        `}
`

export const NavigationWrapper = styled.div`
  margin: 0 10px;
`

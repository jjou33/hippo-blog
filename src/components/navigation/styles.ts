import styled from '@emotion/styled'
import { css } from '@emotion/react'

export const NavigationContainer = styled.div`
  position: sticky;
  background: white;
  width: 350px;
  ::-webkit-scrollbar {
    display: none;
  }
  overflow-y: auto;
  height: calc(100vh - 48px);
  float: left;
  opacity: 1;
  clear: both;
  transition: opacity 0.2s ease-in-out;
  top: 48px;
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
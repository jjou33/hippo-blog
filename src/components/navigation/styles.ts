import styled from '@emotion/styled'
import { css } from '@emotion/react'

export const NavigationContainer = styled.div`
  position: sticky;
  width: 270px;
  ::-webkit-scrollbar {
    display: none;
  }
  overflow-y: auto;
  max-height: calc(100vh - 44px);
  float: left;
  opacity: 1;
  clear: both;
  transition: opacity 0.2s ease-in-out;
  top: 44px;

  ${(props: { isOpen: boolean }) =>
    props.isOpen
      ? css`
          display: block;
        `
      : css`
          display: none;
        `}
  @media (max-width: 768px) {
    position: fixed;
    z-index: 1300;
  }
`

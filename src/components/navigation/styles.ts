import styled from '@emotion/styled'
import { css } from '@emotion/react'

export const NavigationContainer = styled.div`
  position: sticky;
  width: 270px;

  overflow-y: auto;
  max-height: 100vh;

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
  /* height: 100%; 
   position: sticky;
  top: 0px;
  ::-webkit-scrollbar {
    display: none;
  }
  overflow-y: scroll;
  height: 1000px;
  z-index: 1; 
  width: 270px;
  position: fixed;
  top: 0;
  left: 0;
  overflow-x: hidden;
  padding-top: 20px;*/
`

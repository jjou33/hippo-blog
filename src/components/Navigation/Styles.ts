import styled from '@emotion/styled'

export const NavigationContainer = styled.nav`
  /* flex: 0.4; */

  box-shadow: 0px 0px 4px 0px;

  @media (max-width: 768px) {
    display: none;
  }
`
export const NavigationWrapper = styled.div`
  height: 100%;
  /* position: sticky;
  top: 0px;
  ::-webkit-scrollbar {
    display: none;
  }
  overflow-y: scroll;
  height: 1000px;
  z-index: 1; */
  width: 270px;
  position: fixed;
  top: 0;
  left: 0;
  overflow-x: hidden;
  padding-top: 20px;
`

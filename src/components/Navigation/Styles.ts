import styled from '@emotion/styled'

export const NavigationContainer = styled.nav`
  /* flex: 0.4; */

  box-shadow: 0px 0px 4px 0px;

  @media (max-width: 768px) {
    display: none;
  }
`
export const NavigationWrapper = styled.div`
  position: sticky;
  top: 0px;
  ::-webkit-scrollbar {
    display: none;
  }
  overflow-y: scroll;
  height: 1000px;
  z-index: 1;
  /* position: fixed;
  width: 270px;
  overflow-y: scroll;
  top: 0;
  bottom: 0; */
`

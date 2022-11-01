import styled from '@emotion/styled'

export const Container = styled.div`
  display: flex;
`
export const MainContainer = styled.main`
  flex: 4;
`
export const NavigationContainer = styled.nav`
  flex: 0.4;
  box-shadow: 1px 2px 4px 0px;
  background: linear-gradient(0deg, #dce1e7 20%, #ebeff4 45%);
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
  overflow: scroll;
  height: 1000px;
  background: linear-gradient(0deg, #e2e9f0 20%, #ebeff4 45%);
  z-index: 1;
`

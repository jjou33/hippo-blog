import styled from '@emotion/styled'

export const Container = styled.div`
  display: flex;
`
export const MainContainer = styled.main`
  flex: 4;
  transition: all 0.5s ease;
`
export const NavigationContainer = styled.nav`
  flex: 0.4;
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
  overflow: scroll;
  height: 1000px;
  background: white;
  z-index: 1;
`

import ComputerModel from 'components/Common/ComputerGraphic'
import styled from '@emotion/styled'
import { css, keyframes } from '@emotion/react'
const HeaderContainer = styled.header`
  h1 {
    color: black;
  }
  border-style: solid;
  border-color: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 5rem;
`

const HeaderWrapper = styled.div`
  float: right;
`

const Background = styled.section``
const Header = () => {
  return (
    <HeaderContainer>
      <Background></Background>
    </HeaderContainer>
  )
}

export default Header

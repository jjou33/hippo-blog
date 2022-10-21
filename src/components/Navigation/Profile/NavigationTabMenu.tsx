import { FunctionComponent } from 'react'
import styled from '@emotion/styled'
import { css } from '@emotion/react'
import NavtigationTabItem from './NavigationTabItems'
const Container = styled.div`
  margin-top: 70px;
`
const SubContainer = styled.div`
  background-color: #090909;
  border-radius: 30px;
  width: 250px;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
`
const Wrapper = styled.ul`
  position: relative;
  width: 240px;
  background-color: white;
  height: 70px;
  box-shadow: 25px 25px 75px rgba(0, 0, 0, 0.25),
    10px 10px 70px rgba(0, 0, 0, 0.25), inset 5px 5px 10px rgba(0, 0, 0, 0.5),
    inset 5px 5px 20px rgba(255, 255, 255, 0.2),
    inset -5px -5px 15px rgba(0, 0, 0, 0.75);
  border-radius: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
`

const NavigationTabMenu: FunctionComponent = function () {
  return (
    <Container>
      <Wrapper>
        <NavtigationTabItem title="Home" />
        <NavtigationTabItem title="Github" />
        <NavtigationTabItem title="Profile" />
      </Wrapper>
    </Container>
  )
}

export default NavigationTabMenu

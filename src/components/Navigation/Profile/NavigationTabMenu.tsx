import { FunctionComponent } from 'react'
import styled from '@emotion/styled'
import NavigationItems from './NavigationTabItems'
import { navTabMenuIconSet } from 'assets/Svg/NavTabMenuIconSet'

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 50px 10px auto;
  background-color: #87ceee;
  border-radius: 30px;
  width: 250px;
  height: 60px;
`
const Wrapper = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 240px;
  background-color: #ebeff4;
  height: 50px;
  border-radius: 30px;
`

const NavigationTabMenu: FunctionComponent = function () {
  return (
    <Container>
      <Wrapper>
        <NavigationItems
          title="Home"
          navIconSet={navTabMenuIconSet}
          href="http://localhost:8000"
        />
        <NavigationItems
          title="Github"
          navIconSet={navTabMenuIconSet}
          href="https://github.com/jjou33"
        />
        <NavigationItems
          title="Profile"
          navIconSet={navTabMenuIconSet}
          href="http://localhost:8080"
        />
      </Wrapper>
    </Container>
  )
}

export default NavigationTabMenu

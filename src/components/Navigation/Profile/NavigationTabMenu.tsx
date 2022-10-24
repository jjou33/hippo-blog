import { FunctionComponent } from 'react'
import styled from '@emotion/styled'
import NavigationItems from './NavigationTabItems'
import { navTabMenuIconSet } from 'components/Common/utils/Svg/NavTabMenuIconSet'
const Container = styled.div`
  margin-top: 70px;
`
const SubContainer = styled.div`
  background-color: #c6def3;
  border-radius: 30px;
  width: 251px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
`
const Wrapper = styled.ul`
  position: relative;
  width: 240px;
  background-color: #f7f7ee;
  height: 50px;
  /* box-shadow: 25px 25px 75px rgba(0, 0, 0, 0.25),
    10px 10px 70px rgba(0, 0, 0, 0.25), inset 5px 5px 10px rgba(0, 0, 0, 0.5),
    inset 5px 5px 20px rgba(255, 255, 255, 0.2),
    inset -5px -5px 15px rgba(0, 0, 0, 0.75); */
  border-radius: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
`

const NavigationTabMenu: FunctionComponent = function () {
  return (
    <Container>
      <SubContainer>
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
      </SubContainer>
    </Container>
  )
}

export default NavigationTabMenu

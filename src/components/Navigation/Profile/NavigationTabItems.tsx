import { FunctionComponent } from 'react'
import { keyframes } from '@emotion/react'
import styled from '@emotion/styled'
import { shaking_in_animation } from 'styles/AnimationKeyframes'
import type { IconPropsType } from 'types/index'

interface NavTabPropsType extends IconPropsType {
  title: string
  href: string
}

const TabMenuItemsIcon = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 70px;
  height: 70px;
`

const Container = styled.li`
  list-style: none;
  width: 80px;
`

const Wrapper = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all ease 1s;
  &:hover {
    animation: ${shaking_in_animation} 0.4s ease;
  }
`

const NavigationTabMenu: FunctionComponent<NavTabPropsType> = function ({
  title,
  navIconSet,
  href,
}) {
  return (
    <Container>
      <Wrapper href={href} target="_blank">
        <TabMenuItemsIcon>
          {navIconSet[title] !== undefined
            ? navIconSet[title].icon('30', '30')
            : ''}
        </TabMenuItemsIcon>
      </Wrapper>
    </Container>
  )
}

export default NavigationTabMenu

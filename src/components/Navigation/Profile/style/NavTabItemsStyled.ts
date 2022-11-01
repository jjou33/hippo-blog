import styled from '@emotion/styled'
import { shaking_in_animation } from 'styles/AnimationKeyframes'

export const NavTabMenuItemIcon = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 70px;
  height: 70px;
`

export const NavTabMenuItemContainer = styled.li`
  list-style: none;
  width: 80px;
`

export const NavTabMenuItemWrapper = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all ease 1s;
  &:hover {
    animation: ${shaking_in_animation} 0.4s ease;
  }
`

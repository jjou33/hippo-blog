import styled from '@emotion/styled'
import { keyframes } from '@emotion/react'

export const shaking_in_animation = keyframes`
 0% {
   transform: rotate(15deg);
 }
 
 30% {
   transform: rotate(-15deg);
 }
 
 70% {
   transform: rotate(15deg);
 }
 100% {
   transform: rotate(-15deg);
 }
 `

export const LinkedIconWrapper = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all ease 1s;
  &:hover {
    animation: ${shaking_in_animation} 0.4s ease;
  }
`

export const NavTabMenuItemIcon = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
`

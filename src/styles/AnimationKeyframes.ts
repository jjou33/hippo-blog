import { keyframes } from '@emotion/react'

/**
 * @description 위아래로 이동하는 keyframes
 */
export const upDownAnimation = keyframes`
  from{
    transform: translatey(2px);
  }
  to{
    transform: translatey(-2px);
  }
`

/**
 * @description Hover 혹은 Event 발생 시 양옆으로 흔들리는 Keyframes
 */
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

/**
 * @description Hover 혹은 Event 발생 시 양옆으로 흔들리는 Keyframes
 */
export const boat_in_animation = keyframes`
 0% {
   transform: rotate(10deg);
 }

 50% {
   transform: rotate(-10deg);
 }
 100% {
   transform: rotate(10deg);
 }
 `

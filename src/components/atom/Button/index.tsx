import React, { ReactNode } from 'react'
import * as S from './styles'

interface ButtonOptionType {
  width: number
  height: number
  radius: number
  borderStyle?: string
  fontSize: number
  fontWeight: number
  children: ReactNode
}
const Button = (props: ButtonOptionType) => {
  return <S.Button {...props}>{props.children}</S.Button>
}

export default Button

import styled from '@emotion/styled'
import { css } from '@emotion/react'
import { themedPalette } from 'styles/themeVariables'
export interface BadgeColorType {
  color?: string
  backgroundColor?: string
  borderStyle?: string
  fontWeight?: number
  fontSize: number
  radius: string
}

export const BadgeWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  letter-spacing: 1px;
  color: ${(props: BadgeColorType) =>
    props.color !== '' ? props.color : themedPalette.badge_text};
  background: ${(props: BadgeColorType) =>
    props.backgroundColor ? props.backgroundColor : themedPalette.badge_color};
  border: ${(props: BadgeColorType) =>
    props.borderStyle ? props.borderStyle : ''};
  font-size: ${(props: BadgeColorType) => `${props.fontSize}px`};
  border-radius: ${(props: BadgeColorType) => props.radius};
  padding: 2px 10px;
  margin: 2.5px 5px;
  ${(props: BadgeColorType) => {
    return css`
      border-radius: ${props.radius};
      border: ${props.borderStyle};
      font-weight: ${props.fontWeight};
    `
  }}
`

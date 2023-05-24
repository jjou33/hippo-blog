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
  mediaFontSize?: number
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
  font-weight: ${(props: BadgeColorType) => props.fontWeight};
  border-radius: ${(props: BadgeColorType) => props.radius};
  padding: 2px 10px;
  margin: 2.5px 5px;

  @media screen and (max-width: 768px) {
    font-size: ${(props: BadgeColorType) => props.mediaFontSize ? `${props.mediaFontSize}px` : ''}  
  }
  
`

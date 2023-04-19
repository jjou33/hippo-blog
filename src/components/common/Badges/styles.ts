import styled from '@emotion/styled'
import { css } from '@emotion/react'
import type { BadgeColorType } from '.'
import { themedPalette } from 'styles/themeVariables'

export const BadgeWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  letter-spacing: 1px;

  padding: 0 10px;
  ${(props: BadgeColorType) => {
    return css`
      border-radius: ${props.radius};
      color: ${props.color};
      background-color: ${props.backgroundColor};
      border: ${props.borderStyle};
      font-size: ${props.font};
      font-weight: ${props.fontWeight};
    `
  }}
`

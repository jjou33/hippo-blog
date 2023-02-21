import styled from '@emotion/styled'
import { css } from '@emotion/react'
import type { BadgeColorType } from './Badge'

export const BadgeWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  letter-spacing: 1px;
  border-radius: 8px;
  padding: 0 10px;
  ${(props: BadgeColorType) => {
    return css`
      color: ${props.color};
      height: ${props.height}px;
      background-color: ${props.backgroundColor};
      border: ${props.borderStyle};
      font-size: ${props.font};
    `
  }}
`

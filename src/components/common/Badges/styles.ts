import styled from '@emotion/styled'
import { css } from '@emotion/react'
import type { BadgeColorType } from './Badge'

export const BadgeWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 8px;

  ${(props: BadgeColorType) => {
    return css`
      color: ${props.color};
      width: ${props.width}px;
      height: ${props.height}px;
      background-color: ${props.backgroundColor};
      border: ${props.borderStyle};
      font-size: ${props.font};
    `
  }}
`
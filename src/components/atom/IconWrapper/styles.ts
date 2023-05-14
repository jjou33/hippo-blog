import styled from '@emotion/styled'
import { css } from '@emotion/react'

export const IconWrapper = styled.div`
  ${(props: { iconSize: number; mediaSize?: number }) =>
    props.mediaSize
      ? css`
          width: ${props.iconSize}px;
          height: ${props.iconSize}px;
          @media screen and (max-width: 768px) {
            width: ${props.mediaSize}px;
            height: ${props.mediaSize}px;
          }
        `
      : css`
          width: ${props.iconSize}px;
          height: ${props.iconSize}px;
        `}
`

import styled from '@emotion/styled'
import { css } from '@emotion/react'

export const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  ${(props: { iconSize: number; mediasize?: number }) =>
    props.mediasize
      ? css`
          width: ${props.iconSize}px;
          height: ${props.iconSize}px;
          @media screen and (max-width: 768px) {
            width: ${props.mediasize}px;
            height: ${props.mediasize}px;
          }
        `
      : css`
          width: ${props.iconSize}px;
          height: ${props.iconSize}px;
        `}
`

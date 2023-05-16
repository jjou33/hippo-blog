import styled from '@emotion/styled'
import { css } from '@emotion/react'
import { GatsbyImage } from 'gatsby-plugin-image'

interface ThumbnailImagePropsType {
  width: number
  height: number
  radius?: string
  mediaSize?: number
}
export const ThumbnailImage = styled(GatsbyImage)`
  width: ${(props: ThumbnailImagePropsType) => `${props.width}%`};
  height: ${(props: ThumbnailImagePropsType) => `${props.height}px`};
  ${(props: ThumbnailImagePropsType) =>
    props.radius
      ? css`
          border-radius: ${props.radius};
        `
      : css``};
  ${(props: ThumbnailImagePropsType) =>
    props.mediaSize
      ? css`
          @media screen and (max-width: 768px) {
            height: ${props.mediaSize}px;
          }
        `
      : css``};
`

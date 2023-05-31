import styled from '@emotion/styled'
import { css } from '@emotion/react'
import { GatsbyImage } from 'gatsby-plugin-image'

interface ThumbnailImagePropsType {
  width: number
  height: number
  radius?: string
  mediasize?: number
  type?: string
}
export const ThumbnailImage = styled(GatsbyImage)`
  width: ${(props: ThumbnailImagePropsType) => `${props.width}%`};
  height: ${(props: ThumbnailImagePropsType) => `${props.height}px`};

  ${(props: ThumbnailImagePropsType) =>
    props.type === 'category'
      ? css`
          @media screen and (max-width: 768px) {
            width: 100px;
            height: 100px;
          }
        `
      : ''}

  ${(props: ThumbnailImagePropsType) =>
    props.radius
      ? css`
          border-radius: ${props.radius};
        `
      : css``};
  ${(props: ThumbnailImagePropsType) =>
    props.mediasize
      ? css`
          @media screen and (max-width: 768px) {
            height: ${props.mediasize}px;
          }
        `
      : css``};
`

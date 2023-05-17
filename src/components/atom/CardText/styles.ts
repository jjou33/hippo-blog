import styled from '@emotion/styled'
import { css } from '@emotion/react'

interface CardTitlePropsType {
  fontSize: number
  fontWeight?: number
  mediasize?: number
  opacity?: number
  fontColor?: string
}
export const Title = styled.div`
  font-size: ${(props: CardTitlePropsType) => `${props.fontSize}px`};
  font-weight: ${(props: CardTitlePropsType) => props.fontWeight};
  color: ${(props: CardTitlePropsType) =>
    props.fontColor ? props.fontColor : ''} 
  ${(props: CardTitlePropsType) =>
    props.mediasize
      ? css`
          @media screen and (max-width: 768px) {
            font-size: ${props.mediasize}px;
          }
        `
      : css``}
  ${(props: CardTitlePropsType) =>
    props.opacity
      ? css`
          opacity: ${props.opacity};
        `
      : css``}
  display: -webkit-box;
  overflow: hidden;
  margin: auto 0;
  text-overflow: ellipsis;
  white-space: normal;
  overflow-wrap: break-word;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`

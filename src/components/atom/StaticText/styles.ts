import styled from '@emotion/styled'
import { css } from '@emotion/react'
interface StaticTextPropsType {
  fontFamily?: string
  fontColor?: string
  fontSize?: number
  fontWeight?: number
  mediaSize?: number
}
export const StaticText = styled.h3`
  font-family: ${(props: StaticTextPropsType) =>
    props.fontFamily ? props.fontFamily : ''};
  color: ${(props: StaticTextPropsType) =>
    props.fontColor ? props.fontColor : ''};

  ${(props: StaticTextPropsType) =>
    props.fontWeight
      ? css`
          font-weight: ${props.fontWeight};
        `
      : css``}
  ${(props: StaticTextPropsType) =>
    props.mediaSize
      ? css`
          font-size: ${props.fontSize}px;

          @media screen and (max-width: 768px) {
            font-size: ${props.mediaSize}px;
          }
        `
      : css`
          font-size: ${props.fontSize}px;
        `}
  display: inline-block;
`

import styled from '@emotion/styled'
import { css } from '@emotion/react'
interface StaticTextPropsType {
  fontFamily?: string
  fontColor?: string
  fontSize?: number
  fontWeight?: number
  mediasize?: number
}
export const StaticText = styled.p`
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
    props.mediasize
      ? css`
          font-size: ${props.fontSize}px;

          @media screen and (max-width: 768px) {
            font-size: ${props.mediasize}px;
          }
        `
      : css`
          font-size: ${props.fontSize}px;
        `}
  display: inline-block;
`

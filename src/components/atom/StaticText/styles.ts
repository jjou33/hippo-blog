import styled from '@emotion/styled'
import { css } from '@emotion/react'
interface StaticTextPropsType {
  fontFamily?: string
  fontColor?: string
  fontSize?: number
  fontWeight?: number
}
export const MainImageStaticText = styled.h3`
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
  display: inline-block;
`

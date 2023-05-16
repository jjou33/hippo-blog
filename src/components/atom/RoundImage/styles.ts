import styled from '@emotion/styled'
import { css } from '@emotion/react'

interface RoundImagePropsType {
  width: string
  height: string
  radius?: string
  imagePath: string
  mediaSize?: string
}
export const RoundImage = styled.img`
  width: ${(props: RoundImagePropsType) => (props.width ? props.width : '')};
  height: ${(props: RoundImagePropsType) => (props.height ? props.height : '')};
  border-radius: ${(props: RoundImagePropsType) =>
    props.radius ? props.radius : ''};

  ${(props: { imagePath: string }) =>
    props.imagePath
      ? css`
          background: url(${props.imagePath});
          background-size: contain;
          background-repeat: no-repeat;
        `
      : css``}
  border: none;
  margin: auto;
  ${(props: RoundImagePropsType) =>
    props.mediaSize
      ? css`
          @media screen and (max-width: 1200px) {
            width: ${props.mediaSize}px;
            height: ${props.mediaSize}px;
          }
        `
      : css``}
`

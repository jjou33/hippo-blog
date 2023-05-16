import styled from '@emotion/styled'
import { css } from '@emotion/react'
import { themedPalette } from 'styles/themeVariables'

interface ButtonOptionType {
  width: number
  height: number
  radius: number
  borderStyle?: string
  fontSize: number
  fontWeight: number
}
export const Button = styled.button`
  width: ${(props: ButtonOptionType) => `${props.width}px`};
  height: ${(props: ButtonOptionType) => `${props.height}px`};
  ${(props: ButtonOptionType) =>
    props.borderStyle
      ? css`
          border: ${props.borderStyle};
        `
      : css``}
  border-radius: ${(props: ButtonOptionType) => `${props.radius}px`};
  font-weight: ${(props: ButtonOptionType) => props.fontWeight};
  font-size: ${(props: ButtonOptionType) => `${props.fontSize}px`};
  cursor: pointer;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${themedPalette.button_text};
  background: ${themedPalette.button_color};
  transform: scale(1);
  transition: transform 0.5s;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
  &:hover {
    transform: scale(1.05);
    transition: transform 0.5s;
    box-shadow: 0 0 8px rgba(151, 234, 219, 0.15);
  }
  @media screen and (max-width: 768px) {
    margin-top: 30px;
  }
`

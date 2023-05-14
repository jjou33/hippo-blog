import styled from '@emotion/styled'

interface IntroduceTitlePropsType {
  fontFamily?: string
  fontColor?: string
  fontSize?: number
  fontWeight?: number
}

export const IntroTitle = styled.p`
  text-align: center;
  margin: 20px auto;
  font-family: ${(props: IntroduceTitlePropsType) =>
    props.fontFamily ? props.fontFamily : ''};
  color: ${(props: IntroduceTitlePropsType) =>
    props.fontColor ? props.fontColor : ''};
  font-size: ${(props: IntroduceTitlePropsType) =>
    props.fontSize ? `${props.fontSize}px` : ''};
  font-weight: ${(props: IntroduceTitlePropsType) =>
    props.fontWeight ? props.fontWeight : 0};

  @media (max-width: 768px) {
    font-size: 20px;
  }
`

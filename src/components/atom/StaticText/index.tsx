import * as S from './styles'

interface StaticTextPropsType {
  text: string
  fontFamily?: string
  fontColor?: string
  fontSize?: number
  fontWeight?: number
  mediasize?: number
}
const StaticText = ({
  text,
  fontFamily,
  fontColor,
  fontSize,
  fontWeight,
  mediasize,
}: StaticTextPropsType) => {
  return (
    <S.StaticText
      fontFamily={fontFamily}
      fontColor={fontColor}
      fontSize={fontSize}
      fontWeight={fontWeight}
      mediasize={mediasize}
    >
      {text}
    </S.StaticText>
  )
}

export default StaticText

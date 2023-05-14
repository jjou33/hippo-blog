import * as S from './styles'

interface StaticTextPropsType {
  text: string
  fontFamily?: string
  fontColor?: string
  fontSize?: number
  fontWeight?: number
  mediaSize?: number
}
const StaticText = ({
  text,
  fontFamily,
  fontColor,
  fontSize,
  fontWeight,
  mediaSize,
}: StaticTextPropsType) => {
  return (
    <S.StaticText
      fontFamily={fontFamily}
      fontColor={fontColor}
      fontSize={fontSize}
      fontWeight={fontWeight}
      mediaSize={mediaSize}
    >
      {text}
    </S.StaticText>
  )
}

export default StaticText

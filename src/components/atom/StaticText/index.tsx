import * as S from './styles'

interface StaticTextPropsType {
  text: string
  fontFamily?: string
  fontColor?: string
  fontSize?: number
  fontWeight?: number
}
const StaticText = ({
  text,
  fontFamily,
  fontColor,
  fontSize,
  fontWeight,
}: StaticTextPropsType) => {
  return (
    <S.MainImageStaticText
      fontFamily={fontFamily}
      fontColor={fontColor}
      fontSize={fontSize}
      fontWeight={fontWeight}
    >
      {text}
    </S.MainImageStaticText>
  )
}

export default StaticText

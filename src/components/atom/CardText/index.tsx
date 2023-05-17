import * as S from './styles'

interface CardTitlePropsType {
  text: string
  fontSize: number
  fontWeight?: number
  mediasize?: number
  opacity?: number
  fontColor?: string
}
const CardTitle = ({
  text,
  fontSize,
  fontWeight,
  mediasize,
  opacity,
  fontColor,
}: CardTitlePropsType) => {
  return (
    <S.Title
      fontSize={fontSize}
      fontWeight={fontWeight}
      mediasize={mediasize}
      opacity={opacity}
      fontColor={fontColor}
    >
      {text}
    </S.Title>
  )
}

export default CardTitle

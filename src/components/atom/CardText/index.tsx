import * as S from './styles'

interface CardTitlePropsType {
  text: string
  fontSize: number
  fontWeight?: number
  mediaSize?: number
  opacity?: number
  fontColor?: string
}
const CardTitle = ({
  text,
  fontSize,
  fontWeight,
  mediaSize,
  opacity,
  fontColor,
}: CardTitlePropsType) => {
  return (
    <S.Title
      fontSize={fontSize}
      fontWeight={fontWeight}
      mediaSize={mediaSize}
      opacity={opacity}
      fontColor={fontColor}
    >
      {text}
    </S.Title>
  )
}

export default CardTitle

import * as S from './styles'

interface CardTextPropsType {
  text: string
  fontSize: number
  fontWeight?: number
  mediasize?: number
  opacity?: number
  fontColor?: string
}
const CardText = ({
  text,
  fontSize,
  fontWeight,
  mediasize,
  opacity,
  fontColor,
}: CardTextPropsType) => {
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

export default CardText

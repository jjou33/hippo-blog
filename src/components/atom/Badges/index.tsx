import * as S from './styles'

export interface BadgeColorType {
  color?: string
  backgroundColor?: string
  borderStyle?: string
  fontWeight?: number
  fontSize?: number
  radius?: string
  text: string
  mediaFontSize?: number
}

const Badge = ({
  color,
  backgroundColor,
  mediaFontSize,
  borderStyle,
  fontSize = 6,
  fontWeight = 0,
  radius = '30px',
  text,
}: BadgeColorType) => {
  return (
    <S.BadgeWrapper
      color={color}
      backgroundColor={backgroundColor}
      borderStyle={borderStyle}
      fontSize={fontSize}
      fontWeight={fontWeight}
      radius={radius}
      mediaFontSize={mediaFontSize}
    >
      {text ? text.toUpperCase() : text}
    </S.BadgeWrapper>
  )
}

export default Badge

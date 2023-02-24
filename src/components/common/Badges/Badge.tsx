import * as S from './styles'

export interface BadgeColorType {
  color?: string
  width?: string
  height?: string
  backgroundColor?: string
  borderStyle?: string
  fontWeight?: number
  font?: string
  radius?: string
  children: string | number
}

const Badge = ({
  color = 'red',
  backgroundColor = 'white',
  borderStyle = '1px #f65660cc solid',
  font = '6px',
  fontWeight = 0,
  radius = '30px',
  children,
}: BadgeColorType) => {
  return (
    <S.BadgeWrapper
      color={color}
      backgroundColor={backgroundColor}
      borderStyle={borderStyle}
      font={font}
      fontWeight={fontWeight}
      radius={radius}
    >
      {children}
    </S.BadgeWrapper>
  )
}

export default Badge

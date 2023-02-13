import * as S from './styles'

export interface BadgeColorType {
  color?: string
  width?: string
  height?: string
  backgroundColor?: string
  borderStyle?: string
  font?: string
  children: string | number
}

const Badge = ({
  color = 'red',
  width = '20',
  height = '15',
  backgroundColor = 'white',
  borderStyle = '1px #f65660cc solid',
  font = '6px',
  children,
}: BadgeColorType) => {
  return (
    <S.BadgeWrapper
      color={color}
      width={width}
      height={height}
      backgroundColor={backgroundColor}
      borderStyle={borderStyle}
      font={font}
    >
      {children}
    </S.BadgeWrapper>
  )
}

export default Badge

import { ReactNode } from 'react'
import * as S from './styles'

interface TitleTextPropsType {
  children: ReactNode
  fontFamily?: string
  fontColor?: string
  fontSize?: number
  fontWeight?: number
}
const TitleText = ({
  fontFamily,
  fontColor,
  fontSize,
  fontWeight,
  children,
}: TitleTextPropsType) => {
  return (
    <S.IntroTitle
      fontFamily={fontFamily}
      fontColor={fontColor}
      fontSize={fontSize}
      fontWeight={fontWeight}
    >
      {children}
    </S.IntroTitle>
  )
}

export default TitleText

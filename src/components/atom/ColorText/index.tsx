import * as S from './styles'

interface ColorTextPropsType {
  text: string
  fontSize?: number
}

const ColorText = ({ text, fontSize = 0 }: ColorTextPropsType) => {
  return <S.ColorText fontSize={fontSize}>{text}</S.ColorText>
}

export default ColorText

import * as S from './styles'

import { useTypingTitle } from 'hooks/useTypingTitle'

// const typedList = ['JAVASCRIPT', 'REACT', 'VUE', 'HTML', 'CSS']
interface DynamicTextPropsType {
  typedList: string[]
  fontFamily?: string
  fontColor?: string
  fontSize?: number
}

const DynamicText = ({
  typedList,
  fontFamily,
  fontColor,
  fontSize,
}: DynamicTextPropsType) => {
  const currentTitle = useTypingTitle(typedList)
  return (
    <S.MainImageDynamicText
      fontFamily={fontFamily}
      fontColor={fontColor}
      fontSize={fontSize}
    >{` ${currentTitle}`}</S.MainImageDynamicText>
  )
}

export default DynamicText

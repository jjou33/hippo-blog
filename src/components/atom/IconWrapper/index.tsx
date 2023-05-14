import * as S from './styles'
import { getSvgJSXElement } from 'utils/imageBridge'

interface IconWrapperPropsType {
  iconName: string
  iconSize: number
  fontSize: number
  mediaSize?: number
}
const IconWrapper = ({
  iconName,
  iconSize,
  fontSize,
  mediaSize,
}: IconWrapperPropsType) => {
  return (
    <S.IconWrapper iconSize={iconSize} mediaSize={mediaSize}>
      {getSvgJSXElement(`${iconName}`, `${fontSize}`)}
    </S.IconWrapper>
  )
}

export default IconWrapper

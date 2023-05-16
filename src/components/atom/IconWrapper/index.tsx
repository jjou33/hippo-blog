import * as S from './styles'
import { getSvgJSXElement } from 'utils/imageBridge'

interface IconWrapperPropsType {
  iconName: string
  iconSize: number
  mediaSize?: number
}
const IconWrapper = ({
  iconName,
  iconSize,
  mediaSize,
}: IconWrapperPropsType) => {
  return (
    <S.IconWrapper iconSize={iconSize} mediaSize={mediaSize}>
      {getSvgJSXElement(`${iconName}`, `${iconSize}`)}
    </S.IconWrapper>
  )
}

export default IconWrapper

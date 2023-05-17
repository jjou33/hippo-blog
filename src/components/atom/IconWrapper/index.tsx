import * as S from './styles'
import { getSvgJSXElement } from 'utils/imageBridge'

interface IconWrapperPropsType {
  iconName: string
  iconSize: number
  mediasize?: number
}
const IconWrapper = ({
  iconName,
  iconSize,
  mediasize,
}: IconWrapperPropsType) => {
  return (
    <S.IconWrapper iconSize={iconSize} mediasize={mediasize}>
      {getSvgJSXElement(`${iconName}`, `${iconSize}`)}
    </S.IconWrapper>
  )
}

export default IconWrapper

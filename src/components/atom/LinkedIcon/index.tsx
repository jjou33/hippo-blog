import IconWrapper from 'components/atom/IconWrapper'
import * as S from './styles'

interface LinkedIconPropsType {
  title: string
  href: string
  iconSize: number
}

const LinkedIcon = ({ title, href, iconSize }: LinkedIconPropsType) => {
  return (
    <S.LinkedIconWrapper href={href} target="_blank">
      <IconWrapper iconName={title} iconSize={iconSize} />
    </S.LinkedIconWrapper>
  )
}

export default LinkedIcon

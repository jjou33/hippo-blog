import LinkedIcon from 'components/atom/LinkedIcon'
import * as S from './styles'

interface NavTabMenuBoxPropsType {
  NavTabMenuList: {
    title: string
    link: string
    size: number
  }[]
}
const NavTabMenuBox = ({ NavTabMenuList }: NavTabMenuBoxPropsType) => {
  return (
    <S.NavTabMenuContainer>
      {NavTabMenuList.map((item, index) => {
        return (
          <LinkedIcon
            title={item.title}
            href={item.link}
            iconSize={item.size}
            key={index}
          />
        )
      })}
    </S.NavTabMenuContainer>
  )
}

export default NavTabMenuBox

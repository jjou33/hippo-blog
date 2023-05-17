import LinkedIcon from 'components/atom/LinkedIcon'
import * as S from './styles'

const NavigationTabMenu = () => {
  return (
    <S.NavTabMenuContainer>
      <LinkedIcon title="Home" href="/" iconSize={25} />
      <LinkedIcon
        title="Github"
        href="https://github.com/jjou33"
        iconSize={25}
      />
    </S.NavTabMenuContainer>
  )
}

export default NavigationTabMenu

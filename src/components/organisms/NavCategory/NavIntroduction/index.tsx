import StaticText from 'components/atom/StaticText'
import ImageComponent from 'components/atom/ImageComponent'
import NavTabMenuBox from 'components/molecules/NavTabMenuBox'
import * as S from './styles'

interface IntroductionProps {
  profileImage: string
}

const NavIntroduction = ({ profileImage }: IntroductionProps) => {
  const tabMenuList = [
    { title: 'Home', link: '/', size: 25 },
    { title: 'Github', link: 'https://github.com/jjou33', size: 25 },
  ]
  return (
    <S.NavIntroContainer>
      <S.ImageWrapper>
        <ImageComponent src={profileImage} />
      </S.ImageWrapper>
      <StaticText
        text="hippo's Dev"
        fontSize={13}
        fontWeight={400}
        mediasize={15}
      />
      <NavTabMenuBox NavTabMenuList={tabMenuList} />
    </S.NavIntroContainer>
  )
}

export default NavIntroduction

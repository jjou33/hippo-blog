import ProfileImage from './ProfileImage'
import NavTabMenu from './NavTabMenu'

import * as S from './styles'

interface IntroductionProps {
  profileImage: string
}

const Introduction = ({ profileImage }: IntroductionProps) => {
  return (
    <S.IntroductionWrapper>
      <ProfileImage profileImage={profileImage} />
      <S.SubTitle>Hippo's Dev</S.SubTitle>
      <NavTabMenu />
    </S.IntroductionWrapper>
  )
}

export default Introduction

import * as S from './styles'

import SectionHeader from 'components/molecules/SectionHeader'

import ImageBackgroundCard from 'components/molecules/ImageBackgroundCard'
import type { ImagePathPropsType } from 'types/image/index'
const ProjectDiary = ({ imagePath }: ImagePathPropsType) => {
  return (
    <S.ProjectDiaryContainer>
      <SectionHeader
        selectedCategory="프로젝트 일기 📝"
        fontSize={50}
        iconName="hambergerMenu"
        iconSize={60}
        iconmediasize={35}
        mediasize={25}
      />
      <S.ProjectDiaryItemWrapper>
        <ImageBackgroundCard
          imagePath={imagePath['vueProject']}
          slug="VueProject"
          categories={['Vue3', 'VITE']}
          fontSize={20}
          summary="해당 프로젝트는 현재 실무에서 차세대 프로젝트에 참여하여 진행중인 프로젝트간 필요한 내용을 포스팅 합니다."
          fontColor="white"
        />
        <ImageBackgroundCard
          imagePath={imagePath['reactProject']}
          slug="ReactProject"
          categories={['React', 'Gatsby', 'Blog']}
          fontSize={20}
          summary="이 공간은 Gatsby 와 React 를 활용하여 만들고 있는 블로그에 대한 개발 일기를 포스팅 합니다."
          fontColor="white"
        />
        <ImageBackgroundCard
          imagePath={imagePath['sideProject']}
          slug="NextJS"
          categories={['React', 'NextJS', 'SideProject']}
          fontSize={20}
          summary="이 공간은 Next JS 로 개발하고 있는 사이드 프로젝트 내용을 포스팅 합니다."
          fontColor="white"
        />
      </S.ProjectDiaryItemWrapper>
    </S.ProjectDiaryContainer>
  )
}

export default ProjectDiary

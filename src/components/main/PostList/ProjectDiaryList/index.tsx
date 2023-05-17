import * as S from './styles'

import SectionHeader from 'components/molecules/SectionHeader'

import ImageBackgroundCard from 'components/molecules/ImageBackgroundCard'
import type { ImagePathPropsType } from 'types/image/index'
const ProjectDiaryList = ({ imagePath }: ImagePathPropsType) => {
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
          categories={['Vue3']}
          fontSize={20}
          summary="summarysummarysummarysummarysummarysummarysummarysummarysummarysummarysummarysummarysummarysummarysummarysummarysummarysummarysummarysummary"
          fontColor="white"
        />
        <ImageBackgroundCard
          imagePath={imagePath['reactProject']}
          slug="VueProject"
          categories={['React', 'Gatsby', 'Blog']}
          fontSize={20}
          summary="summarysummarysummarysummarysummarysummarysummarysummarysummarysummarysummarysummarysummarysummarysummarysummarysummarysummarysummarysummary"
          fontColor="white"
        />
      </S.ProjectDiaryItemWrapper>
    </S.ProjectDiaryContainer>
  )
}

export default ProjectDiaryList

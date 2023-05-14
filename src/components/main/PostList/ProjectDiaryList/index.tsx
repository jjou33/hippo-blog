import * as S from './styles'

import MainSectionHeader from 'components/molecules/MainSectionHeader'
import ProjectDiaryItem from './ProjectDiaryItem'

import type { ImagePathPropsType } from 'types/image/index'
const ProjectDiaryList = ({ imagePath }: ImagePathPropsType) => {
  return (
    <S.ProjectDiaryContainer>
      <MainSectionHeader selectedCategory="프로젝트 일기 📝" fontSize={60} />
      <S.ProjectDiaryItemWrapper>
        <ProjectDiaryItem
          imagepath={imagePath['vueProject']}
          slug="VueProject"
        />
        <ProjectDiaryItem
          imagepath={imagePath['reactProject']}
          slug="ReactProject"
        />
      </S.ProjectDiaryItemWrapper>
    </S.ProjectDiaryContainer>
  )
}

export default ProjectDiaryList

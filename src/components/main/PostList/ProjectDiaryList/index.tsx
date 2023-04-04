import * as S from './styles'

import PostCategoryHeader from '../PostCategoryHeader'
import ProjectDiaryItem from './ProjectDiaryItem'

import type { ImagePathPropsType } from 'types/image/index'
const ProjectDiaryList = ({ imagePath }: ImagePathPropsType) => {
  return (
    <S.ProjectDiaryContainer>
      <PostCategoryHeader selectedCategory="프로젝트 일기 📝" fontSize={60} />
      <S.ProjectDiaryItemWrapper>
        <ProjectDiaryItem
          imagepath={imagePath['vueProject']}
          slug="vueProject"
        />
        <ProjectDiaryItem
          imagepath={imagePath['reactProject']}
          slug="reactProject"
        />
      </S.ProjectDiaryItemWrapper>
    </S.ProjectDiaryContainer>
  )
}

export default ProjectDiaryList

import * as S from './styles'

import PostCategoryHeader from '../PostCategoryHeader'
import ProjectDiaryItem from './ProjectDiaryItem'
const ProjectDiaryList = ({ imagePath }) => {
  return (
    <S.ProjectDiaryContainer>
      <PostCategoryHeader selectedCategory="프로젝트 일기 📝" fontSize={60} />
      <S.ProjectDiaryItemWrapper>
        <ProjectDiaryItem imagePath={imagePath['vueProject']} />
        <ProjectDiaryItem imagePath={imagePath['reactProject2']} />
      </S.ProjectDiaryItemWrapper>
    </S.ProjectDiaryContainer>
  )
}

export default ProjectDiaryList

import * as S from './styles'

import PostCategoryHeader from '../PostCategoryHeader'
import ProjectDiaryItem from './ProjectDiaryItem'
const ProjectDiaryList = ({ imagepath }) => {
  return (
    <S.ProjectDiaryContainer>
      <PostCategoryHeader selectedCategory="프로젝트 일기 📝" fontSize={60} />
      <S.ProjectDiaryItemWrapper>
        <ProjectDiaryItem
          imagepath={imagepath['vueProject']}
          slug="vueProject"
        />
        <ProjectDiaryItem
          imagepath={imagepath['reactProject2']}
          slug="reactProject"
        />
      </S.ProjectDiaryItemWrapper>
    </S.ProjectDiaryContainer>
  )
}

export default ProjectDiaryList

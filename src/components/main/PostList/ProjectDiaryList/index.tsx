import * as S from './styles'

import PostCategoryHeader from '../PostCategoryHeader'
import ProjectDiaryItem from './ProjectDiaryItem'
const ProjectDiaryList = ({ imagePath }) => {
  console.log('image : ', imagePath)

  return (
    <S.ProjectDiaryContainer>
      <PostCategoryHeader selectedCategory="프로젝트 일기 📝" fontSize={60} />
      <S.ProjectDiaryItemWrapper>
        <ProjectDiaryItem imagePath={imagePath['vueProject']} />
        <ProjectDiaryItem
          imagePath={
            '\n/static/35d5cd329371879592cdfac7c644de1e/14b42/reactProject.jpg'
          }
        />
      </S.ProjectDiaryItemWrapper>
    </S.ProjectDiaryContainer>
  )
}

export default ProjectDiaryList

import * as S from './styles'

const ProjectDiaryItem = ({ imagepath, slug }) => {
  return (
    <S.ProjectDiaryItemComtainer
      imagepath={imagepath}
      to={`/?category=${slug}`}
    >
      <S.ItemImageWrapper></S.ItemImageWrapper>
      <S.ItemTextWrapper>
        <S.Category>
          <S.CategoryItem />
        </S.Category>
        <S.Title>title</S.Title>

        <S.Summary>
          summarysummarysummarysummarysummarysummarysummarysummarysummarysummary
        </S.Summary>
      </S.ItemTextWrapper>
    </S.ProjectDiaryItemComtainer>
  )
}
export default ProjectDiaryItem

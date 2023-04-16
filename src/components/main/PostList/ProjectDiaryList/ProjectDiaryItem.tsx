import * as S from './styles'

const ProjectDiaryItem = (props: { imagepath: string; slug: string }) => {
  return (
    <S.ProjectDiaryItemComtainer
      imagepath={props.imagepath}
      to={`/?category=${props.slug}`}
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

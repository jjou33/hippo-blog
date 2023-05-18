import * as S from './styles'
import Badge from 'components/atom/Badges'
import CardText from 'components/atom/CardText'
import CardTitle from 'components/atom/CardText'

const ProjectDiaryItem = (props: { imagepath: string; slug: string }) => {
  const badgeList = ['Vue3', 'React']
  return (
    <S.ProjectDiaryItemComtainer
      imagepath={props.imagepath}
      to={`postList/?category=${props.slug}`}
    >
      <S.CardTitleWrapper>
        <S.BadgeWrapper>
          {badgeList.map(value => {
            return <Badge text={value} fontSize={13} color="" />
          })}
        </S.BadgeWrapper>
        <CardText
          text="summarysummarysummarysummarysummarysummarysummarysummarysummarysummarysummarysummarysummarysummarysummarysummarysummarysummarysummarysummary"
          fontSize={20}
          opacity={0.8}
          fontColor="white"
        />
      </S.CardTitleWrapper>

      {/* <S.ItemTextWrapper>
        <S.Category>
          <S.CategoryItem />
        </S.Category>
        <S.Title>title</S.Title>

        <S.Summary>
          summarysummarysummarysummarysummarysummarysummarysummarysummarysummary
        </S.Summary>
      </S.ItemTextWrapper> */}
    </S.ProjectDiaryItemComtainer>
  )
}
export default ProjectDiaryItem

import Badge from 'components/atom/Badges'

import CardText from 'components/atom/CardText'
import * as S from './styles'

export type PostHeadInfoProps = {
  title: string
  date: string
  categories: string[]
}

const PostHeadText = ({ title, date, categories }: PostHeadInfoProps) => {
  return (
    <S.PostHeadInfoWrapper>
      <S.BadgeWrapper>
        <Badge
          borderStyle="1px #ffd381 solid"
          fontSize={15}
          color=""
          fontWeight={700}
          radius="7px"
          backgroundColor=""
          text={categories.join(' / ')}
        />
      </S.BadgeWrapper>

      <S.CategoryWrapper>
        <CardText
          text={title}
          fontSize={35}
          fontWeight={800}
          mediasize={20}
          fontColor="#ffd381"
        />
        <CardText text={`${date} By HIPPO DEV`} fontSize={18} mediasize={15} />
      </S.CategoryWrapper>
    </S.PostHeadInfoWrapper>
  )
}

export default PostHeadText

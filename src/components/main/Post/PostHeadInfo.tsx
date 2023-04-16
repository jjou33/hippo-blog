import Badge from 'components/common/Badges/Badge'

import * as S from './styles'

export type PostHeadInfoProps = {
  title: string
  date: string
  categories: string[]
  allFile: {
    edges: {
      node: {
        [key: string]: string
      }
    }[]
  }
}

const PostHeadInfo = ({ title, date, categories }: PostHeadInfoProps) => {
  return (
    <S.PostHeadInfoWrapper>
      <S.BadgeWrapper>
        <Badge
          borderStyle="1px #ffd381 solid"
          font="15px"
          color="white"
          fontWeight={700}
          radius="7px"
          backgroundColor=""
        >
          {categories.join(' / ')}
        </Badge>
      </S.BadgeWrapper>

      <S.CategoryWrapper>
        <S.Title>{title}</S.Title>
        <S.PostData>{date} By HIPPO DEV 📒</S.PostData>
      </S.CategoryWrapper>
    </S.PostHeadInfoWrapper>
  )
}

export default PostHeadInfo

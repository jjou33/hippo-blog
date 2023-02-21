import { IGatsbyImageData } from 'gatsby-plugin-image'
import PostHeadInfo, { PostHeadInfoProps } from './PostHeadInfo'

import * as S from './styles'

interface PostHeadProps extends PostHeadInfoProps {
  thumbnail: IGatsbyImageData
}

const PostHead = ({ title, date, categories, thumbnail }: PostHeadProps) => {
  return (
    <S.PostHeadWrapper>
      <S.BackgroundImage image={thumbnail} alt="thumbnail" />
      <PostHeadInfo title={title} date={date} categories={categories} />
    </S.PostHeadWrapper>
  )
}

export default PostHead

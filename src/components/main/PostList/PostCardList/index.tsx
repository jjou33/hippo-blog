import * as S from './styles'

import { MutableRefObject, useState } from 'react'
import PostCardItem from './PostCardItem'
import { PostListItemType, PostFrontmatterType } from 'types/postItem'

interface PostCardListPropsType {
  containerRef: MutableRefObject<HTMLDivElement | null>
  postList: PostListItemType[]
}
const PostCardList = ({ containerRef, postList }: PostCardListPropsType) => {
  const limit = 6
  const [page, setPage] = useState(1)
  const offset = (page - 1) * limit
  console.log(postList)

  return (
    <S.PostListWrapper ref={containerRef}>
      {postList.slice(offset, offset + limit).map(
        ({
          node: {
            id,
            fields: { slug },
            frontmatter,
          },
        }: PostListItemType) => (
          <PostCardItem {...frontmatter} link={slug} key={id} />
        ),
      )}
    </S.PostListWrapper>
  )
}

export default PostCardList

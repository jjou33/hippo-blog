import * as S from './styles'

import PostCardItem from './PostCardItem'
import { navigate } from 'gatsby'
import PostCategoryHeader from '../PostCategoryHeader'
import { useState } from 'react'
import { PostListItemType } from 'types/postItem'

import useInfiniteScroll, {
  useInfiniteScrollType,
} from 'hooks/useInfiniteScroll'

interface PostCardListPropsType {
  selectedCategory: string
  posts: PostListItemType[]
}
const PostCardList = ({ selectedCategory, posts }: PostCardListPropsType) => {
  const limit = 6
  const [page, setPage] = useState(1)
  const offset = (page - 1) * limit

  const { containerRef, postList }: useInfiniteScrollType = useInfiniteScroll(
    selectedCategory,
    posts,
  )

  const goToAllPost = (): void => {
    navigate('/AllPost')
  }
  return (
    <S.PostCardListContainer>
      <PostCategoryHeader selectedCategory="ALL POSTS 🐳" fontSize={60} />
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
      <S.Button onClick={goToAllPost}>더 보기</S.Button>
    </S.PostCardListContainer>
  )
}

export default PostCardList

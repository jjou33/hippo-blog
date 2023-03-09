import React, { useState } from 'react'
import PostItem from './PostItem'
import Pagination from './Pagination'
import PostCardList from './PostCardList'
import { PostListItemType, PostFrontmatterType } from 'types/postItem'
import useInfiniteScroll, {
  useInfiniteScrollType,
} from 'hooks/useInfiniteScroll'

import * as S from './styles'

export interface PostType {
  node: {
    id: string
    frontmatter: PostFrontmatterType
  }
}

interface PostListProps {
  selectedCategory: string
  posts: PostListItemType[]
}

const PostList = ({ selectedCategory, posts }: PostListProps) => {
  const limit = 6
  const [page, setPage] = useState(1)
  const offset = (page - 1) * limit
  const [category, setCategory] = useState('')

  const { containerRef, postList }: useInfiniteScrollType = useInfiniteScroll(
    selectedCategory,
    posts,
  )

  // 카테고리 변경 시 Page 값 Reset
  if (category !== selectedCategory) {
    setPage(1)
    setCategory(selectedCategory)
  }

  return (
    <S.PostListContainer>
      <PostCardList containerRef={containerRef} postList={postList} />
      {/* <S.PostListWrapper ref={containerRef}>
        {postList.slice(offset, offset + limit).map(
          ({
            node: {
              id,
              fields: { slug },
              frontmatter,
            },
          }: PostListItemType) => (
            <PostItem {...frontmatter} link={slug} key={id} />
          ),
        )}
      </S.PostListWrapper> */}
      <Pagination
        total={postList.length}
        limit={limit}
        page={page}
        setPage={setPage}
      />
    </S.PostListContainer>
  )
}

export default PostList

import React, { useState } from 'react'
import PostItem from './PostItem'
import Pagination from './Pagination'

import * as S from './styles'
import { PostListItemType, PostFrontmatterType } from 'types/PostItem.types'
import useInfiniteScroll, {
  useInfiniteScrollType,
} from 'hooks/useInfiniteScroll'

export interface PostType {
  node: {
    id: string
    frontmatter: PostFrontmatterType
  }
}

interface PostListProps {
  selectedCategory: string
  posts: PostListItemType[]
  imageSet: {
    [key: string]: string
  }
}

const PostList = ({ selectedCategory, posts, imageSet }: PostListProps) => {
  const [post, setPosts] = useState([])
  const [limit, setLimit] = useState(6)
  const [page, setPage] = useState(1)
  const offset = (page - 1) * limit

  const { containerRef, postList }: useInfiniteScrollType = useInfiniteScroll(
    selectedCategory,
    posts,
  )
  return (
    <S.PostListContainer>
      <S.PostListWrapper ref={containerRef}>
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
      </S.PostListWrapper>

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
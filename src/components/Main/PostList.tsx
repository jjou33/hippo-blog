import React, { useState } from 'react'
import styled from '@emotion/styled'
import PostItem from './PostItem'
import Pagination from './Pagination'
import { getSvgJSXElement } from 'utils/Common/Common'
import * as S from './Styles'
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

const PostListWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 30px;
  width: 100%;
  margin: 0 auto;
  padding: 50px 50px 100px;
  @media (max-width: 1000px) {
    grid-template-columns: repeat(2, 1fr);
    width: 100%;
    padding: 50px 20px;
  }
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    width: 100%;
    padding: 50px 20px;
  }
`

const PostListContainer = styled.div`
  display: flex;
  flex-direction: column;
`

const PostList = ({ selectedCategory, posts, imageSet }: PostListProps) => {
  const [post, setPosts] = useState([])
  const [limit, setLimit] = useState(6)
  const [page, setPage] = useState(1)
  const offset = (page - 1) * limit

  const { containerRef, postList }: useInfiniteScrollType = useInfiniteScroll(
    selectedCategory,
    posts,
    page,
    limit,
    setPosts,
    offset,
  )
  return (
    <PostListContainer>
      <PostListWrapper ref={containerRef}>
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
      </PostListWrapper>

      <Pagination
        total={postList.length}
        limit={limit}
        page={page}
        setPage={setPage}
      />
    </PostListContainer>
  )
}

export default PostList

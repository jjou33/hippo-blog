import React from 'react'
import FirstPostItem from './FirstPostItem'
import OtherPostItem from './OtherPostItem'
import PostCardItem from 'components/main/PostList/PostCardList/PostCardItem'
import { PostListItemType } from 'types/postItem'
import * as S from './styles'

interface RecentPostPropsType {
  posts: PostListItemType[]
}
const RecentPosts = ({ posts }: RecentPostPropsType) => {
  console.log('post :', posts[0].node.frontmatter)
  return (
    <S.RecentPostsContainer>
      <S.FirstPostWrapper>
        <PostCardItem {...posts[0].node.frontmatter} />
      </S.FirstPostWrapper>

      {/* <S.FirstPostWrapper>
        <PostCardItem {...posts[0].node.frontmatter} />
      </S.FirstPostWrapper> */}
      <S.OtherPostWrapper>
        {posts.map((node, i) => {
          if (i === 1 || i === 2) {
            return <PostCardItem {...posts[i].node.frontmatter} />
          } else {
            return <></>
          }
        })}
      </S.OtherPostWrapper>
    </S.RecentPostsContainer>
  )
}

export default RecentPosts

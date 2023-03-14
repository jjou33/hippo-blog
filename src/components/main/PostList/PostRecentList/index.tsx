import React from 'react'
import FirstPostItem from './FirstPostItem'
import OtherPostItem from './OtherPostItem'
import PostCategoryItem from 'components/main/PostList/PostCategoryList/PostCategoryItem'
import PostCardItem from 'components/main/PostList/PostCardList/PostCardItem'
import { PostListItemType } from 'types/postItem'
import * as S from './styles'

interface RecentPostPropsType {
  posts: PostListItemType[]
}
const RecentPosts = ({ posts }: RecentPostPropsType) => {
  return (
    <S.RecentPostsContainer>
      <S.FirstPostWrapper>
        <FirstPostItem {...posts[0].node.frontmatter} />
      </S.FirstPostWrapper>
      <S.OtherPostWrapper>
        {posts.map(
          (
            {
              node: {
                id,
                fields: { slug },
                frontmatter,
              },
            }: PostListItemType,
            i,
          ) => {
            if (i > 0 && i < 4) {
              return (
                <S.OtherItemContainer>
                  <PostCategoryItem {...frontmatter} link={slug} key={id} />
                </S.OtherItemContainer>
              )
            } else {
              return <></>
            }
          },
        )}
      </S.OtherPostWrapper>
    </S.RecentPostsContainer>
  )
}

export default RecentPosts

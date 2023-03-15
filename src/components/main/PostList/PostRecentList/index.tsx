import React from 'react'
import FirstPostItem from './FirstPostItem'
import PostCategoryItem from 'components/main/PostList/PostCategoryList/PostCategoryItem'
import RecentPostHeader from 'components/main/PostList/PostCategoryList/PostCategoryHeader'
import { PostListItemType } from 'types/postItem'
import * as S from './styles'

interface RecentPostPropsType {
  posts: PostListItemType[]
}
const RecentPosts = ({ posts }: RecentPostPropsType) => {
  const {
    node: {
      id,
      fields: { slug },
      frontmatter,
    },
  } = posts[0]
  return (
    <S.RecentPostContainer>
      <S.RecentHeaderWrapper>
        <RecentPostHeader selectedCategory="최신 포스트 📝" />
      </S.RecentHeaderWrapper>
      <S.RecentPostsWrapper>
        <S.FirstPostWrapper>
          <FirstPostItem {...frontmatter} link={slug} key={id} />
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
      </S.RecentPostsWrapper>
    </S.RecentPostContainer>
  )
}

export default RecentPosts

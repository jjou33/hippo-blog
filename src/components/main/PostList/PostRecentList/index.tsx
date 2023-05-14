import React from 'react'
import * as S from './styles'

import FirstPostItem from './FirstPostItem'
import PostCategoryItem from 'components/main/PostList/PostCategoryList/PostCategoryItem'

import MainSectionHeader from 'components/molecules/MainSectionHeader'
import { getSvgJSXElement } from 'utils/imageBridge'
import { PostListItemType } from 'types/post'

interface RecentPostPropsType {
  posts: PostListItemType[]
  widePost: PostListItemType[]
}

const RecentPosts = ({ posts, widePost }: RecentPostPropsType) => {
  return (
    <S.RecentPostContainer>
      <MainSectionHeader selectedCategory="최신 포스트 🎃" fontSize={60} />
      <S.RecentPostsWrapper>
        <S.FirstPostWrapper>
          <FirstPostItem
            {...widePost[0].node.frontmatter}
            link={widePost[0].node.fields.slug}
            key={widePost[0].node.id}
          />
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
              index,
            ) => {
              if (index > 0 && index < 4) {
                return (
                  <S.OtherItemContainer key={index}>
                    <S.PostSeqenceWrapper type="second">
                      {getSvgJSXElement(`${index}`, '30')}
                    </S.PostSeqenceWrapper>
                    <PostCategoryItem
                      {...frontmatter}
                      link={slug}
                      key={id}
                      type="main"
                    />
                  </S.OtherItemContainer>
                )
              } else {
                return ''
              }
            },
          )}
        </S.OtherPostWrapper>
      </S.RecentPostsWrapper>
    </S.RecentPostContainer>
  )
}

export default RecentPosts

import React from 'react'
import * as S from './styles'

import FirstPostItem from './FirstPostItem'
import PostCategoryItem from 'components/main/PostList/PostCategoryList/PostCategoryItem'

import HorizonCard from 'components/molecules/HorizonCard'
import VerticalCard from 'components/molecules/VerticalCard'
import SectionHeader from 'components/molecules/SectionHeader'
import { getSvgJSXElement } from 'utils/imageBridge'
import { PostListItemType } from 'types/post'

interface RecentPostPropsType {
  posts: PostListItemType[]
  widePost: PostListItemType[]
}

const RecentPosts = ({ posts, widePost }: RecentPostPropsType) => {
  return (
    <S.RecentPostContainer>
      <SectionHeader
        selectedCategory="최신 포스트 🎃"
        fontSize={50}
        iconName="hambergerMenu"
        iconSize={60}
        iconMediaSize={35}
        mediaSize={25}
      />

      <S.RecentPostsWrapper>
        <S.Temp>
          <VerticalCard
            {...widePost[0].node.frontmatter}
            link={widePost[0].node.fields.slug}
            key={widePost[0].node.id}
            radius="10px 10px 0 0"
            fontSize={20}
            textMediaSize={15}
            width={100}
            height={350}
            mediaSize={200}
          />
        </S.Temp>
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
                    <HorizonCard
                      {...frontmatter}
                      width={190}
                      height={190}
                      radius="20px"
                      mediaSize={100}
                      fontSize={20}
                      textMediaSize={15}
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

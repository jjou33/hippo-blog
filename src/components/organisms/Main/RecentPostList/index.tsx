import React from 'react'
import * as S from './styles'

import HorizonCard from 'components/molecules/HorizonCard'
import VerticalCard from 'components/molecules/VerticalCard'
import SectionHeader from 'components/molecules/SectionHeader'
import { getSvgJSXElement } from 'utils/imageBridge'
import { PostListItemType } from 'types/post'

interface RecentPostPropsType {
  posts: PostListItemType[]
  widePost: PostListItemType[]
}

const RecentPostList = ({ posts, widePost }: RecentPostPropsType) => {
  return (
    <S.RecentPostContainer>
      <SectionHeader
        selectedCategory="최신 포스트 🎃"
        fontSize={50}
        iconName="hambergerMenu"
        iconSize={60}
        iconmediasize={35}
        mediasize={25}
      />

      <S.RecentPostsWrapper>
        <S.VerticalPostWrapper>
          <VerticalCard
            {...widePost[0].node.frontmatter}
            link={widePost[0].node.fields.slug}
            radius="10px 10px 0 0"
            fontSize={20}
            textmediasize={15}
            width={100}
            height={350}
            mediasize={200}
            inViewAnimation={true}
          />
        </S.VerticalPostWrapper>
        <S.HorizonPostContainer>
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
                  <S.HorizonPostWrapper key={index}>
                    <S.PostSeqenceWrapper type="second">
                      {getSvgJSXElement(`${index}`, '30')}
                    </S.PostSeqenceWrapper>
                    <HorizonCard
                      {...frontmatter}
                      width={190}
                      height={190}
                      radius="20px"
                      mediasize={100}
                      fontSize={20}
                      textmediasize={15}
                      link={slug}
                      key={id}
                      type="main"
                    />
                  </S.HorizonPostWrapper>
                )
              } else {
                return ''
              }
            },
          )}
        </S.HorizonPostContainer>
      </S.RecentPostsWrapper>
    </S.RecentPostContainer>
  )
}

export default RecentPostList

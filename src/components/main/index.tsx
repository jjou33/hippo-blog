import React from 'react'
import * as S from './styles'

import PostCardList from 'components/main/PostList/PostCardList'
import PostCategoryHeader from 'components/main/PostList/PostCategoryHeader'
import MainImage from 'components/main/MainImage'
import MainIntro from 'components/main/MainIntro'
import RecentPost from 'components/main/PostList/PostRecentList'

import type { PostListItemType } from 'types/postItem'
import type { ImagePathPropsType } from 'types/image/index'

interface MainSectionProps {
  mainSectionProp: {
    imagePath: ImagePathPropsType['imagePath']
    allMarkdownRemark: {
      edges: PostListItemType[]
    }
    currentOsEnv: string
  }
}

const MainSection = ({
  mainSectionProp: { imagePath, allMarkdownRemark, currentOsEnv },
}: MainSectionProps) => {
  console.log('currentEnv : ', currentOsEnv)
  return (
    <S.MainContainer>
      <MainImage imagePath={imagePath} />
      <S.ContentsWrapper>
        <MainIntro />
        {currentOsEnv === 'web' ? (
          <RecentPost posts={allMarkdownRemark.edges} />
        ) : (
          <>
            {/* <PostCategoryHeader selectedCategory="ALL POSTS" fontSize={50} />
            <PostCardList
              selectedCategory="All"
              posts={allMarkdownRemark.edges}
            /> */}
          </>
        )}
      </S.ContentsWrapper>
    </S.MainContainer>
  )
}

export default MainSection

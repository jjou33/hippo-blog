import React, { useEffect, useState } from 'react'
import * as S from './styles'

import PostCardList from 'components/main/PostList/PostCardList'
import PostCategoryHeader from 'components/main/PostList/PostCategoryHeader'

import MainImage from 'components/main/MainImage'
import MainIntro from 'components/main/MainIntro'
import RecentPost from 'components/main/PostList/PostRecentList'
import RecommendCategoryList from './PostList/RecommendCategoryList'
import ProjectDiaryList from './PostList/ProjectDiaryList'
import { useSetRecoilState } from 'recoil'
import { isCurrentOs } from 'states/currentOsState'
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
  const setState = useSetRecoilState(isCurrentOs)
  useEffect(() => {
    setState(currentOsEnv)
  }, [])
  return (
    <S.MainContainer>
      <MainImage imagePath={imagePath} />
      <S.ContentsWrapper>
        <MainIntro />
        <RecommendCategoryList imagePath={imagePath} />
        {currentOsEnv === 'web' ? (
          <>
            <RecentPost posts={allMarkdownRemark.edges} imagePath={imagePath} />
            <ProjectDiaryList
              imagepath={imagePath}
              allMarkdownRemark={allMarkdownRemark.edges}
            />
          </>
        ) : (
          <></>
        )}
        <PostCategoryHeader selectedCategory="ALL POSTS" fontSize={60} />
        <PostCardList selectedCategory="All" posts={allMarkdownRemark.edges} />
      </S.ContentsWrapper>
    </S.MainContainer>
  )
}

export default MainSection

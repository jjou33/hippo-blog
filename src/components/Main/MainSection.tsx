import React, { useEffect, useState } from 'react'
import PostList from 'components/Main/PostList/PostList'
import MainImage from 'components/layout/MainImage'
import type { PostListItemType } from 'types/PostItem.types'
import * as S from './Styles'

interface MainSectionProps {
  mainSectionProp: {
    imagePath: {
      [key: string]: string
    }
    scroll: number
    selectedCategory: string
    allMarkdownRemark: {
      edges: PostListItemType[]
    }
  }
}
const MainSection = ({ mainSectionProp }: MainSectionProps) => {
  const [mount, isMount] = useState(false)
  const { imagePath, scroll, selectedCategory, allMarkdownRemark } =
    mainSectionProp
  useEffect(() => {
    setTimeout(() => {
      isMount(true)
    }, 600)
  }, [])

  return (
    <S.MainContainer>
      <S.ProgressBarContainer>
        <S.ProgressBar scroll={scroll} />
      </S.ProgressBarContainer>
      <MainImage imagePath={imagePath} />
      <S.ContentsWrapper>
        <S.ContentsTitle>
          {selectedCategory === 'All' ? 'Total Post' : selectedCategory}
        </S.ContentsTitle>
        <PostList
          selectedCategory={selectedCategory}
          posts={allMarkdownRemark.edges}
          imageSet={imagePath}
        />
      </S.ContentsWrapper>
    </S.MainContainer>
  )
}

export default MainSection

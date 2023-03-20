import * as S from './styles'

import PostCardList from 'components/main/PostList/PostCardList'
import MainImage from 'components/main/MainImage'
import MainIntro from 'components/main/MainIntro'
import RecentPost from 'components/main/PostList/PostRecentList'

import { getOSByUserAgent } from 'utils/device/index'
import type { PostListItemType } from 'types/postItem'
import type { ImagePathPropsType } from 'types/image/index'
import { useEffect } from 'react'

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
  return (
    <S.MainContainer>
      <MainImage imagePath={imagePath} />
      <S.ContentsWrapper>
        <MainIntro />
        {currentOsEnv === 'web' ? (
          <RecentPost posts={allMarkdownRemark.edges} />
        ) : (
          <PostCardList
            selectedCategory="All"
            posts={allMarkdownRemark.edges}
          />
        )}
      </S.ContentsWrapper>
    </S.MainContainer>
  )
}

export default MainSection

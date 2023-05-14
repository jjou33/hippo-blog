import * as S from './styles'

import PostCardList from 'components/main/PostList/PostCardList'
import MainImage from 'components/organisms/MainImage'

import RecentPost from 'components/main/PostList/PostRecentList'
import RecommendCategoryList from './PostList/RecommendCategoryList'
import ProjectDiaryList from './PostList/ProjectDiaryList'
import Introduction from 'components/organisms/Introduction'
import { useCategoryMetadata } from 'hooks/useCategoryMetadata'
import type { PostListItemType } from 'types/post'
import type { ImagePathPropsType } from 'types/image/index'

interface MainSectionProps {
  mainSectionProp: {
    imagePath: ImagePathPropsType['imagePath']
    allMarkdownRemark: {
      edges: PostListItemType[]
    }
  }
}

const MainSection = ({
  mainSectionProp: { imagePath, allMarkdownRemark },
}: MainSectionProps) => {
  const {
    data: {
      allMarkdownRemark: { edges },
    },
  } = useCategoryMetadata()
  return (
    <S.MainContainer>
      <MainImage />
      <S.ContentsWrapper>
        <Introduction />
        <RecommendCategoryList imagePath={imagePath} />
        <RecentPost posts={edges} widePost={allMarkdownRemark.edges} />
        <ProjectDiaryList imagePath={imagePath} />
        <PostCardList selectedCategory="All" posts={allMarkdownRemark.edges} />
      </S.ContentsWrapper>
    </S.MainContainer>
  )
}

export default MainSection

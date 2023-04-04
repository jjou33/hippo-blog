import * as S from './styles'

import PostCardList from 'components/main/PostList/PostCardList'
import MainImage from 'components/main/MainImage'
import MainIntro from 'components/main/MainIntro'
import RecentPost from 'components/main/PostList/PostRecentList'
import RecommendCategoryList from './PostList/RecommendCategoryList'
import ProjectDiaryList from './PostList/ProjectDiaryList'
import type { PostListItemType } from 'types/postItem'
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
  return (
    <S.MainContainer>
      <MainImage imagePath={imagePath} />
      <S.ContentsWrapper>
        <MainIntro />
        <RecommendCategoryList imagePath={imagePath} />
        <RecentPost posts={allMarkdownRemark.edges} />
        <ProjectDiaryList imagePath={imagePath} />
        <PostCardList selectedCategory="All" posts={allMarkdownRemark.edges} />
      </S.ContentsWrapper>
    </S.MainContainer>
  )
}

export default MainSection

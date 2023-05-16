import * as S from './styles'

import PostCardList from 'components/main/PostList/PostCardList'
import MainImage from 'components/organisms/Main/MainImage'
import AllPostList from 'components/organisms/Main/MainPostList'
import RecentPost from 'components/main/PostList/PostRecentList'
import ProjectDiary from 'components/organisms/Main/ProjectDiary'
import RecommendCategory from 'components/organisms/Main/RecommendCategory'
import ProjectDiaryList from './PostList/ProjectDiaryList'
import Introduction from 'components/organisms/Main/Introduction'
import RecentPostList from 'components/organisms/Main/RecentPostList'
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
        <RecommendCategory imagePath={imagePath} />
        <RecentPostList posts={edges} widePost={allMarkdownRemark.edges} />
        <ProjectDiary imagePath={imagePath} />
        <AllPostList selectedCategory="All" posts={allMarkdownRemark.edges} />
      </S.ContentsWrapper>
    </S.MainContainer>
  )
}

export default MainSection

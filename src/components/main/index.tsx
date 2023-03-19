import PostList from 'components/main/PostList/PostList'
import PostCardList from 'components/main/PostList/PostCardList'
import MainImage from 'components/main/MainImage'
import MainIntro from 'components/main/MainIntro'
import RecentPost from 'components/main/PostList/PostRecentList'
import ColorText from 'components/common/TextEffects/ColorText'

import type { PostListItemType } from 'types/postItem'

import * as S from './styles'

interface MainSectionProps {
  mainSectionProp: {
    imagePath: {
      [key: string]: string
    }
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
        <RecentPost posts={allMarkdownRemark.edges} />
        {/* <S.ContentsTitle>
          <ColorText text={categoryTitle}></ColorText>
        </S.ContentsTitle>

        <PostList
          selectedCategory={selectedCategory}
          posts={allMarkdownRemark.edges}
        /> */}
      </S.ContentsWrapper>
    </S.MainContainer>
  )
}

export default MainSection

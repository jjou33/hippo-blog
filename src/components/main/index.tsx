import PostList from 'components/main/PostList/PostList'
import MainImage from 'components/main/MainImage'
import MainIntro from 'components/main/MainIntro'
import ColorText from 'components/common/TextEffects/ColorText'

import type { PostListItemType } from 'types/postItem'

import * as S from './styles'

interface MainSectionProps {
  mainSectionProp: {
    imagePath: {
      [key: string]: string
    }
    selectedCategory: string
    allMarkdownRemark: {
      edges: PostListItemType[]
    }
  }
}

const MainSection = ({ mainSectionProp }: MainSectionProps) => {
  const { imagePath, selectedCategory, allMarkdownRemark } = mainSectionProp
  const CategoryTitle =
    selectedCategory === 'All' ? 'Total Post' : selectedCategory
  return (
    <S.MainContainer>
      <MainImage imagePath={imagePath} />
      <S.ContentsWrapper>
        <MainIntro />
        <S.ContentsTitle>
          <ColorText text={CategoryTitle}></ColorText>
        </S.ContentsTitle>
        <PostList
          selectedCategory={selectedCategory}
          posts={allMarkdownRemark.edges}
        />
      </S.ContentsWrapper>
    </S.MainContainer>
  )
}

export default MainSection

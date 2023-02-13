import PostList from 'components/main/PostList/PostList'
import MainImage from 'components/main/MainImage'
import ColorText from 'components/common/TextEffects/ColorText'

import type { PostListItemType } from 'types/PostItem.types'

import * as S from './styles'

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
  const { imagePath, scroll, selectedCategory, allMarkdownRemark } =
    mainSectionProp
  const CategoryTitle =
    selectedCategory === 'All' ? 'Total Post' : selectedCategory
  return (
    <S.MainContainer>
      <S.ProgressBarContainer>
        <S.ProgressBar scroll={scroll} />
      </S.ProgressBarContainer>
      <MainImage imagePath={imagePath} />
      <S.ContentsWrapper>
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

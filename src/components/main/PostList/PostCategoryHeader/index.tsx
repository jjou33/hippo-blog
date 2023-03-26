import * as S from './styles'
import { navIconSet } from 'assets/svg/NavIconSet'

interface PostCategoryHeaderProps {
  selectedCategory: string
  fontSize: number
  categoryCount?: number
}

const PostCategoryHeader = ({
  selectedCategory,
  fontSize,
  categoryCount,
}: PostCategoryHeaderProps) => {
  return (
    <S.PostCategoryHeaderContainer>
      <S.PostCategoryIconWrapper size={60}>
        {navIconSet['hambergerMenu'].icon(`${fontSize}`, `${fontSize}`)}
      </S.PostCategoryIconWrapper>
      <S.PostCategoryTitleWrapper fontSize={fontSize}>
        {selectedCategory}
      </S.PostCategoryTitleWrapper>
      {categoryCount ? (
        <S.PostCategoryCountWrapper fontSize={fontSize}>
          {categoryCount}
        </S.PostCategoryCountWrapper>
      ) : (
        ''
      )}
    </S.PostCategoryHeaderContainer>
  )
}

export default PostCategoryHeader

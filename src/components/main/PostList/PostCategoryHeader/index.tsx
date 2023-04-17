import * as S from './styles'

import { getSvgJSXElement } from 'utils/imageBridge'
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
      <S.PostCategoryHeaderWrapper>
        <S.PostCategoryIconWrapper size={60}>
          {getSvgJSXElement('hambergerMenu', `${fontSize}`)}
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
      </S.PostCategoryHeaderWrapper>
    </S.PostCategoryHeaderContainer>
  )
}

export default PostCategoryHeader

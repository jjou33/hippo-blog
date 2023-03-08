import * as S from './styles'
import { navIconSet } from 'assets/svg/NavIconSet'

const PostCategoryHeader = ({ selectedCategory, categoryCount }) => {
  return (
    <S.PostCategoryHeader>
      <S.PostCategoryIcon>
        {navIconSet['hambergerMenu'].icon('40', '40')}
      </S.PostCategoryIcon>
      <S.PostCategoryWrapper>
        <S.PostCategoryTitle>{selectedCategory}</S.PostCategoryTitle>
        <S.PostCategoryCount>{categoryCount}</S.PostCategoryCount>
      </S.PostCategoryWrapper>
    </S.PostCategoryHeader>
  )
}

export default PostCategoryHeader

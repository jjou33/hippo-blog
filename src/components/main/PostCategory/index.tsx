import * as S from './styles'
import { navIconSet } from 'assets/svg/NavIconSet'

const PostCategory = ({ selectedCategory, posts, imagePath }) => {
  return (
    <S.PostCategoryContainer>
      <S.PostCategoryHeader>
        <S.PostCategoryIcon>
          {navIconSet['menu'].icon('40', '40')}
        </S.PostCategoryIcon>
        <S.PostCategoryTitle>{selectedCategory}</S.PostCategoryTitle>
      </S.PostCategoryHeader>
    </S.PostCategoryContainer>
  )
}

export default PostCategory

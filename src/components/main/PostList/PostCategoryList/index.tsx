import * as S from './styles'
import PostList from 'components/main/PostList/PostList'
import { navIconSet } from 'assets/svg/NavIconSet'
import { menuOpenState } from 'states/menuOpenState'
import { useSetRecoilState } from 'recoil'
import { useEffect } from 'react'
import { useCategoryMetadata } from 'hooks/useCategoryMetadata'
const PostCategory = ({ selectedCategory, posts, imagePath, type }) => {
  const setState = useSetRecoilState(menuOpenState)
  const { categoryCount, data } = useCategoryMetadata()
  console.log('data : ', data)
  useEffect(() => {
    setState(false)
  }, [])
  return (
    <S.PostCategoryContainer>
      <S.PostCategoryHeader>
        <S.PostCategoryIcon>
          {navIconSet['menu'].icon('40', '40')}
        </S.PostCategoryIcon>
        <S.PostCategoryWrapper>
          <S.PostCategoryTitle>{selectedCategory}</S.PostCategoryTitle>
          <S.PostCategoryCount>
            {categoryCount[selectedCategory]}
          </S.PostCategoryCount>
        </S.PostCategoryWrapper>
      </S.PostCategoryHeader>
      <PostList
        selectedCategory={selectedCategory}
        posts={data.allMarkdownRemark.edges}
      />
    </S.PostCategoryContainer>
  )
}

export default PostCategory

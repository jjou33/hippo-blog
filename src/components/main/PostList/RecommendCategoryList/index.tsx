import React from 'react'
import * as S from './styles'

import PostCategoryHeader from '../PostCategoryHeader'
const RecommendCategoryList = () => {
  return (
    <S.RecommendCategoryContainer>
      <PostCategoryHeader selectedCategory="ALL POSTS" fontSize={50} />
    </S.RecommendCategoryContainer>
  )
}

export default RecommendCategoryList

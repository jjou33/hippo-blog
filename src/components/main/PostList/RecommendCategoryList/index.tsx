import React from 'react'
import * as S from './styles'

import PostCategoryHeader from '../PostCategoryHeader'
import RecommendCategoryItem from './RecommentCategoryItem'
import type { IconPropsType } from 'types/image/imagePathType'
const RecommendCategoryList = ({ imagePath }: IconPropsType) => {
  const RecommendCategoryList = ['javascript3', 'algorithm4', 3, 4, 5, 6, 7, 8]
  console.log('image : ', imagePath)
  return (
    <S.RecommendCategoryContainer>
      <PostCategoryHeader selectedCategory="추천 카테고리" fontSize={60} />
      <S.RecommandCategoryWrapper>
        {RecommendCategoryList.map((value, index) => {
          return (
            <RecommendCategoryItem
              imagePath={imagePath}
              categoryName={value}
              key={index}
            />
          )
        })}
      </S.RecommandCategoryWrapper>
    </S.RecommendCategoryContainer>
  )
}

export default RecommendCategoryList

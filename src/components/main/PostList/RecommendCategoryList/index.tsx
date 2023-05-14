import React from 'react'
import * as S from './styles'

import MainSectionHeader from 'components/molecules/MainSectionHeader'
import type { ImagePathPropsType } from 'types/image'

const RecommendCategoryList = ({ imagePath }: ImagePathPropsType) => {
  const RecommendCategoryList: string[] = [
    'Javascript',
    'react',
    'vue',
    'Babel',
    'Algorithm',
    'HTML',
    'Browser',
    'Mac',
  ]

  return (
    <S.RecommendCategoryContainer>
      <MainSectionHeader selectedCategory="추천 카테고리 🙌" fontSize={60} />
      <S.RecommandCategoryWrapper>
        {RecommendCategoryList.map((categoryName, index) => {
          return (
            <S.RecommentCategoryItemWrapper
              to={`/?category=${categoryName}`}
              key={index}
            >
              <S.RecommendCategoryImg
                imagePath={imagePath[`${categoryName}`]}
              />
              <S.RecommendCategoryTitle>
                {categoryName.toUpperCase()}
              </S.RecommendCategoryTitle>
            </S.RecommentCategoryItemWrapper>
          )
        })}
      </S.RecommandCategoryWrapper>
    </S.RecommendCategoryContainer>
  )
}

export default RecommendCategoryList

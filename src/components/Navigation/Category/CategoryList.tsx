import React, { ReactNode, useEffect, useState } from 'react'
import CategoryItems from './CategoryItems'
import CategoryTitle from './CategoryTitle'
import CategoryRootTitle from './CategoryRootTitle'

import * as S from './Styles'

import type { CategoryListProps } from 'types/Category.types'

/**----------------------------------------------------
 * @description Navigation Side Bar List 의 최상위 컴포넌트
 ------------------------------------------------------*/

const CategoryList = ({
  selectedCategory,
  categoryList,
  categoryCount,
}: CategoryListProps) => {
  return (
    <S.CategoryListContainer>
      <CategoryRootTitle categoryCount={categoryCount} />
      {Object.entries(categoryList).map((categoryItems, idx): ReactNode => {
        return (
          <S.CategoryListWrapper key={idx}>
            <CategoryTitle
              categoryItem={categoryItems[0]}
              categoryItemCount={categoryItems[1]['childrenCount']}
            >
              <CategoryItems
                key={idx}
                selectedCategory={selectedCategory}
                categoryList={categoryItems[1]['children']}
                categoryCount={categoryCount}
              />
            </CategoryTitle>
          </S.CategoryListWrapper>
        )
      })}
    </S.CategoryListContainer>
  )
}

export default CategoryList

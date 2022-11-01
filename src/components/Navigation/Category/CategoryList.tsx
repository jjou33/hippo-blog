import React, { ReactNode } from 'react'
import CategoryItems from './CategoryItems'
import CategoryTitle from './CategoryTitle'
import CategoryRootTitle from './CategoryRootTitle'
import * as Styled from './style/CategoryListStyled'

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
    <Styled.CategoryListContainer>
      <CategoryRootTitle categoryCount={categoryCount} />
      {Object.entries(categoryList).map((categoryItems, idx): ReactNode => {
        return (
          <Styled.CategoryItemWrapper key={idx}>
            <CategoryTitle categoryItem={categoryItems[0]}>
              <CategoryItems
                key={idx}
                selectedCategory={selectedCategory}
                categoryList={categoryItems[1]['children']}
                categoryCount={categoryCount}
              />
            </CategoryTitle>
          </Styled.CategoryItemWrapper>
        )
      })}
    </Styled.CategoryListContainer>
  )
}

export default CategoryList

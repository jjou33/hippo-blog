import React, { FunctionComponent, ReactNode } from 'react'
import styled from '@emotion/styled'
import CategoryItems from './CategoryItems'
import CategoryTitle from './CategoryTitle'
import CategoryRootTitle from './CategoryRootTitle'
import type { CategoryListProps } from 'types/Category.types'

/**----------------------------------------------------
 * @description Navigation Side Bar List 의 최상위 컴포넌트
 ------------------------------------------------------*/

const CategoryListContainer = styled.div`
  width: 100%;

  @media (max-width: 768px) {
    width: 100%;
    margin-top: 50px;
    padding: 0 20px;
  }
`

const CategoryItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px auto;
`
const CategoryList: FunctionComponent<CategoryListProps> = function ({
  selectedCategory,
  categoryList,
  categoryCount,
}) {
  return (
    <CategoryListContainer>
      <CategoryRootTitle categoryCount={categoryCount} />
      {Object.entries(categoryList).map((categoryItems, idx): ReactNode => {
        return (
          <CategoryItemWrapper key={idx}>
            <CategoryTitle categoryItem={categoryItems[0]}>
              <CategoryItems
                key={idx}
                selectedCategory={selectedCategory}
                categoryList={categoryItems[1]['children']}
                categoryCount={categoryCount}
              />
            </CategoryTitle>
          </CategoryItemWrapper>
        )
      })}
    </CategoryListContainer>
  )
}

export default CategoryList

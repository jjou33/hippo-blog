import React, { FunctionComponent, ReactNode } from 'react'
import styled from '@emotion/styled'
import CategoryItems from './CategoryItems'
export interface CategoryListProps {
  selectedCategory: string
  categoryList: {
    [key: string]: string[]
  }
}

export interface CategoryItemListProps {
  selectedCategory: string
  categoryList: string[]
}
export interface temp {
  title: string
}
const CategoryListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: float;
  width: 100%;
  margin: 120px 0px 0px 30px;

  @media (max-width: 768px) {
    width: 100%;
    margin-top: 50px;
    padding: 0 20px;
  }
`

const CategoryTitle = styled.span`
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: 25px;
`

const CategoryList: FunctionComponent<CategoryListProps> = function ({
  selectedCategory,
  categoryList,
}) {
  return (
    <CategoryListWrapper>
      {Object.entries(categoryList).map((categoryItems, idx): ReactNode => {
        return (
          <CategoryTitle key={categoryItems[0]}>
            {categoryItems[0]}
            <CategoryItems
              key={idx}
              selectedCategory={selectedCategory}
              categoryList={categoryItems[1]}
            />
          </CategoryTitle>
        )
      })}
    </CategoryListWrapper>
  )
}

export default CategoryList

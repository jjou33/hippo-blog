import React, { FunctionComponent, ReactNode } from 'react'
import styled from '@emotion/styled'
import CategoryItems from './CategoryItems'
import { IGatsbyImageData } from 'gatsby-plugin-image'
export interface CategoryListProps {
  selectedCategory: string
  categoryList: {
    [key: string]: {
      image: IGatsbyImageData[]
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      [key: string]: any[]
    }
  }
}

export interface CategoryItemListProps {
  selectedCategory: string
  categoryList: string[]
  image: IGatsbyImageData[]
}

const CategoryListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* align-items: float; */
  width: 100%;
  margin: 120px 0px 0px 80px;

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
  margin-top: 15px;
`

const CategoryList: FunctionComponent<CategoryListProps> = function ({
  selectedCategory,
  categoryList,
}) {
  return (
    <CategoryListWrapper>
      {Object.entries(categoryList).map((categoryItems, idx): ReactNode => {
        return (
          <>
            <CategoryTitle key={categoryItems[0]}>
              {categoryItems[0]}
            </CategoryTitle>
            <CategoryItems
              key={idx}
              selectedCategory={selectedCategory}
              categoryList={categoryItems[1]['title']}
              image={categoryItems[1]['image']}
            />
          </>
        )
      })}
    </CategoryListWrapper>
  )
}

export default CategoryList

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
  menuList: object[]
}

export interface CategoryItemListProps {
  selectedCategory: string
  categoryList: string[]
  image: IGatsbyImageData[]
}

const CategoryListContainer = styled.div`
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
// TODO: 드롭다운으로 변경하기 위해 Styled 태그 변경필요
const CategoryItemWrapper = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: 15px;
  margin-top: 15px;
`

const CategoryList: FunctionComponent<CategoryListProps> = function ({
  selectedCategory,
  categoryList,
  menuList,
}) {
  return (
    <CategoryListContainer>
      {Object.entries(categoryList).map((categoryItems, idx): ReactNode => {
        console.log('menu : ', menuList)
        return (
          <CategoryItemWrapper key={categoryItems[0]}>
            {categoryItems[0]}
            <CategoryItems
              key={idx}
              selectedCategory={selectedCategory}
              categoryList={categoryItems[1]['title']}
              image={categoryItems[1]['image']}
            />
          </CategoryItemWrapper>
        )
      })}
    </CategoryListContainer>
  )
}

export default CategoryList

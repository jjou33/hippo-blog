import React, { FunctionComponent, ReactNode } from 'react'
import styled from '@emotion/styled'
import CategoryItems from './CategoryItems'
import CategoryTitle from './CategoryTitle'
import { CategoryListProps } from 'types/Category.types'

const CategoryListContainer = styled.article`
  justify-content: center;
  align-items: float;
  width: 100%;

  @media (max-width: 768px) {
    width: 100%;
    margin-top: 50px;
    padding: 0 20px;
  }
`
// TODO: 드롭다운으로 변경하기 위해 Styled 태그 변경필요
const CategoryItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: 15px;
  margin: 10px 20px;
`
const CategoryList: FunctionComponent<CategoryListProps> = function ({
  selectedCategory,
  categoryList,
  navIconSet,
}) {
  return (
    <CategoryListContainer>
      {Object.entries(categoryList).map((categoryItems, idx): ReactNode => {
        return (
          <CategoryItemWrapper key={idx}>
            <CategoryTitle
              categoryItem={categoryItems[0]}
              navIconSet={navIconSet}
            >
              <CategoryItems
                key={idx}
                selectedCategory={selectedCategory}
                categoryList={categoryItems[1]['children']}
                navIconSet={navIconSet}
              />
            </CategoryTitle>
          </CategoryItemWrapper>
        )
      })}
    </CategoryListContainer>
  )
}

export default CategoryList

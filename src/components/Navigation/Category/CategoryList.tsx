import React, { FunctionComponent, ReactNode, useState } from 'react'
import styled from '@emotion/styled'
import CategoryItems from './CategoryItems'
import CategoryTitle from './CategoryTitle'
import Dropdown from 'components/Common/utils/DropDown/DropDown'
type funcType = (width: string, height: string, color?: string) => ReactNode

export interface CategoryNavIconProps {
  navIconSet: {
    [key: string]: {
      [key: string]: funcType
    }
  }
}

export interface CategoryListProps extends CategoryNavIconProps {
  selectedCategory: string
  categoryList: {
    [key: string]: {
      title: string
      children: string[]
    }
  }
}

export interface CategoryItemListProps extends CategoryNavIconProps {
  selectedCategory: string
  categoryList: string[]
}

const CategoryListContainer = styled.article`
  /* display: flex;
  flex-direction: column; */
  justify-content: center;
  align-items: float;
  width: 100%;
  /* margin: 230px 0px 0px 0px; */

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
              categoryTitle={categoryItems[0]}
              navIconSet={navIconSet}
            ></CategoryTitle>
            <CategoryItems
              key={idx}
              selectedCategory={selectedCategory}
              categoryList={categoryItems[1]['children']}
              navIconSet={navIconSet}
            />
          </CategoryItemWrapper>
        )
      })}
    </CategoryListContainer>
  )
}

export default CategoryList

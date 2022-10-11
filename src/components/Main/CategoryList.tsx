import React, { FunctionComponent, ReactNode } from 'react'
import styled from '@emotion/styled'
import CategoryItems from './CategoryItems'
export interface CategoryListProps {
  selectedCategory: string
  categoryList: {
    [key: string]: {
      title: string
      children: string[]
    }
  }
  sideBarIcon: {
    [key: string]: {
      [key: string]: funcType
    }
  }
}

type funcType = (width: string, height: string, color?: string) => ReactNode

export interface CategoryItemListProps {
  selectedCategory: string
  categoryList: string[]
  sideBarIcon: {
    [key: string]: {
      [key: string]: funcType
    }
  }
}

const CategoryListContainer = styled.div`
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
const CategoryItemWrapper = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: 15px;
  margin: 10px 20px;
`
const CategoryTitleIconWrapper = styled.div`
  width: 20px;
  height: 20px;
  margin-right: 8px;
  margin-left: 5px;
  display: flex;
  align-items: center;
`
const CategoryTitleWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  border-radius: 10px;
  width: 12rem;
  height: 3rem;
  border-width: 1px;
  background-color: #fdf1ed;
`
const CategoryTitle = styled.span``
const CategoryList: FunctionComponent<CategoryListProps> = function ({
  selectedCategory,
  categoryList,
  sideBarIcon,
}) {
  return (
    <CategoryListContainer>
      {Object.entries(categoryList).map((categoryItems, idx): ReactNode => {
        return (
          <CategoryItemWrapper key={categoryItems[0]}>
            <CategoryTitleWrapper>
              <CategoryTitleIconWrapper>
                {sideBarIcon[categoryItems[0]] !== undefined
                  ? sideBarIcon[categoryItems[0]].icon('18', '18')
                  : ''}
              </CategoryTitleIconWrapper>
              <CategoryTitle>{categoryItems[0]}</CategoryTitle>
            </CategoryTitleWrapper>
            <CategoryItems
              key={idx}
              selectedCategory={selectedCategory}
              categoryList={categoryItems[1]['children']}
              sideBarIcon={sideBarIcon}
            />
          </CategoryItemWrapper>
        )
      })}
    </CategoryListContainer>
  )
}

export default CategoryList

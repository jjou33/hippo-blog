import React, { ReactNode } from 'react'
import { CategoryCount } from 'types/Category.types'
import { getSvgJSXElement } from 'utils/Common/Common'
import {
  CategoryItem,
  CategoryItemArrow,
  CategoryItemContainer,
  CategoryItemCount,
  CategoryItemWrapper,
  CategoryTitleIcon,
} from './style/CategoryItemsStyled'

interface CategoryItemListProps extends CategoryCount {
  selectedCategory: string
  categoryList: string[]
}

const CategoryItems = ({
  selectedCategory,
  categoryList,
  categoryCount,
}: CategoryItemListProps) => {
  return (
    <CategoryItemContainer>
      {categoryList.map((categoryItem, idx): ReactNode => {
        return (
          <CategoryItemWrapper key={idx}>
            <CategoryItemArrow>
              {getSvgJSXElement('Dot', '18')}
            </CategoryItemArrow>
            <CategoryTitleIcon>
              {getSvgJSXElement(categoryItem, '18')}
            </CategoryTitleIcon>
            <CategoryItem
              to={`/?category=${categoryItem}`}
              active={categoryItem === selectedCategory}
              key={categoryItem}
            >
              {categoryItem}
            </CategoryItem>
            <CategoryItemCount>
              {categoryCount[categoryItem] !== undefined
                ? ` (${categoryCount[categoryItem]})`
                : ''}
            </CategoryItemCount>
          </CategoryItemWrapper>
        )
      })}
    </CategoryItemContainer>
  )
}

export default CategoryItems

import React, { ReactNode } from 'react'
import { CategoryCount } from 'types/Category.types'
import { getSvgJSXElement } from 'utils/Common/Common'
import * as Styled from './style/CategoryItemsStyled'
import ConterBadge from 'components/Common/CounterBadge'
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
    <Styled.CategoryItemContainer>
      {categoryList.map((categoryItem, idx): ReactNode => {
        return (
          <Styled.CategoryItemWrapper key={idx}>
            <span></span>
            <Styled.CategoryItemArrow>
              {getSvgJSXElement('NonFilledArrow', '10')}
            </Styled.CategoryItemArrow>
            <Styled.CategoryTitleIcon>
              {getSvgJSXElement(categoryItem, '18')}
            </Styled.CategoryTitleIcon>
            <Styled.CategoryItem
              to={`/?category=${categoryItem}`}
              active={categoryItem === selectedCategory}
              key={categoryItem}
            >
              {categoryItem}
            </Styled.CategoryItem>
            <Styled.CategoryItemCount>
              {categoryCount[categoryItem] !== undefined ? (
                <ConterBadge color="red">
                  {categoryCount[categoryItem]}
                </ConterBadge>
              ) : (
                ''
              )}
            </Styled.CategoryItemCount>
          </Styled.CategoryItemWrapper>
        )
      })}
    </Styled.CategoryItemContainer>
  )
}

export default CategoryItems

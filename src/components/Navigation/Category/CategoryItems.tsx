import React, { ReactNode } from 'react'
import { CategoryCount } from 'types/Category.types'
import { getSvgJSXElement } from 'utils/Common/Common'

import * as S from './Styles'
import ConterBadge from 'components/Common/NavigationCounterBadge/CounterBadge'
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
    <S.CategoryItemContainer>
      {categoryList.map((categoryItem, idx): ReactNode => {
        return (
          <S.CategoryItemWrapper key={idx}>
            <span></span>
            <S.CategoryItemArrow>
              {getSvgJSXElement('NonFilledArrow', '10')}
            </S.CategoryItemArrow>
            <S.CategoryTitleIcon>
              {getSvgJSXElement(categoryItem, '18')}
            </S.CategoryTitleIcon>
            <S.CategoryItem
              to={`/?category=${categoryItem}`}
              active={categoryItem === selectedCategory}
              key={categoryItem}
            >
              {categoryItem}
            </S.CategoryItem>
            <S.CategoryItemCount>
              {categoryCount[categoryItem] !== undefined ? (
                <ConterBadge color="red">
                  {categoryCount[categoryItem]}
                </ConterBadge>
              ) : (
                ''
              )}
            </S.CategoryItemCount>
          </S.CategoryItemWrapper>
        )
      })}
    </S.CategoryItemContainer>
  )
}

export default CategoryItems

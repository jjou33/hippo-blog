import React, { ReactNode } from 'react'
import { CategoryCount } from 'types/category'
import { getSvgJSXElement } from 'utils/imageBridge'
import CounterBadge from 'components/common/Badges/Badge'

import * as S from './styles'

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
              {getSvgJSXElement('NonFilledArrow', '15')}
            </S.CategoryItemArrow>
            <S.CategoryTitleIcon>
              {getSvgJSXElement(categoryItem, '25')}
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
                <CounterBadge color="red" width="20" height="15">
                  {categoryCount[categoryItem]}
                </CounterBadge>
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

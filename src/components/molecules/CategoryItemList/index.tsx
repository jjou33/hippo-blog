import React, { ReactNode } from 'react'

import IconWrapper from 'components/atom/IconWrapper'
import { CategoryCount } from 'types/catgegory'
import { getSvgJSXElement } from 'utils/imageBridge'
import CounterBadge from 'components/atom/Badges'

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
            <S.CategoryItemArrow>
              <IconWrapper iconName="NonFilledArrow" iconSize={15} />
            </S.CategoryItemArrow>
            <S.CategoryItem
              to={`/?category=${categoryItem}`}
              active={categoryItem === selectedCategory}
              key={categoryItem}
            >
              {categoryItem}
            </S.CategoryItem>
            <S.CategoryItemCount>
              {categoryCount[categoryItem] !== undefined ? (
                <CounterBadge
                  text={`${categoryCount[categoryItem]}`}
                  color="red"
                  backgroundColor="white"
                  borderStyle="1px #f65660cc solid"
                />
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

import React, { ReactNode } from 'react'

import CategoryRootTitle from 'components/molecules/CategoryRoot'
import CategoryItemTitle from 'components/molecules/CategoryItemTitle'
import CategoryItemList from 'components/molecules/CategoryItemList'
import * as S from './styles'

import type { CategoryListProps } from 'types/catgegory'

/**----------------------------------------------------
 * @description Navigation Side Bar List 의 최상위 컴포넌트
 ------------------------------------------------------*/

const NavCategory = ({
  selectedCategory,
  categoryList,
  categoryCount,
}: CategoryListProps) => {
  return (
    <S.CategoryListContainer>
      <CategoryRootTitle categoryCount={categoryCount} />
      {Object.entries(categoryList).map((categoryItems, idx): ReactNode => {
        return (
          <S.CategoryListWrapper key={idx}>
            <CategoryItemTitle
              categoryItem={categoryItems[0]}
              categoryItemCount={categoryItems[1]['childrenCount']}
            >
              <CategoryItemList
                key={idx}
                selectedCategory={selectedCategory}
                categoryList={categoryItems[1]['children']}
                categoryCount={categoryCount}
              />
            </CategoryItemTitle>
          </S.CategoryListWrapper>
        )
      })}
    </S.CategoryListContainer>
  )
}

export default NavCategory

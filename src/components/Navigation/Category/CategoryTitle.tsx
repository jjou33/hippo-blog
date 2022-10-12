import React, { FunctionComponent } from 'react'
import styled from '@emotion/styled'
import { CategoryNavIconProps } from 'components/Navigation/Category/CategoryList'

const CategoryTitleContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  border-radius: 10px;
  width: 12rem;
  height: 3rem;
  border-width: 1px;
  background-color: #fdf1ed;
`

const CategoryTitleIconWrapper = styled.div`
  width: 20px;
  height: 20px;
  margin-right: 8px;
  margin-left: 5px;
  display: flex;
  align-items: center;
`

interface CategoryTitleProps extends CategoryNavIconProps {
  categoryTitle: string
}
const CategoryTitle: FunctionComponent<CategoryTitleProps> = function ({
  categoryTitle,
  navIconSet,
}) {
  return (
    <CategoryTitleContainer>
      <CategoryTitleIconWrapper>
        {navIconSet[categoryTitle] !== undefined
          ? navIconSet[categoryTitle].icon('18', '18')
          : ''}
      </CategoryTitleIconWrapper>
      {categoryTitle}
    </CategoryTitleContainer>
  )
}

export default CategoryTitle

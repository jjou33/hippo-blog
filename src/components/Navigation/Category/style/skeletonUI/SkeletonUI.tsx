import React from 'react'
import * as Skeleton from './CategoryListStyled'
const SkeletonUI = categoryList => {
  console.log('categoryList : ', categoryList.categoryList)
  return (
    <Skeleton.CategoryListContainer>
      <Skeleton.RootTitleWrapper>
        <Skeleton.CategoryRootIcon></Skeleton.CategoryRootIcon>
        <Skeleton.CategoryRootItem></Skeleton.CategoryRootItem>
      </Skeleton.RootTitleWrapper>

      {Object.entries(categoryList.categoryList).map(
        (categoryItems, idx): ReactNode => {
          return (
            <Skeleton.CategoryTitleContainer key={idx}>
              <Skeleton.CategoryTitleIconWrapper></Skeleton.CategoryTitleIconWrapper>
              <Skeleton.CartegoryTitleText></Skeleton.CartegoryTitleText>
            </Skeleton.CategoryTitleContainer>
          )
        },
      )}
    </Skeleton.CategoryListContainer>
  )
}

export default SkeletonUI

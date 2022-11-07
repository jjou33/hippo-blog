import React from 'react'

import * as Skeleton from './Styles'

const CategorySkeleton = categoryList => {
  return (
    <Skeleton.SkeletonContainer>
      <Skeleton.SkeletonRootTitle>
        <Skeleton.SkeletonRootIcon />
        <Skeleton.SkeletonRootItem />
      </Skeleton.SkeletonRootTitle>
      {Object.entries(categoryList.categoryList).map(
        (categoryItems, idx): ReactNode => {
          return (
            <Skeleton.SkeletonTitleContainer key={idx}>
              <Skeleton.SkeletonTitleIcon />
              <Skeleton.SkeletonTitleText />
            </Skeleton.SkeletonTitleContainer>
          )
        },
      )}
    </Skeleton.SkeletonContainer>
  )
}

export default CategorySkeleton

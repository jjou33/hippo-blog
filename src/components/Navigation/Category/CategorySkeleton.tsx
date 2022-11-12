import React, { ReactNode } from 'react'

import * as Skeleton from './Styles'

interface SkeletonPropsType {
  categoryList: {
    [key: string]: {
      title: string
      children: string[]
      childrenCount: number
    }
  }
}
const CategorySkeleton = (categoryList: SkeletonPropsType) => {
  return (
    <Skeleton.SkeletonContainer>
      <Skeleton.SkeletonRootTitle>
        <Skeleton.SkeletonRootIcon />
        <Skeleton.SkeletonRootItem />
      </Skeleton.SkeletonRootTitle>
      {Object.entries(categoryList.categoryList).map((_, idx): ReactNode => {
        return (
          <Skeleton.SkeletonTitleContainer key={idx}>
            <Skeleton.SkeletonTitleIcon />
            <Skeleton.SkeletonTitleText />
          </Skeleton.SkeletonTitleContainer>
        )
      })}
    </Skeleton.SkeletonContainer>
  )
}

export default CategorySkeleton

import { ReactNode } from 'react'
import { PostListItemType } from './PostItem.types'

/**
 * MetaData Hooks
 */

export interface CategoryCount {
  categoryCount: {
    [key: string]: number
  }
}

export interface CategoryEdgeType {
  edges: {
    node: {
      [key: string]: string
    }
  }[]
}

export interface CategoryMetadataType extends CategoryCount {
  data: {
    allFile: CategoryEdgeType
    allMarkdownRemark: {
      edges: PostListItemType[]
    }
  }
}

/**
 * CategoryIcon 공통 타입
 */
export interface CategoryNavIconProps {
  navIconSet: {
    [key: string]: {
      [key: string]: (
        width: string,
        height: string,
        color?: string,
      ) => ReactNode
    }
  }
}

/**
 * CategoryTitle 타입
 */
export interface CategoryTitleProps extends CategoryNavIconProps {
  children: ReactNode
  categoryItem: string
}

/**
 * CategoryList 타입
 */
export interface CategoryListProps extends CategoryNavIconProps, CategoryCount {
  selectedCategory: string
  categoryList: {
    [key: string]: {
      title: string
      children: string[]
    }
  }
}

export interface CategoryItemListProps
  extends CategoryNavIconProps,
    CategoryCount {
  selectedCategory: string
  categoryList: string[]
}

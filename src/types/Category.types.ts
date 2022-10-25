import { ReactNode } from 'react'
import { PostListItemType } from './PostItem.types'

/**
 * MetaData Hooks
 */

export interface CategoryTypes {
  [key: string]: number
}

export interface useCategoryMetadataType {
  allFile: {
    edges: {
      node: {
        [key: string]: string
      }
    }[]
  }
  allMarkdownRemark: {
    edges: PostListItemType[]
  }
}

export interface CategoryMetadataType {
  data: useCategoryMetadataType
  categoryCount: CategoryTypes
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
 * CategoryList 타입
 */
export interface CategoryListProps extends CategoryNavIconProps {
  selectedCategory: string
  categoryList: {
    [key: string]: {
      title: string
      children: string[]
    }
  }
  categoryCount: CategoryTypes
}

export interface CategoryItemListProps extends CategoryNavIconProps {
  selectedCategory: string
  categoryList: string[]
  categoryCount: CategoryTypes
}

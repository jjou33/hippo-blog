import { ReactNode } from 'react'
import { PostListItemType } from './PostItem.types'

/**
 * MetaData Hooks
 */
export interface useCategoryMetadataType {
  allMarkdownRemark: {
    edges: PostListItemType[]
  }
  file: {
    publicURL: string
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
}

export interface CategoryItemListProps extends CategoryNavIconProps {
  selectedCategory: string
  categoryList: string[]
}

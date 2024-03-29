import { PostListItemType } from 'types/post/index'

export interface CategoryCount {
  categoryCount: {
    [key: string]: number | string
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

export interface CategoryListProps extends CategoryCount {
  selectedCategory: string
  categoryList: {
    [key: string]: {
      title: string
      children: string[]
      childrenCount: number
    }
  }
}

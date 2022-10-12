import { PostListItemType } from './PostItem.types'

export type useCategoryMetadataType = {
  allMarkdownRemark: {
    edges: PostListItemType[]
  }
  file: {
    publicURL: string
  }
}

import { IGatsbyImageData } from 'gatsby-plugin-image'

export interface ImageType {
  childImageSharp: {
    gatsbyImageData: IGatsbyImageData
  }
  publicURL: string
}
export interface PostFrontmatterType {
  title: string
  date: string
  categories: string[]
  summary: string
  domain: string
  sideTitle: string
  thumbnail: ImageType
  categoryIcon: ImageType
}

export interface PostListItemType {
  node: {
    id: string
    fields: {
      slug: string
    }
    frontmatter: PostFrontmatterType
  }
}

export interface CategortListType {
  edges: PostListItemType[]
}

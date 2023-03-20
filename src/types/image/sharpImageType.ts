import { IGatsbyImageData } from 'gatsby-plugin-image'

export interface ImageType {
  childImageSharp: {
    gatsbyImageData: IGatsbyImageData
  }
  publicURL: string
}

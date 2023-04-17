import { ReactNode } from 'react'
import { IGatsbyImageData } from 'gatsby-plugin-image'

export interface ImageType {
  childImageSharp: {
    gatsbyImageData: IGatsbyImageData
  }
  publicURL: string
}

export interface ImagePathPropsType {
  imagePath: {
    [key: string]: string
  }
}

export interface IconPropsType {
  [key: string]: {
    icon: (width: string, height: string, color?: string) => ReactNode
  }
}

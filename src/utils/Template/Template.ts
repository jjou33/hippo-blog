import { CategoryEdgeType } from 'types/Category.types'

interface NodeType {
  node: {
    [key: string]: string
  }
}

interface IndexSignatureType {
  [key: string]: string
}

export const getImagePathSetList = (edges: CategoryEdgeType['edges']) => {
  const imageObject: IndexSignatureType = {}

  edges.forEach((item: NodeType) => {
    if (
      item.node.publicURL &&
      item.node.publicURL.split('/')[3] !== undefined &&
      item.node.publicURL.split('/')[3].split('.') !== undefined
    ) {
      const imageName: string = item.node.publicURL.split('/')[3].split('.')[0]
      imageObject[imageName] = item.node.publicURL
      imageObject[`${imageName}_resize`] = item.node.childImageSharp
    }
  })

  return imageObject
}

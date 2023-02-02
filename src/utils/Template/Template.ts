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
  console.log('edges : ', edges)
  edges.forEach((item: NodeType) => {
    if (
      item.node.publicURL &&
      item.node.publicURL.split('/')[3] !== undefined &&
      item.node.publicURL.split('/')[3].split('.') !== undefined
    ) {
      console.log('item : ', item.node.childImageSharp)
      const imageName: string = item.node.publicURL.split('/')[3].split('.')[0]
      imageObject[imageName] = item.node.publicURL
      imageObject[`${imageName}_resize`] = item.node.childImageSharp
    }
  })

  return imageObject
}

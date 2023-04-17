import React, { ReactNode } from 'react'

import { CategoryEdgeType } from 'types/catgegory'
import { navigationIcon } from 'assets/svg/NavigationIcon'

interface NodeType {
  node: {
    [key: string]: string
  }
}

export const getSvgJSXElement = (
  iconName: string,
  size: string,
  color?: string,
): ReactNode => {
  return navigationIcon[iconName] !== undefined ? (
    navigationIcon[iconName].icon(size, size, color)
  ) : (
    <></>
  )
}

export const getImagePathSetList = (edges: CategoryEdgeType['edges']) => {
  const imageObject: { [key: string]: string } = {}

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

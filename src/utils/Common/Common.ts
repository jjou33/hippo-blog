import React, { ReactNode } from 'react'
import { navIconSet } from 'assets/Svg/NavIconSet'

export const getSvgJSXElement = (iconName: string, size: string) => {
  return navIconSet[iconName] !== undefined
    ? navIconSet[iconName].icon(size, size)
    : ''
}

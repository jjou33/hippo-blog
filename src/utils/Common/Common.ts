import { navIconSet } from 'assets/svg/NavIconSet'
import { navTabMenuIconSet } from 'assets/svg/MainImageIconSet'
export const getSvgJSXElement = (
  iconName: string,
  size: string,
  color?: string,
) => {
  return navIconSet[iconName] !== undefined
    ? navIconSet[iconName].icon(size, size, color)
    : ''
}

export const getMainImageIconSvgElement = (
  iconName: string,
  size: string,
  color?: string,
) => {
  return navTabMenuIconSet[iconName] !== undefined
    ? navTabMenuIconSet[iconName].icon(size, size, color)
    : ''
}

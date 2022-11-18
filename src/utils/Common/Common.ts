import { navIconSet } from 'assets/Svg/NavIconSet'
import { navTabMenuIconSet } from 'assets/Svg/MainImageIconSet'
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

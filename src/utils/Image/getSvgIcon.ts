import { navIconSet } from 'assets/svg/NavIconSet'

export const getSvgJSXElement = (
  iconName: string,
  size: string,
  color?: string,
) => {
  return navIconSet[iconName] !== undefined
    ? navIconSet[iconName].icon(size, size, color)
    : ''
}

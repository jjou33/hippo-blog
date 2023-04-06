import { navigationIcon } from 'assets/svg/navigationIcon'

export const getSvgJSXElement = (
  iconName: string,
  size: string,
  color?: string,
) => {
  return navigationIcon[iconName] !== undefined
    ? navigationIcon[iconName].icon(size, size, color)
    : ''
}

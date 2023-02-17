export interface IconPropsType {
  [key: string]: {
    icon: (width: string, height: string, color?: string) => ReactNode
  }
}

import { ReactNode } from 'react'

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

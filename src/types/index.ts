import { ReactNode } from 'react'

export interface IconPropsType {
  navIconSet: {
    [key: string]: {
      [key: string]: (
        width: string,
        height: string,
        color?: string,
      ) => ReactNode
    }
  }
}

export interface HeaderPropsType {
  backgroundImg: string
}

import { ReactNode } from 'react'

export interface IndexSignatureType {
  stringAndNumber: {
    [key: string]: number
  }
  numberAndString: {
    [key: number]: string
  }
  stringAndString: {
    [key: string]: string
  }
  numberAndNumber: {
    [key: number]: number
  }
}

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

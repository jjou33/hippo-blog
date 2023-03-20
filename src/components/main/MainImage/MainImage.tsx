import * as S from './styles'

import React from 'react'

import type { ImagePathPropsType } from 'types/image/index'

const MainImage = ({ imagePath }: ImagePathPropsType) => {
  return (
    <>
      <S.MainImage src={imagePath.mainImage24} />
    </>
  )
}

export default MainImage

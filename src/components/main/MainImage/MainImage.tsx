import React from 'react'
import * as S from './styles'

const MainImage = ({ imagePath }) => {
  return (
    <>
      <S.MainImage src={imagePath.mainImage24} />
    </>
  )
}

export default MainImage

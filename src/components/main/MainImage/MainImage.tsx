import React from 'react'
import * as S from './styles'

const MainImage = ({ imagePath }) => {
  return (
    <>
      {/* <S.MainImage src="/static/gifs/mainImage2.gif" /> */}
      <S.MainImage src={imagePath.mainImage23} />
    </>
  )
}

export default MainImage

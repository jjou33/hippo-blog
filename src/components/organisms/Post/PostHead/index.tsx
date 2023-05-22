import React from 'react'
import * as S from './styles'
import PostHeadText from 'components/molecules/PostHeadText'
import WaveImageAnimation from 'components/molecules/WaveAnimation'
import { IGatsbyImageData } from 'gatsby-plugin-image'

interface PostHeadProps {
  title: string
  date: string
  categories: string[]
  thumbnail: IGatsbyImageData
  imagePath: string
}

const PostHead = ({
  title,
  date,
  categories,
  thumbnail,
  imagePath,
}: PostHeadProps) => {
  return (
    <S.PostHeadWrapper>
      <S.BackgroundImage image={thumbnail} alt="thumbnail" />
      <PostHeadText title={title} date={date} categories={categories} />
    </S.PostHeadWrapper>
  )
}

export default PostHead

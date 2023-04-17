import React from 'react'
import * as S from './styles'

import PostHeadInfo, { PostHeadInfoProps } from './PostHeadInfo'
import WaveImageAnimation from 'components/common/Animations/WaveAnimation/WaveImageAnimation'
import { IGatsbyImageData } from 'gatsby-plugin-image'
import { getImagePathSetList } from 'utils/imageBridge'

interface PostHeadProps extends PostHeadInfoProps {
  thumbnail: IGatsbyImageData
}

const PostHead = ({
  title,
  date,
  categories,
  thumbnail,
  allFile,
}: PostHeadProps) => {
  const imagePath = getImagePathSetList(allFile.edges)
  return (
    <S.PostHeadWrapper>
      <S.BackgroundImage image={thumbnail} alt="thumbnail" />
      <PostHeadInfo
        allFile={allFile}
        title={title}
        date={date}
        categories={categories}
      />
      <S.AnimationWrapper>
        <WaveImageAnimation imagePath={imagePath} />
      </S.AnimationWrapper>
    </S.PostHeadWrapper>
  )
}

export default PostHead

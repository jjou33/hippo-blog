import React, { useEffect, useState } from 'react'
import * as S from './styles'
import { PostFrontmatterType } from 'types/post'
import { useInView } from 'react-intersection-observer'

import ThumnailImage from 'components/atom/ThumnailImage'
import Badge from 'components/atom/Badges'
import CardText from 'components/atom/CardText'
interface PostItemProps extends PostFrontmatterType {
  link: string
  type: string
}

const PostCategoryItem = ({
  title,
  date,
  categories,
  summary,

  thumbnail: {
    childImageSharp: { gatsbyImageData },
  },
  link,
  type,
}: PostItemProps) => {
  const [inViewState, setInviewState] = useState(false)
  const { inView } = useInView({
    threshold: 0,
  })

  useEffect(() => {
    if (!inViewState && inView) {
      setInviewState(true)
    }
  })
  return (
    <S.PostItemWrapper to={link} type={type}>
      <S.PostItemContent>
        <CardText text={title} fontSize={18} fontWeight={800} mediasize={15} />

        <CardText text={date} fontSize={14} fontWeight={400} />

        <S.Category>
          {categories.map(category => (
            <Badge text={category} font={`${15}`} fontWeight={700} />
          ))}
        </S.Category>
        <CardText text={summary} fontSize={16} opacity={0.8} />
      </S.PostItemContent>
      <S.ThumbnailWrapper>
        <ThumnailImage
          image={gatsbyImageData}
          width={190}
          height={190}
          radius="20px"
          mediasize={100}
        />
      </S.ThumbnailWrapper>
    </S.PostItemWrapper>
  )
}

export default PostCategoryItem

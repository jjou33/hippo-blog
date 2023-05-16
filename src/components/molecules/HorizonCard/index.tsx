import React, { useEffect, useState } from 'react'
import * as S from './styles'
import { PostFrontmatterType } from 'types/post'
import { useInView } from 'react-intersection-observer'

import ThumnailImage from 'components/atom/ThumnailImage'
import Badge from 'components/atom/Badges'
import CardText from 'components/atom/CardText'
interface HorizonCardPropsType extends PostFrontmatterType {
  width: number
  height: number
  radius: string
  mediaSize: number
  link: string
  fontSize: number
  textMediaSize: number
  type: string
}

const HorizonCard = ({
  width,
  height,
  radius,
  mediaSize,
  fontSize,
  textMediaSize,
  title,
  date,
  categories,
  summary,
  thumbnail: {
    childImageSharp: { gatsbyImageData },
  },
  link,
  type,
}: HorizonCardPropsType) => {
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
    <S.HorizonCardWrapper to={link} type={type}>
      <S.HorizonCardContent>
        <CardText
          text={title}
          fontSize={fontSize}
          fontWeight={800}
          mediaSize={textMediaSize}
        />

        <CardText text={date} fontSize={fontSize - 6} fontWeight={400} />

        <S.Category>
          {categories.map(category => (
            <Badge text={category} font={`${fontSize - 5}`} fontWeight={700} />
          ))}
        </S.Category>
        <CardText text={summary} fontSize={fontSize - 4} opacity={0.8} />
      </S.HorizonCardContent>
      <S.ThumbnailWrapper>
        <ThumnailImage
          image={gatsbyImageData}
          width={width}
          height={height}
          radius={radius}
          mediaSize={mediaSize}
        />
      </S.ThumbnailWrapper>
    </S.HorizonCardWrapper>
  )
}

export default HorizonCard

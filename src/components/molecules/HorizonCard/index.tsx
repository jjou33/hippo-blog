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
  mediasize: number
  link: string
  fontSize: number
  textmediasize: number
  type: string
}

const HorizonCard = ({
  width,
  height,
  radius,
  mediasize,
  fontSize,
  textmediasize,
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
          mediasize={textmediasize}
        />

        <CardText text={date} fontSize={fontSize - 6} fontWeight={400} />

        <S.Category>
          {categories.map((category, index) => (
            <Badge
              text={category}
              fontSize={fontSize - 5}
              fontWeight={700}
              key={index}
            />
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
          mediasize={mediasize}
        />
      </S.ThumbnailWrapper>
    </S.HorizonCardWrapper>
  )
}

export default HorizonCard

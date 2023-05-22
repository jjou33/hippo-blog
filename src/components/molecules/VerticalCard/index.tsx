import React from 'react'
import * as S from './styles'

import ThumnailImage from 'components/atom/ThumnailImage'
import Badge from 'components/atom/Badges'
import CardText from 'components/atom/CardText'

import { useInView } from 'react-intersection-observer'
import { useEffect, useState } from 'react'
import { PostFrontmatterType } from 'types/post'
interface VerticalCardPropsType extends PostFrontmatterType {
  width: number
  height: number
  radius: string
  mediasize: number
  link: string
  fontSize: number
  textmediasize: number
  inViewAnimation?: boolean
}

const VerticalCard = ({
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
  inViewAnimation,
}: VerticalCardPropsType) => {
  const [inViewState, setInViewState] = useState(
    inViewAnimation ? inViewAnimation : false,
  )
  const { ref, inView } = useInView({
    threshold: 0,
  })

  useEffect(() => {
    if (!inViewState && inView) {
      setInViewState(true)
    }
  }, [inView])

  return (
    <S.VerticalCardContainer ref={ref} inview={inViewState}>
      <S.VerticalCardWrapper to={link}>
        <ThumnailImage
          image={gatsbyImageData}
          width={width}
          height={height}
          radius={radius}
          mediasize={mediasize}
        />
        <S.PostItemContent>
          <CardText
            text={title}
            fontSize={fontSize}
            fontWeight={800}
            mediasize={textmediasize}
          />
          <CardText text={date} fontSize={fontSize - 3} fontWeight={400} />
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
        </S.PostItemContent>
      </S.VerticalCardWrapper>
    </S.VerticalCardContainer>
  )
}

export default VerticalCard

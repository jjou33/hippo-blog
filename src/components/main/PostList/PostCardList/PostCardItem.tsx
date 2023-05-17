import React, { useEffect, useState } from 'react'
import * as S from './styles'

import ThumnailImage from 'components/atom/ThumnailImage'
import Badge from 'components/atom/Badges'
import CardText from 'components/atom/CardText'
import VerticalCard from 'components/molecules/VerticalCard'
import { useInView } from 'react-intersection-observer'
import { PostFrontmatterType } from 'types/post'

interface PostItemProps extends PostFrontmatterType {
  width: number
  height: number
  radius: string
  mediasize: string
  link: string
}

const PostItem = ({
  title,
  date,
  categories,
  summary,
  thumbnail: {
    childImageSharp: { gatsbyImageData },
  },
  link,
}: PostItemProps) => {
  const [inViewState, setInViewState] = useState(false)
  const { ref, inView } = useInView({
    threshold: 0,
  })

  useEffect(() => {
    if (!inViewState && inView) {
      setInViewState(true)
    }
  }, [inView])

  return (
    <S.PostItemContainer ref={ref} inview={inViewState}>
      <S.PostItemWrapper to={link}>
        {/* <VerticalCard
          image={gatsbyImageData}
          width={100}
          height={250}
          radius="10px 10px 0 0"
          mediasize={200}
          title={title}
          date={date}
          categories={categories}
          summary={summary}
          fontSize={20}
          textmediasize={15}
        /> */}
      </S.PostItemWrapper>
    </S.PostItemContainer>
  )
}

export default PostItem

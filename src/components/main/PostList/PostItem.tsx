import React, { useEffect, useState } from 'react'

import { useInView } from 'react-intersection-observer'
import { PostFrontmatterType } from 'types/PostItem.types'

import * as S from './styles'
type PostItemProps = PostFrontmatterType & {
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
  const { ref, inView, entry } = useInView({
    /* Optional options */
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
        <S.ThumbnailImage image={gatsbyImageData} alt="Post Item Image" />

        <S.PostItemContent>
          <S.Title>{title}</S.Title>
          <S.Date>{date}</S.Date>
          <S.Category>
            {categories.map(category => (
              <S.CategoryItem key={category}>{category}</S.CategoryItem>
            ))}
          </S.Category>
          <S.Summary>{summary}</S.Summary>
        </S.PostItemContent>
      </S.PostItemWrapper>
    </S.PostItemContainer>
  )
}

export default PostItem
import React, { useEffect, useState } from 'react'

import Badge from 'components/common/Badges/Badge'
import { useInView } from 'react-intersection-observer'
import { PostFrontmatterType } from 'types/postItem'

import * as S from './styles'

interface PostItemProps extends PostFrontmatterType {
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
        <S.PostItemBadgeWrapper>
          <Badge
            color="black"
            height="40"
            borderStyle="none"
            font="20px"
            backgroundColor="#affcfa"
          >
            {title}
          </Badge>
        </S.PostItemBadgeWrapper>
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

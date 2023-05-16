import React, { useEffect, useState } from 'react'

import VerticalCard from 'components/molecules/VerticalCard'
import { getSvgJSXElement } from 'utils/imageBridge'
import { useInView } from 'react-intersection-observer'
import { PostFrontmatterType } from 'types/post'

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
  const { ref, inView } = useInView({
    threshold: 0,
  })

  useEffect(() => {
    if (!inViewState && inView) {
      setInViewState(true)
    }
  }, [inView])

  return (
    <S.PostItemContainer ref={ref}>
      <S.PostSeqenceWrapper type="first">
        {getSvgJSXElement('firstCalander', '55')}
      </S.PostSeqenceWrapper>
      <S.PostItemWrapper to={link}>
        <S.ThumbnailImage image={gatsbyImageData} alt="Post Item Image" />
        <S.PostItemContent>
          <S.Title>{title}</S.Title>
          <S.Date>{date}</S.Date>
          <S.Category>
            {categories.map(category => (
              <S.CategoryItem key={category}>
                {category.toUpperCase()}
              </S.CategoryItem>
            ))}
          </S.Category>
          <S.Summary>{summary}</S.Summary>
        </S.PostItemContent>
      </S.PostItemWrapper>
    </S.PostItemContainer>
  )
}

export default PostItem

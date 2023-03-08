import React, { useEffect, useState } from 'react'
import * as S from './styles'
import { PostFrontmatterType } from 'types/postItem'
import { InView, useInView } from 'react-intersection-observer'
interface PostItemProps extends PostFrontmatterType {
  link: string
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
}: PostItemProps) => {
  const [inViewState, setInviewState] = useState(false)
  const { ref, inView, entry } = useInView({
    threshold: 0,
  })

  useEffect(() => {
    if (!inViewState && inView) {
      setInviewState(true)
    }
  })
  return (
    <S.PoistItemContainer>
      <S.PostItemWrapper to={link}>
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
        <S.ThumbnailWrapper>
          <S.ThumbnailImage image={gatsbyImageData} alt="Post Item Image" />
        </S.ThumbnailWrapper>
      </S.PostItemWrapper>
    </S.PoistItemContainer>
  )
}

export default PostCategoryItem

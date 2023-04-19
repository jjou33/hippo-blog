import React, { useEffect, useState } from 'react'
import * as S from './styles'
import { PostFrontmatterType } from 'types/post'
import { useInView } from 'react-intersection-observer'
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
      <S.ThumbnailWrapper>
        <S.ThumbnailImage
          type={type}
          image={gatsbyImageData}
          alt="Post Item Image"
        />
      </S.ThumbnailWrapper>
    </S.PostItemWrapper>
  )
}

export default PostCategoryItem

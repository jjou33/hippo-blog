import { useEffect, useState } from 'react'

import { PostFrontmatterType } from 'types/postItem'
import { InView, useInView } from 'react-intersection-observer'
interface PostItemProps extends PostFrontmatterType {
  link: string
}

import * as S from './styles'
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
  return <></>
}

export default PostCategoryItem

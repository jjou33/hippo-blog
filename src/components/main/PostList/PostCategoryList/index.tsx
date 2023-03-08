import * as S from './styles'
import { useState } from 'react'
import Modal from 'components/common/Modal/Modal'
import PostCategoryItem from './PostCategoryItem'
import { PostListItemType, PostFrontmatterType } from 'types/postItem'
import PostCategoryHeader from './PostCategoryHeader'

import { menuOpenState } from 'states/menuOpenState'
import { useSetRecoilState, useRecoilValue } from 'recoil'
import { useEffect } from 'react'
import { useCategoryMetadata } from 'hooks/useCategoryMetadata'
import useInfiniteScroll, {
  useInfiniteScrollType,
} from 'hooks/useInfiniteScroll'
const PostCategory = ({ selectedCategory, posts, imagePath }) => {
  const limit = 6
  const [page, setPage] = useState(1)
  const offset = (page - 1) * limit
  const [category, setCategory] = useState('')
  const setState = useSetRecoilState(menuOpenState)
  const state = useRecoilValue<{ [key: string]: boolean }>(menuOpenState)
  const { categoryCount, data } = useCategoryMetadata()

  const { containerRef, postList }: useInfiniteScrollType = useInfiniteScroll(
    selectedCategory,
    posts,
  )

  useEffect(() => {
    setState(false)
  }, [])
  return (
    <S.PostCategoryContainer>
      <PostCategoryHeader
        selectedCategory={selectedCategory}
        categoryCount={categoryCount[selectedCategory]}
      />
      <S.PostCateListWrapper ref={containerRef}>
        {postList.slice(offset, offset + limit).map(
          ({
            node: {
              id,
              fields: { slug },
              frontmatter,
            },
          }: PostListItemType) => (
            <PostCategoryItem {...frontmatter} link={slug} key={id} />
          ),
        )}
      </S.PostCateListWrapper>
    </S.PostCategoryContainer>
  )
}

export default PostCategory

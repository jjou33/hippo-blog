import * as S from './styles'
import { useState, useEffect } from 'react'
import { PostListItemType } from 'types/post'
import { menuOpenState } from 'states/menuOpenState'
import { useSetRecoilState } from 'recoil'
import { useCategoryMetadata } from 'hooks/useCategoryMetadata'
import Pagination from '../PageNation'

import MainSectionHeader from 'components/molecules/MainSectionHeader'
import PostCategoryItem from './PostCategoryItem'

import useInfiniteScroll, {
  useInfiniteScrollType,
} from 'hooks/useInfiniteScroll'

interface PostCategoryPropsType {
  selectedCategory: string
}

interface NodeFormatterType {
  node: {
    frontmatter: {
      domain: string
    }
  }
}
const PostCategory = ({ selectedCategory }: PostCategoryPropsType) => {
  const limit = 10
  const [page, setPage] = useState(1)
  const offset = (page - 1) * limit
  const setState = useSetRecoilState(menuOpenState)
  const {
    categoryCount,
    data: {
      allMarkdownRemark: { edges },
    },
  } = useCategoryMetadata()

  const { containerRef, postList }: useInfiniteScrollType = useInfiniteScroll(
    selectedCategory,
    edges,
  )

  const setCategoryFormat = (
    selectedCategory: string,
    {
      node: {
        frontmatter: { domain },
      },
    }: NodeFormatterType,
  ) => {
    return `${domain}/${selectedCategory}`.toUpperCase()
  }

  const categoryHeader = setCategoryFormat(selectedCategory, postList[0])

  useEffect(() => {
    setState(false)
  }, [])

  return (
    <S.PostCategoryContainer>
      <MainSectionHeader
        selectedCategory={
          selectedCategory === 'All' ? 'ALL POST' : categoryHeader
        }
        fontSize={50}
        categoryCount={categoryCount[selectedCategory]}
      />
      <S.PostCateListWrapper ref={containerRef}>
        {postList.slice(offset, offset + limit).map(
          (
            {
              node: {
                id,
                fields: { slug },
                frontmatter,
              },
            }: PostListItemType,
            index,
          ) => (
            <S.PostItemContainer key={index}>
              <PostCategoryItem
                type={'category'}
                {...frontmatter}
                link={slug}
                key={id}
              />
            </S.PostItemContainer>
          ),
        )}
      </S.PostCateListWrapper>
      <Pagination
        total={postList.length}
        limit={limit}
        page={page}
        setPage={setPage}
      />
    </S.PostCategoryContainer>
  )
}

export default PostCategory

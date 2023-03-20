import React from 'react'
import * as S from './styles'
import { useState, useEffect } from 'react'
import { PostListItemType } from 'types/postItem'
import { menuOpenState } from 'states/menuOpenState'
import { useSetRecoilState } from 'recoil'
import { useCategoryMetadata } from 'hooks/useCategoryMetadata'

import PostCategoryHeader from 'components/main/PostList/PostCategoryHeader'
import PostCategoryItem from './PostCategoryItem'
import PostCardList from 'components/main/PostList/PostCardList'
import useInfiniteScroll, {
  useInfiniteScrollType,
} from 'hooks/useInfiniteScroll'

interface PostCategoryPropsType {
  selectedCategory: string
  posts: PostListItemType[]
  currentOsEnv: string
}

interface NodeFormatterType {
  node: {
    frontmatter: {
      domain: string
    }
  }
}
const PostCategory = ({
  selectedCategory,
  posts,
  currentOsEnv,
}: PostCategoryPropsType) => {
  const limit = 6
  const [page, setPage] = useState(1)
  const offset = (page - 1) * limit
  const setState = useSetRecoilState(menuOpenState)
  const { categoryCount } = useCategoryMetadata()

  console.log('postList : ', currentOsEnv)
  const { containerRef, postList }: useInfiniteScrollType = useInfiniteScroll(
    selectedCategory,
    posts,
  )
  console.log('postList : ', postList)

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
      <PostCategoryHeader
        selectedCategory={categoryHeader}
        fontSize={50}
        categoryCount={categoryCount[selectedCategory]}
      />
      {currentOsEnv === 'web' ? (
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
                <PostCategoryItem {...frontmatter} link={slug} key={id} />
              </S.PostItemContainer>
            ),
          )}
        </S.PostCateListWrapper>
      ) : (
        <></>
        // <PostCardList selectedCategory={selectedCategory} posts={postList} />
      )}
    </S.PostCategoryContainer>
  )
}

export default PostCategory

import * as S from './styles'
import { useState, useEffect } from 'react'
import { PostListItemType } from 'types/post'
import { menuOpenState } from 'states/menuOpenState'
import { useSetRecoilState } from 'recoil'
import { useCategoryMetadata } from 'hooks/useCategoryMetadata'
import PageNation from 'components/molecules/PageNation'
import HorizonCard from 'components/molecules/HorizonCard'
import SectionHeader from 'components/molecules/SectionHeader'

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
const PostList = ({ selectedCategory }: PostCategoryPropsType) => {
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
      <SectionHeader
        selectedCategory={
          selectedCategory === 'All' ? 'ALL POST' : categoryHeader
        }
        fontSize={50}
        categoryCount={categoryCount[selectedCategory]}
        iconName="hambergerMenu"
        iconSize={60}
        iconmediasize={35}
        mediasize={25}
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
              <HorizonCard
                {...frontmatter}
                width={190}
                height={190}
                radius="20px"
                mediasize={100}
                fontSize={20}
                textmediasize={15}
                link={slug}
                key={id}
                type={'category'}
              />
            </S.PostItemContainer>
          ),
        )}
      </S.PostCateListWrapper>
      <PageNation
        total={postList.length}
        limit={limit}
        page={page}
        setPage={setPage}
      />
    </S.PostCategoryContainer>
  )
}

export default PostList

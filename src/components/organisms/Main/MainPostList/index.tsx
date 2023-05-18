import * as S from './styles'

import VerticalCard from 'components/molecules/VerticalCard'
import SectionHeader from 'components/molecules/SectionHeader'
import Button from 'components/atom/Button'
import { Link } from 'gatsby'

import { useState } from 'react'
import { PostListItemType } from 'types/post'

import useInfiniteScroll, {
  useInfiniteScrollType,
} from 'hooks/useInfiniteScroll'

interface PostCardListPropsType {
  selectedCategory: string
  posts: PostListItemType[]
}
const AllPostList = ({ selectedCategory, posts }: PostCardListPropsType) => {
  const limit = 6
  const [page] = useState(1)
  const offset = (page - 1) * limit

  const { containerRef, postList }: useInfiniteScrollType = useInfiniteScroll(
    selectedCategory,
    posts,
  )

  return (
    <S.AllPostListContainer>
      <SectionHeader
        selectedCategory="ALL POSTS 🐳"
        fontSize={50}
        iconName="hambergerMenu"
        iconSize={60}
        iconmediasize={35}
        mediasize={25}
      />
      <S.AllPostListWrapper ref={containerRef}>
        {postList.slice(offset, offset + limit).map(
          ({
            node: {
              id,
              fields: { slug },
              frontmatter,
            },
          }: PostListItemType) => (
            <VerticalCard
              {...frontmatter}
              width={100}
              height={250}
              radius="10px 10px 0 0"
              mediasize={200}
              fontSize={20}
              textmediasize={15}
              link={slug}
              key={id}
            />
          ),
        )}
      </S.AllPostListWrapper>

      <Link to="/postList/">
        <Button
          width={150}
          height={50}
          borderStyle="1px solid"
          radius={50}
          fontWeight={800}
          fontSize={20}
        >
          더 보기
        </Button>
      </Link>
    </S.AllPostListContainer>
  )
}

export default AllPostList

import * as S from './styles'

import PostCardItem from './PostCardItem'

import SectionHeader from 'components/molecules/SectionHeader'
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
const PostCardList = ({ selectedCategory, posts }: PostCardListPropsType) => {
  const limit = 6
  const [page] = useState(1)
  const offset = (page - 1) * limit

  const { containerRef, postList }: useInfiniteScrollType = useInfiniteScroll(
    selectedCategory,
    posts,
  )

  return (
    <S.PostCardListContainer>
      <SectionHeader
        selectedCategory="ALL POSTS 🐳"
        fontSize={50}
        iconName="hambergerMenu"
        iconSize={60}
        iconMediaSize={35}
        mediaSize={25}
      />
      <S.PostListWrapper ref={containerRef}>
        {postList.slice(offset, offset + limit).map(
          ({
            node: {
              id,
              fields: { slug },
              frontmatter,
            },
          }: PostListItemType) => (
            <PostCardItem {...frontmatter} link={slug} key={id} />
          ),
        )}
      </S.PostListWrapper>

      <Link to="/AllPost">
        <S.Button>더 보기</S.Button>
      </Link>
    </S.PostCardListContainer>
  )
}

export default PostCardList

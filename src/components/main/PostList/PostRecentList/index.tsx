import FirstPostItem from './FirstPostItem'
import PostCategoryItem from 'components/main/PostList/PostCategoryList/PostCategoryItem'
import RecentPostHeader from 'components/main/PostList/PostCategoryHeader'
import { PostListItemType } from 'types/postItem'
import * as S from './styles'

interface RecentPostPropsType {
  posts: PostListItemType[]
}
const RecentPosts = ({ posts }: RecentPostPropsType) => {
  const {
    node: {
      id,
      fields: { slug },
      frontmatter,
    },
  } = posts[0]

  return (
    <S.RecentPostContainer>
      <RecentPostHeader selectedCategory="최신 포스트" fontSize={50} />
      <S.RecentPostsWrapper>
        <S.FirstPostWrapper>
          <FirstPostItem {...frontmatter} link={slug} key={id} />
        </S.FirstPostWrapper>
        <S.OtherPostWrapper>
          {posts.map(
            (
              {
                node: {
                  id,
                  fields: { slug },
                  frontmatter,
                },
              }: PostListItemType,
              index,
            ) => {
              if (index > 0 && index < 4) {
                return (
                  <S.OtherItemContainer key={index}>
                    <PostCategoryItem {...frontmatter} link={slug} key={id} />
                  </S.OtherItemContainer>
                )
              } else {
                return ''
              }
            },
          )}
        </S.OtherPostWrapper>
      </S.RecentPostsWrapper>
    </S.RecentPostContainer>
  )
}

export default RecentPosts

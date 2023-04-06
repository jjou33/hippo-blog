import * as S from './styles'

import FirstPostItem from './FirstPostItem'
import PostCategoryItem from 'components/main/PostList/PostCategoryList/PostCategoryItem'
import RecentPostHeader from 'components/main/PostList/PostCategoryHeader'
import { useCategoryMetadata } from 'hooks/useCategoryMetadata'
import { navIconSet } from 'assets/svg/NavIconSet'
import { PostListItemType } from 'types/postItem'

interface RecentPostPropsType {
  posts: PostListItemType[]
  widePost: PostListItemType[]
}

const RecentPosts = ({ posts, widePost }: RecentPostPropsType) => {
  const {
    node: {
      id,
      fields: { slug },
      frontmatter,
    },
  } = posts[0]

  return (
    <S.RecentPostContainer>
      <RecentPostHeader selectedCategory="최신 포스트 🎃" fontSize={60} />
      <S.RecentPostsWrapper>
        <S.FirstPostWrapper>
          <FirstPostItem
            {...widePost[0].node.frontmatter}
            link={widePost[0].node.fields.slug}
            key={widePost[0].node.id}
          />
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
              console.log('index : ', index)
              console.log({ ...frontmatter })

              if (index > 0 && index < 4) {
                return (
                  <S.OtherItemContainer key={index}>
                    <S.PostSeqenceWrapper type="second">
                      {navIconSet[`${index}`].icon('30', '30')}
                    </S.PostSeqenceWrapper>
                    <PostCategoryItem
                      {...frontmatter}
                      link={slug}
                      key={id}
                      type="main"
                    />
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

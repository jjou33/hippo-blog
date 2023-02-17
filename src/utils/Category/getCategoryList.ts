import { CategoryListProps } from 'types/category'
import { PostType } from 'components/main/PostList/PostList'
import { CategortListType } from 'types/postItem'

export const getCategoryList = (allMarkdownRemark: CategortListType) => {
  return allMarkdownRemark.edges.reduce(
    (
      list: CategoryListProps['categoryList'],
      {
        node: {
          frontmatter: { domain, sideTitle },
        },
      }: PostType,
    ) => {
      if (list[domain] === undefined) {
        list[domain] = {
          title: domain,
          children: [sideTitle],
          childrenCount: 1,
        }
      } else {
        if (list[domain]['children'] !== undefined) {
          list[domain]['children'].push(sideTitle)
          list[domain]['childrenCount'] += 1
        }
      }
      return list
    },
    {},
  )
}

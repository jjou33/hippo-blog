import type { CategoryListProps } from 'types/category'
import type { PostListItemType } from 'types/post'

export const getCategoryList = (allMarkdownRemark: {
  edges: PostListItemType[]
}) => {
  return allMarkdownRemark.edges.reduce(
    (
      list: CategoryListProps['categoryList'],
      {
        node: {
          frontmatter: { domain, sideTitle },
        },
      }: PostListItemType,
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

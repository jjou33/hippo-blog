import queryString, { ParsedQuery } from 'query-string'

import type { CategoryListProps } from 'types/catgegory'
import type { PostListItemType } from 'types/post'

export const getSelectedCategory = (search: string): string => {
  const parsed: ParsedQuery<string> = queryString.parse(search)

  const selectedCategory: string =
    typeof parsed.category !== 'string' || !parsed.category
      ? 'All'
      : parsed.category

  return selectedCategory
}

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
        if (
          list[domain]['children'] !== undefined &&
          !list[domain]['children'].includes(sideTitle)
        ) {
          list[domain]['children'].push(sideTitle)
          list[domain]['childrenCount'] += 1
        }
      }

      return list
    },
    {},
  )
}

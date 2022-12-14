import queryString, { ParsedQuery } from 'query-string'
import { CategoryListProps } from 'types/Category.types'
import { PostType } from 'components/Main/PostList'
import { CategortListType } from 'types/PostItem.types'

export const getSelectedCategory = (search: string): string => {
  const parsed: ParsedQuery<string> = queryString.parse(search)

  const selectedCategory: string =
    typeof parsed.category !== 'string' || !parsed.category
      ? 'All'
      : parsed.category

  return selectedCategory
}

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

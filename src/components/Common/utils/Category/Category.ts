import queryString, { ParsedQuery } from 'query-string'
import { CategoryListProps } from 'components/Navigation/Category/CategoryList'
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
        }
      } else {
        if (list[domain]['children'] !== undefined) {
          list[domain]['children'].push(sideTitle)
        }
      }
      return list
    },
    {},
  )
}

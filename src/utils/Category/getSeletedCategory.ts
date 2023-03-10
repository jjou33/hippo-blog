import queryString, { ParsedQuery } from 'query-string'

export const getSelectedCategory = (search: string): string => {
  const parsed: ParsedQuery<string> = queryString.parse(search)

  const selectedCategory: string =
    typeof parsed.category !== 'string' || !parsed.category
      ? 'root'
      : parsed.category === 'All'
      ? 'All'
      : parsed.category

  return selectedCategory
}

import CategoryList from 'components/Navigation/Category/CategoryList'
import { useMemo } from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { useCategoryMetadata } from 'hooks/useCategoryMetadata'

export const useCategoryCount = sideTitleList => {
  const categoryItemCount = useMemo(
    () =>
      data.allMarkdownRemark.edges.reduce(
        (
          list: any,
          {
            node: {
              frontmatter: { categories },
            },
          },
        ) => {
          console.log('CategoryList : ', CategoryList)
          // categories.forEach(category => {
          //   if (list[sideTitle] === undefined) list[sideTitle] = 1
          //   else if (category === sideTitle) {
          //     console.log('hh')
          //     list[sideTitle]++
          //   }
          // })
          list['All']++
          return list
        },
        { All: 0 },
      ),
    [],
  )

  return categoryItemCount
}

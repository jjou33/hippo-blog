import { useMemo } from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { useCategoryMetadataType, CategoryTypes } from 'types/Category.types'

export const useCategoryMetadata = () => {
  const data: useCategoryMetadataType = useStaticQuery(
    graphql`
      query getCategoryList {
        allMarkdownRemark(
          sort: {
            order: ASC
            fields: [frontmatter___domain, frontmatter___sideTitle]
          }
        ) {
          edges {
            node {
              id
              fields {
                slug
              }
              frontmatter {
                title
                summary
                date(formatString: "YYYY.MM.DD.")
                categories
                index
                domain
                sideTitle
                thumbnail {
                  childImageSharp {
                    gatsbyImageData(width: 768, height: 400)
                  }
                }
                categoryIcon {
                  childImageSharp {
                    gatsbyImageData(width: 10, height: 10)
                  }
                }
              }
            }
          }
        }
        allFile(
          filter: {
            extension: { regex: "/(jpg)|(png)|(svg)|(gltf)|(bin)/" }
            sourceInstanceName: { eq: "images" }
          }
        ) {
          edges {
            node {
              extension
              sourceInstanceName
              id
              publicURL
            }
          }
        }
      }
    `,
  )

  const categoryCount = useMemo(
    () =>
      data.allMarkdownRemark.edges.reduce(
        (
          list: CategoryTypes,
          {
            node: {
              frontmatter: { sideTitle },
            },
          },
        ) => {
          data.allMarkdownRemark.edges.forEach(
            ({
              node: {
                frontmatter: { categories },
              },
            }) => {
              if (categories.includes(sideTitle)) {
                if (list[sideTitle] === undefined) {
                  list[sideTitle] = 1
                } else {
                  list[sideTitle]++
                }
              }
            },
          )
          list['All']++
          return list
        },
        { All: 0 },
      ),
    [],
  )

  return { data, categoryCount }
}

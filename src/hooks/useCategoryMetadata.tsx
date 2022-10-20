import { useStaticQuery, graphql } from 'gatsby'
import { useCategoryMetadataType } from 'types/Category.types'
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

  return data
}

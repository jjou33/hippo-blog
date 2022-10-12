import { useStaticQuery, graphql } from 'gatsby'
import { useCategoryMetadataType } from 'types/Category.types'
export const useCategoryMetadata = () => {
  const data: useCategoryMetadataType = useStaticQuery(
    graphql`
      query getCategoryList {
        allMarkdownRemark(
          sort: { order: ASC, fields: [frontmatter___domain] }
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
        file(relativePath: { eq: "profile-image.svg" }) {
          publicURL
        }
      }
    `,
  )
  return data
}

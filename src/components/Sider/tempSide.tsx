import { useStaticQuery, graphql, StaticQueryDocument } from 'gatsby'

export const useCategoryMetadata = () => {
  const data: StaticQueryDocument = useStaticQuery(
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
      }
    `,
  )
  return data
}

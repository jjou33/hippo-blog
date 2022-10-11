//StaticQuery
import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

export default function Header() {
  return (
    <StaticQuery
      query={graphql`
        query getCategoryList2 {
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
      `}
      render={data => (
        <header>
          <h1>aweof</h1>
        </header>
      )}
    />
  )
}

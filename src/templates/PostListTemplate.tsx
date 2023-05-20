import React, { useEffect, useState } from 'react'
import Template from 'components/common/Template'
import PostList from 'components/organisms/Post/PostList'
import { getSelectedCategory } from 'utils/category'

import { graphql } from 'gatsby'

interface IndexPageProps {
  location: Location
  data: {
    site: {
      siteMetadata: {
        title: string
        description: string
        siteUrl: string
      }
    }
    allFile: {
      edges: {
        node: {
          [key: string]: string
        }
      }[]
    }
  }
}
const PostListMapper = ({
  location,
  data: {
    site: {
      siteMetadata: { title, description, siteUrl },
    },
    allFile: { edges },
  },
}: IndexPageProps) => {
  const {
    node: { publicURL },
  } = edges[0]

  const [state, setState] = useState('All')
  useEffect(() => {
    setState(getSelectedCategory(location.search))
  }, [location])
  return (
    <Template
      isPost={true}
      title={title}
      description={description}
      url={siteUrl}
      image={publicURL}
      location={location}
    >
      <PostList selectedCategory={state} />
    </Template>
  )
}

export default PostListMapper
export const PostListMetaData = graphql`
  query PostListMetaData {
    site {
      siteMetadata {
        title
        description
        siteUrl
      }
    }
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
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
                gatsbyImageData(width: 200, height: 200)
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
        publicURL: { regex: "/(superHero)/" }
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
`

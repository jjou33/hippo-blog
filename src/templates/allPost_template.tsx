import React from 'react'
import Template from 'components/layout/Template'
import PostCategoryList from 'components/main/PostList/PostCategoryList'
import { getImagePathSetList } from 'utils/imageBridge'
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
const AllPostTemplate = ({
  location,
  data: {
    site: {
      siteMetadata: { title, description, siteUrl },
    },
    allFile,
  },
}: IndexPageProps) => {
  const imagePath = getImagePathSetList(allFile.edges)
  return (
    <Template
      isPost={true}
      title={title}
      description={description}
      url={siteUrl}
      image={imagePath['profile-image']}
      location={location}
    >
      <PostCategoryList selectedCategory="All" />
    </Template>
  )
}

export default AllPostTemplate
export const PostListMetaData = graphql`
  query getMetaData {
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
                gatsbyImageData(width: 768, height: 400)
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
`

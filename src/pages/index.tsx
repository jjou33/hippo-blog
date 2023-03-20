import { useEffect, useState } from 'react'
import { getImagePathSetList } from 'utils/Image'

import { graphql } from 'gatsby'
import { PostListItemType } from 'types/postItem'
import { getSelectedCategory } from 'utils/Category'
import { getOSByUserAgent } from 'utils/device/index'
import PostCaterory from 'components/main/PostList/PostCategoryList'

import Template from 'components/layout/Template'
import MainSection from 'components/main'

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
    allMarkdownRemark: {
      edges: PostListItemType[]
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

const IndexPage = ({
  location,
  data: {
    site: {
      siteMetadata: { title, description, siteUrl },
    },
    allMarkdownRemark,
    allFile,
  },
}: IndexPageProps) => {
  const selectedCategory: string = getSelectedCategory(location.search)
  const imagePath = getImagePathSetList(allFile.edges)
  const [currentOsEnv, setCurrentOsEnv] = useState('')

  useEffect(() => {
    setCurrentOsEnv(getOSByUserAgent())
  }, [])

  return (
    <Template
      title={title}
      description={description}
      url={siteUrl}
      image={imagePath['profile-image']}
      location={location}
    >
      {selectedCategory === 'root' ? (
        <MainSection
          mainSectionProp={{
            imagePath,
            allMarkdownRemark,
            currentOsEnv,
          }}
        />
      ) : (
        <PostCaterory
          selectedCategory={selectedCategory}
          posts={allMarkdownRemark.edges}
        />
      )}
    </Template>
  )
}

export default IndexPage

export const getMetaData = graphql`
  query getMetaData {
    site {
      siteMetadata {
        title
        description
        siteUrl
      }
    }
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___domain] }) {
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
`

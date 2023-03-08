import { useMemo } from 'react'
import { getImagePathSetList } from 'utils/Image'

import { graphql } from 'gatsby'
import { PostListItemType } from 'types/postItem'
import { getSelectedCategory, getCategoryList } from 'utils/Category'

import PostCaterory from 'components/main/PostList/PostCategoryList'
import PostList from 'components/main/PostList/PostList'
import Template from 'components/layout/Template'
import SideNavSection from 'components/navigation'
import MainSection from 'components/main'

interface IndexSignatureType {
  [key: string]: number
}

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
  console.log('select : ', selectedCategory)
  return (
    <Template
      title={title}
      description={description}
      url={siteUrl}
      image={imagePath['profile-image']}
      location={location}
    >
      {/* <SideNavSection location={location} /> */}
      {selectedCategory === 'All' ? (
        <MainSection
          mainSectionProp={{
            imagePath,
            selectedCategory,
            allMarkdownRemark,
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
    allMarkdownRemark(sort: { order: ASC, fields: [frontmatter___domain] }) {
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

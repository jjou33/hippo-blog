import React, { FunctionComponent } from 'react'
import { getImagePathSetList } from 'utils/Template/Template'
import PostList from 'components/Main/PostList'
import { graphql } from 'gatsby'
import { PostListItemType } from 'types/PostItem.types'
import { getSelectedCategory } from 'utils/Category/Category'
import LandingPage from 'components/Main/LandingPage/landingPage'
import Template from 'components/layout/Template'
import styled from '@emotion/styled'

type IndexPageProps = {
  location: {
    search: string
  }
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
    file: {
      publicURL: string
    }
  }
}

const ContentsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 4;
`

const IndexPage = ({
  location: { search },
  data: {
    site: {
      siteMetadata: { title, description, siteUrl },
    },
    // allMarkdownRemark: { edges },
    file: { publicURL },
    allFile: { edges },
  },
}: IndexPageProps) => {
  const selectedCategory: string = getSelectedCategory(search)
  const imagePathList = getImagePathSetList(edges)
  return (
    <Template
      title={title}
      description={description}
      url={siteUrl}
      image={publicURL}
    >
      <LandingPage imageSet={imagePathList} />
    </Template>
  )
}

export default IndexPage

export const getPostList = graphql`
  query getPostList {
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
    file(relativePath: { eq: "profile-image.svg" }) {
      publicURL
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

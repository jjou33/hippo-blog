import React, { FunctionComponent } from 'react'
import { getImagePathSetList } from 'utils/Template/Template'
import PostList from 'components/Main/PostList'
import { graphql } from 'gatsby'
import { PostListItemType } from 'types/PostItem.types'
import { getSelectedCategory } from 'utils/Category/Category'
import Template from 'components/layout/Template'
import styled from '@emotion/styled'

interface IndexPageProps {
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
    allFile: {
      edges: {
        node: {
          [key: string]: string
        }
      }[]
    }
  }
}

const ContentsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 4;
  align-items: center;
`

const ContentsTitle = styled.h1`
  margin-top: 20px;
  font-size: 50px;
`
const IndexPage = ({
  location: { search },
  data: {
    site: {
      siteMetadata: { title, description, siteUrl },
    },
    allMarkdownRemark: { edges },
    allFile,
  },
}: IndexPageProps) => {
  const selectedCategory: string = getSelectedCategory(search)
  const imagePathList = getImagePathSetList(allFile.edges)

  return (
    <Template
      title={title}
      description={description}
      url={siteUrl}
      image={imagePathList['profile-image']}
    >
      <ContentsWrapper>
        <ContentsTitle>
          {selectedCategory === 'All' ? 'Total Post' : selectedCategory}
        </ContentsTitle>
        <PostList
          selectedCategory={selectedCategory}
          posts={edges}
          imageSet={imagePathList}
        />
      </ContentsWrapper>
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

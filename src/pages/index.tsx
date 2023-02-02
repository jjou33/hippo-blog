import React, { useMemo } from 'react'
import { getImagePathSetList } from 'utils/Template/Template'

import { graphql } from 'gatsby'
import { PostListItemType } from 'types/PostItem.types'
import { getSelectedCategory, getCategoryList } from 'utils/Category/Category'

import Template from 'components/layout/Template'

import { useScrollStateBar } from 'hooks/useScrollStateBar'
import SideNavSection from 'components/navigation'
import MainSection from 'components/main'
interface IndexSignatureType {
  [key: string]: number
}

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

const IndexPage = ({
  location: { search },
  data: {
    site: {
      siteMetadata: { title, description, siteUrl },
    },
    allMarkdownRemark,
    allFile,
  },
}: IndexPageProps) => {
  const selectedCategory: string = getSelectedCategory(search)
  const imagePath = getImagePathSetList(allFile.edges)
  const categoryList = getCategoryList(allMarkdownRemark)
  const scroll = useScrollStateBar()
  const categoryCount = useMemo(
    () =>
      allMarkdownRemark.edges.reduce(
        (
          list: IndexSignatureType,
          {
            node: {
              frontmatter: { sideTitle },
            },
          },
        ) => {
          allMarkdownRemark.edges.forEach(
            ({
              node: {
                frontmatter: { categories },
              },
            }) => {
              if (categories.includes(sideTitle)) {
                if (list[sideTitle] === undefined) {
                  list[sideTitle] = 1
                } else {
                  list[sideTitle] += 1
                }
              }
            },
          )
          list['All'] += 1
          return list
        },
        { All: 0 },
      ),
    [],
  )

  return (
    <Template
      title={title}
      description={description}
      url={siteUrl}
      image={imagePath['profile-image']}
    >
      <SideNavSection
        navigationProps={{
          selectedCategory,
          categoryList,
          imagePath,
          categoryCount,
        }}
      />
      <MainSection
        mainSectionProp={{
          scroll,
          imagePath,
          selectedCategory,
          allMarkdownRemark,
        }}
      />
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

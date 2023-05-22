import React from 'react'
import styled from '@emotion/styled'
import Template from 'components/common/Template'

import PostHead from 'components/organisms/Post/PostHead'
import PostContent from 'components/organisms/Post/PostContents'
import { getImagePathSetList } from 'utils/imageBridge'
import { themedPalette } from 'styles/themeVariables'
import { graphql } from 'gatsby'
import type { PostPageItemType } from 'types/post'

interface PostTemplateProps {
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
      edges: PostPageItemType[]
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

/**
 * PostTemplate
 */

export const PostWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 4;
  color: ${themedPalette.text1};
`

const PostTemplate = ({
  location,
  data: {
    site: { siteMetadata },
    allMarkdownRemark: { edges },
    allFile,
  },
}: PostTemplateProps) => {
  const {
    node: {
      html,
      frontmatter: {
        title,
        summary,
        date,
        categories,
        thumbnail: {
          childImageSharp: { gatsbyImageData },
          publicURL,
        },
      },
    },
  } = edges[0]
  const imagePath = getImagePathSetList(allFile.edges)

  return (
    <Template
      title={title}
      description={summary}
      url={location.href}
      image={publicURL}
      location={location}
    >
      <PostWrapper>
        <PostHead
          title={title}
          date={date}
          categories={categories}
          thumbnail={gatsbyImageData}
          imagePath={imagePath['wave']}
        />
        <PostContent html={html} />
      </PostWrapper>
    </Template>
  )
}

export default PostTemplate

export const queryMarkdownDataBySlug = graphql`
  query queryMarkdownDataBySlug($slug: String) {
    site {
      siteMetadata {
        title
        description
        siteUrl
      }
    }
    allMarkdownRemark(filter: { fields: { slug: { eq: $slug } } }) {
      edges {
        node {
          html
          frontmatter {
            title
            summary
            date(formatString: "YYYY.MM.DD.")
            categories
            domain
            sideTitle
            thumbnail {
              childImageSharp {
                gatsbyImageData(quality: 90)
              }
              publicURL
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

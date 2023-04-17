import React from 'react'
import * as S from 'components/main/Post/styles'
import Template from 'components/layout/Template'
import PostContent from 'components/main/Post/PostContent'
import PostHead from 'components/main/Post/PostHead'
import { graphql } from 'gatsby'
import type { PostPageItemType } from 'types/post'

interface PostTemplateProps {
  location: Location
  data: {
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

const PostTemplate = ({
  location,
  data: {
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

  return (
    <Template
      isPost={true}
      title={title}
      description={summary}
      url={location.href}
      image={publicURL}
      location={location}
    >
      <S.PostWrapper>
        <PostHead
          title={title}
          date={date}
          categories={categories}
          thumbnail={gatsbyImageData}
          allFile={allFile}
        />
        <PostContent html={html} />
      </S.PostWrapper>
    </Template>
  )
}

export default PostTemplate

export const queryMarkdownDataBySlug = graphql`
  query queryMarkdownDataBySlug($slug: String) {
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

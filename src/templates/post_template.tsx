import React from 'react'
import { graphql } from 'gatsby'
import { PostPageItemType } from 'types/PostItem.types' // 바로 아래에서 정의할 것입니다
import Template from 'components/layout/Template'
import PostHead from 'components/Main/Post/PostHead'
import PostContent from 'components/Main/Post/PostContent'
import CommentWidget from 'components/Main/Post/CommentWidget'
import Footer from 'components/layout/Footer'
import styled from '@emotion/styled'
interface PostTemplateProps {
  data: {
    allMarkdownRemark: {
      edges: PostPageItemType[]
    }
  }
  location: {
    href: string
    search: string
  }
}
const PostWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 4;
`
export const FooterWrapper = styled.div`
  display: grid;
  place-items: center;
  margin-top: auto;
  padding: 50px 0;
  font-size: 15px;
  text-align: center;
  line-height: 1.5;
  border: 3px;
  border-style: dashed;

  @media (max-width: 768px) {
    font-size: 13px;
  }
`
const PostTemplate = ({
  data: {
    allMarkdownRemark: { edges },
  },
  location: { href },
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
      url={href}
      image={publicURL}
    >
      <PostWrapper>
        <PostHead
          title={title}
          date={date}
          categories={categories}
          thumbnail={gatsbyImageData}
        />
        <PostContent html={html} />
        <CommentWidget />
        <Footer />
      </PostWrapper>
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
  }
`

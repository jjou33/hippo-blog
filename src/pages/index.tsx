import React, { FunctionComponent, useMemo } from 'react'
import CategoryList from 'components/Main/CategoryList'
import Introduction from 'components/Main/Introduction'
import PostList from 'components/Main/PostList'
import { graphql } from 'gatsby'
// import { IGatsbyImageData } from 'gatsby-plugin-image'
import { PostListItemType } from 'types/PostItem.types'
import queryString, { ParsedQuery } from 'query-string'
import { CategoryListProps } from 'components/Main/CategoryList'
import { PostType } from 'components/Main/PostList'
import Template from 'components/Common/Template'
import styled from '@emotion/styled'
import Footer from 'components/Common/Footer'
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
const SideWrapper = styled.div`
  flex: 0.8;
  @media (max-width: 768px) {
    display: none;
  }
`
const IndexPage: FunctionComponent<IndexPageProps> = function ({
  location: { search },
  data: {
    site: {
      siteMetadata: { title, description, siteUrl },
    },
    allMarkdownRemark: { edges },
    file: {
      // childImageSharp: { gatsbyImageData },
      publicURL,
    },
  },
}) {
  // ?category=Optimization -> {category: 'Optimization'}
  const parsed: ParsedQuery<string> = queryString.parse(search)

  const selectedCategory: string =
    typeof parsed.category !== 'string' || !parsed.category
      ? 'All'
      : parsed.category

  const categoryList = useMemo(
    () =>
      edges.reduce(
        (
          list: CategoryListProps['categoryList'],
          {
            node: {
              frontmatter: { domain, sideTitle, categoryIcon },
            },
          }: PostType,
        ) => {
          const { gatsbyImageData } = categoryIcon.childImageSharp
          if (list[domain] === undefined) {
            list[domain] = {
              title: [sideTitle],
              image: [gatsbyImageData],
            }
          } else {
            list[domain]['title'].push(sideTitle)
            list[domain]['image'].push(gatsbyImageData)
          }
          return list
        },
        {},
      ),
    [],
  )

  return (
    <Template
      title={title}
      description={description}
      url={siteUrl}
      image={publicURL}
    >
      <SideWrapper>
        <Introduction profileImage={publicURL} />
        <CategoryList
          categoryList={categoryList}
          selectedCategory={selectedCategory}
        />
      </SideWrapper>
      <ContentsWrapper>
        <PostList selectedCategory={selectedCategory} posts={edges} />
        <Footer />
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
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date, frontmatter___title] }
    ) {
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
  }
`

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

const SideContainer = styled.div`
  flex: 0.8;

  @media (max-width: 768px) {
    display: none;
  }
`

const ContentsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 4;
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
  console.log('edges : ' ,edges)
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
              frontmatter: { categories },
            },
          }: PostType,
        ) => {
          categories.forEach(category => {
            if (list[category] === undefined) list[category] = 1
            else list[category]++
          })

          list['All']++

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
      image={publicURL}
    >
      <SideContainer>
        <Introduction profileImage={publicURL} />
        <CategoryList
          selectedCategory={selectedCategory}
          categoryList={categoryList}
        />
      </SideContainer>
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
            thumbnail {
              childImageSharp {
                gatsbyImageData(width: 768, height: 400)
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

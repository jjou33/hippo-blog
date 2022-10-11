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
import { sideBarIcon } from 'components/Sider/SideNavItemList'
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
  flex: 0.6;
  box-shadow: 1px 2px 4px 0px;
  height: 100%;
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
  const script1 = document.createElement('script')
  script1.src = 'https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js'
  script1.type = 'module'
  const script2 = document.createElement('script')
  script2.src = 'https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js'
  script2.type = 'nomodule'
  document.body.appendChild(script1)
  document.body.appendChild(script2)
  const fontawesome = document.createElement('script')
  fontawesome.src = 'https://kit.fontawesome.com/8c8829426d.js'
  fontawesome.crossOrigin = 'anonymous'
  document.body.appendChild(fontawesome)
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
              frontmatter: { domain, sideTitle },
            },
          }: PostType,
        ) => {
          // console.log('domain : ', domain)
          // console.log('sideTitle : ', sideTitle)
          // const { gatsbyImageData } = categoryIcon.childImageSharp
          if (list[domain] === undefined) {
            list[domain] = {
              title: domain,
              children: [sideTitle],
            }
          } else {
            if (list[domain]['children'] !== undefined) {
              list[domain]['children'].push(sideTitle)
            }
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
          sideBarIcon={sideBarIcon}
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
  }
`

import React, { useMemo, useState, useEffect } from 'react'
import { getImagePathSetList } from 'utils/Template/Template'
import PostList from 'components/Main/PostList'
import { graphql } from 'gatsby'
import { PostListItemType } from 'types/PostItem.types'
import { getSelectedCategory, getCategoryList } from 'utils/Category/Category'
import NavigationPage from 'components/Navigation/NavigationPage'
import Template from 'components/layout/Template'
import Introduction from 'components/Navigation/Profile/Introduction'
import CategoryList from 'components/Navigation/Category/CategoryList'
import styled from '@emotion/styled'
import CategorySkeleton from 'components/Navigation/Category/CategorySkeleton'
import { useScrollStateBar } from 'hooks/useScrollStateBar'

import * as S from 'components/layout/Styles'

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
    allMarkdownRemark,
    allFile,
  },
}: IndexPageProps) => {
  const [mount, isMount] = useState(false)
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

  useEffect(() => {
    setTimeout(() => {
      isMount(true)
    }, 600)
  }, [])
  return (
    <Template
      title={title}
      description={description}
      url={siteUrl}
      image={imagePath['profile-image']}
    >
      {/* <NavigationPage
        navigationProps={{
          selectedCategory,
          categoryList,
          imagePath,
          scroll,
          categoryCount,
        }}
      >
        <ContentsWrapper>
          <ContentsTitle>
            {selectedCategory === 'All' ? 'Total Post' : selectedCategory}
          </ContentsTitle>
          <PostList
            selectedCategory={selectedCategory}
            posts={allMarkdownRemark.edges}
            imageSet={imagePath}
          />
        </ContentsWrapper>
      </NavigationPage> */}
      <S.NavigationContainer>
        <S.NavigationWrapper>
          <Introduction
            profileImage={imagePath['superHero']}
            roketImage={imagePath['rocket']}
          />
          {mount ? (
            <CategoryList
              categoryList={categoryList}
              selectedCategory={selectedCategory}
              categoryCount={categoryCount}
            />
          ) : (
            <CategorySkeleton categoryList={categoryList} />
          )}
        </S.NavigationWrapper>
      </S.NavigationContainer>
      <S.MainContainer>
        <S.ProgressBarContainer>
          <S.ProgressBar scroll={scroll} />
        </S.ProgressBarContainer>
        {/* <MainImage backgroundImg={imagePath} /> */}
        <ContentsWrapper>
          <ContentsTitle>
            {selectedCategory === 'All' ? 'Total Post' : selectedCategory}
          </ContentsTitle>
          <PostList
            selectedCategory={selectedCategory}
            posts={allMarkdownRemark.edges}
            imageSet={imagePath}
          />
        </ContentsWrapper>
      </S.MainContainer>
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

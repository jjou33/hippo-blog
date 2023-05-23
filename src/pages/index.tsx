import * as S from 'components/organisms/Main/styles'

import Template from 'components/common/Template'
import MainImage from 'components/organisms/Main/MainImage'
import AllPostList from 'components/organisms/Main/MainPostList'
import ProjectDiary from 'components/organisms/Main/ProjectDiary'
import RecommendCategory from 'components/organisms/Main/RecommendCategory'
import Introduction from 'components/organisms/Main/Introduction'
import RecentPostList from 'components/organisms/Main/RecentPostList'

import { getImagePathSetList } from 'utils/imageBridge'
import { graphql } from 'gatsby'
import { PostListItemType } from 'types/post'

interface IndexPageProps {
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

interface IndexPageProps {
  location: Location
  data: {
    site: Temp
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

interface Temp {
  siteMetadata: {
    title: string
    description: string
    siteUrl: string
  }
}

const IndexPage = ({
  location,
  data: {
    site: {
      siteMetadata: { title, description, siteUrl },
    },
    allMarkdownRemark,
    allFile,
  },
}: IndexPageProps) => {
  const imagePath = getImagePathSetList(allFile.edges)

  return (
    <Template
      title={title}
      description={description}
      url={siteUrl}
      image={imagePath['profile-image']}
      location={location}
    >
      <S.MainContainer>
        <MainImage />
        <S.ContentsWrapper>
          <Introduction />
          <RecommendCategory imagePath={imagePath} />
          <RecentPostList posts={allMarkdownRemark.edges} />
          <ProjectDiary imagePath={imagePath} />
          <AllPostList selectedCategory="All" posts={allMarkdownRemark.edges} />
        </S.ContentsWrapper>
      </S.MainContainer>
    </Template>
  )
}

export default IndexPage

export const getMetaData = graphql`
  query getMetaData {
    site {
      siteMetadata {
        title
        description
        siteUrl
      }
    }
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
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
                gatsbyImageData(width: 200, height: 200)
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

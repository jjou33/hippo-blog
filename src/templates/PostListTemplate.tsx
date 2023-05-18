import React, { useEffect, useState } from 'react'
import Template from 'components/layout/Template'
import PostList from 'components/organisms/Post/PostList'
import { getSelectedCategory } from 'utils/category'
import { getImagePathSetList } from 'utils/imageBridge'
import { graphql } from 'gatsby'

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
    allFile: {
      edges: {
        node: {
          [key: string]: string
        }
      }[]
    }
  }
}
const PostListMapper = ({
  location,
  data: {
    site: {
      siteMetadata: { title, description, siteUrl },
    },
    allFile,
  },
}: IndexPageProps) => {
  const imagePath = getImagePathSetList(allFile.edges)
  const [state, setState] = useState('All')
  useEffect(() => {
    setState(getSelectedCategory(location.search))
  }, [location])
  return (
    <Template
      isPost={true}
      title={title}
      description={description}
      url={siteUrl}
      image={imagePath['profile-image']}
      location={location}
    >
      <PostList selectedCategory={state} />
    </Template>
  )
}

export default PostListMapper
export const PostListMetaData = graphql`
  query PostListMetaData {
    site {
      siteMetadata {
        title
        description
        siteUrl
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

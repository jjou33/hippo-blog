// import Template from 'components/layout/Template'

// import { PostPageItemType } from 'types/postItem'
// import { graphql } from 'gatsby'

// interface PostListTemplateProps {
//   data: {
//     allMarkdownRemark: {
//       edges: PostPageItemType[]
//     }
//   }
//   location: Location
// }
// const PostListTemplate = ({
//   data: {
//     allMarkdownRemark: { edges },
//   },
//   location,
// }: PostListTemplateProps) => {
//   console.log('edges : ', edges)
//   return <></>
// }

// export default PostListTemplate
// export const getPostListData = graphql`
//   query getPostListData($slug: String) {
//     allMarkdownRemark(filter: { fields: { slug: { eq: $slug } } }) {
//       edges {
//         node {
//           html
//           frontmatter {
//             title
//             summary
//             date(formatString: "YYYY.MM.DD.")
//             categories
//             domain
//             sideTitle
//             thumbnail {
//               childImageSharp {
//                 gatsbyImageData(quality: 90)
//               }
//               publicURL
//             }
//           }
//         }
//       }
//     }
//   }
// `

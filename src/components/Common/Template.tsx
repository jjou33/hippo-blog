import React, { FunctionComponent, ReactNode, useMemo } from 'react'
import styled from '@emotion/styled'
import GlobalStyle from 'components/Common/GlobalStyle'
import { Helmet } from 'react-helmet'
import { useCategoryMetadata } from 'components/Sider/tempSide'
import CategoryList from 'components/Main/CategoryList'
import Introduction from 'components/Main/Introduction'
import queryString, { ParsedQuery } from 'query-string'
import { sideBarIcon } from 'components/Sider/SideNavItemList'
type TemplateProps = {
  location: {
    search: string
  }
  title: string
  description: string
  url: string
  image: string
  children: ReactNode
}
const RContainer = styled.div`
  display: flex;
`
const Container = styled.div`
  flex: 4;
`
const SideWrapper = styled.div`
  flex: 0.6;
  box-shadow: 1px 2px 4px 0px;
  @media (max-width: 768px) {
    display: none;
  }
`
const Template: FunctionComponent<TemplateProps> = function ({
  title,
  description,
  url,
  image,
  children,
}) {
  const { edges } = useCategoryMetadata().allMarkdownRemark
  const { publicURL } = useCategoryMetadata().file
  console.log(edges)
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
    <RContainer>
      <SideWrapper>
        <Introduction profileImage={publicURL} />
        <CategoryList
          categoryList={categoryList}
          // selectedCategory={selectedCategory}
          sideBarIcon={sideBarIcon}
        />
      </SideWrapper>
      <Container>
        <Helmet>
          <title>{title}</title>

          <meta name="description" content={description} />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <meta httpEquiv="Content-Type" content="text/html;charset=UTF-8" />

          <meta property="og:type" content="website" />
          <meta property="og:title" content={title} />
          <meta property="og:description" content={description} />
          <meta property="og:image" content={image} />
          <meta property="og:url" content={url} />
          <meta property="og:site_name" content={title} />

          <meta name="twitter:card" content="summary" />
          <meta name="twitter:title" content={title} />
          <meta name="twitter:description" content={description} />
          <meta name="twitter:image" content={image} />
          <meta name="twitter:site" content="@사용자이름" />
          <meta name="twitter:creator" content="@사용자이름" />
        </Helmet>

        <GlobalStyle />
        {children}
      </Container>
    </RContainer>
  )
}

export default Template

import React, { FunctionComponent, ReactNode } from 'react'
import styled from '@emotion/styled'
import GlobalStyle from 'components/Common/GlobalStyle'
import CategoryList from 'components/Navigation/Category/CategoryList'
import Introduction from 'components/Navigation/Profile/Introduction'
import Footer from 'components/Common/Footer'
import { Helmet } from 'react-helmet'
import { useCategoryMetadata } from 'hooks/useCategoryMetadata'
import { navIconSet } from 'components/Common/utils/Svg/NavIconSet'
import {
  getSelectedCategory,
  getCategoryList,
} from 'components/Common/utils/Category/Category'

type TemplateProps = {
  title: string
  description: string
  url: string
  image: string
  children: ReactNode
}
const Container = styled.div`
  display: flex;
`
const Main = styled.main`
  flex: 4;
`
const Navigation = styled.nav`
  flex: 0.6;
  box-shadow: 1px 2px 4px 0px;
  @media (max-width: 768px) {
    display: none;
  }
`

const Header = styled.header`
  h1 {
    color: black;
  }
  border-style: solid;
  border-color: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 10rem;
`
const Template: FunctionComponent<TemplateProps> = function ({
  title,
  description,
  url,
  image,
  children,
}) {
  const { file, allMarkdownRemark } = useCategoryMetadata()

  const selectedCategory: string = getSelectedCategory(location.search)

  const categoryList = getCategoryList(allMarkdownRemark)

  return (
    <Container>
      <Navigation>
        <Introduction profileImage={file.publicURL} />
        <CategoryList
          categoryList={categoryList}
          selectedCategory={selectedCategory}
          navIconSet={navIconSet}
        />
      </Navigation>
      <Main>
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
        <Header>asdfa</Header>
        {children}
        <Footer />
      </Main>
    </Container>
  )
}

export default Template

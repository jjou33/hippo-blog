import React, { FunctionComponent, ReactNode } from 'react'
import styled from '@emotion/styled'
import GlobalStyle from 'styles/GlobalStyle'
import Header from 'components/Header/Header'
import Footer from 'components/Common/Footer'
import CategoryList from 'components/Navigation/Category/CategoryList'
import Introduction from 'components/Navigation/Profile/Introduction'

import { Helmet } from 'react-helmet'
import { RecoilRoot } from 'recoil'
import { useCategoryMetadata } from 'hooks/useCategoryMetadata'
import { getImagePathSetList } from 'utils/Template/Template'
import { CategoryMetadataType } from 'types/Category.types'
import { getSelectedCategory, getCategoryList } from 'utils/Category/Category'

interface TemplateProps {
  title: string
  description: string
  url: string
  image: string
  children: ReactNode
}
const Container = styled.div`
  display: flex;
`
const MainContainer = styled.main`
  flex: 4;
`
const NavigationContainer = styled.nav`
  flex: 0.4;
  box-shadow: 1px 2px 4px 0px;
  background: linear-gradient(0deg, #c6dcf0 20%, #ebeff4 45%);
  @media (max-width: 768px) {
    display: none;
  }
`
const NavigationWrapper = styled.div`
  position: sticky;
  top: 0px;
  ::-webkit-scrollbar {
    display: none;
  }
  overflow: scroll;
  height: 1000px;
  background: linear-gradient(0deg, #c6dcf0 20%, #ebeff4 45%);

  z-index: 1;
`

const Template: FunctionComponent<TemplateProps> = function ({
  title,
  description,
  url,
  image,
  children,
}) {
  const {
    data: {
      allFile: { edges },
      allMarkdownRemark,
    },
    categoryCount,
  }: CategoryMetadataType = useCategoryMetadata()

  const selectedCategory: string = getSelectedCategory(location.search)

  const categoryList = getCategoryList(allMarkdownRemark)
  const imagePathList = getImagePathSetList(edges)

  return (
    <>
      <Container>
        <RecoilRoot>
          <GlobalStyle />
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
          <NavigationContainer>
            <NavigationWrapper>
              <Introduction profileImage={imagePathList['profile-image']} />
              <CategoryList
                categoryList={categoryList}
                selectedCategory={selectedCategory}
                categoryCount={categoryCount}
              />
            </NavigationWrapper>
          </NavigationContainer>
          <MainContainer>
            <Header />
            {children}
          </MainContainer>
        </RecoilRoot>
      </Container>
      <Footer />
    </>
  )
}

export default Template

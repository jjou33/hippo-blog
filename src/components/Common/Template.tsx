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
import { RecoilRoot } from 'recoil'
import { useCategoryMetadataType } from 'types/Category.types'
import ComputerModel from 'components/Common/ComputerGraphic'
import Header from './Header'
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
const Main = styled.main`
  flex: 3.5;
`
const Navigation = styled.nav`
  flex: 0.8;
  box-shadow: 1px 2px 4px 0px;
  @media (max-width: 768px) {
    display: none;
  }
`
const StickBox = styled.div`
  position: sticky;
  ::-webkit-scrollbar {
    display: none;
  }
  overflow: scroll;
  height: 1000px;

  top: 0px;
  z-index: 1;
`

export interface objectType {
  [key: string]: string
}
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
  }: useCategoryMetadataType = useCategoryMetadata()
  const imageObject: objectType = {}

  edges.map(item => {
    imageObject[item.node.publicURL.split('/')[3].split('.')[0]] =
      item.node.publicURL
  })

  const selectedCategory: string = getSelectedCategory(location.search)

  const categoryList = getCategoryList(allMarkdownRemark)

  const temp = document.getElementById('canvas')

  return (
    <>
      <Container>
        <RecoilRoot>
          <Navigation>
            <StickBox>
              <Introduction profileImage={imageObject['profile-image']} />
              <CategoryList
                categoryList={categoryList}
                selectedCategory={selectedCategory}
                navIconSet={navIconSet}
                categoryCount={categoryCount}
              />
            </StickBox>
          </Navigation>
          <Main>
            <Helmet>
              <title>{title}</title>

              <meta name="description" content={description} />
              <meta
                name="viewport"
                content="width=device-width, initial-scale=1.0"
              />
              <meta
                httpEquiv="Content-Type"
                content="text/html;charset=UTF-8"
              />

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
            <Header />
            {children}
          </Main>
        </RecoilRoot>
      </Container>
      <Footer />
    </>
  )
}

export default Template

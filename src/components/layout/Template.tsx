import React, { ReactNode, useEffect, useState } from 'react'
import GlobalStyle from 'styles/GlobalStyle'
import Header from 'components/layout/Header'
import Footer from 'components/layout/Footer'
import CategoryList from 'components/Navigation/Category/CategoryList'
import Introduction from 'components/Navigation/Profile/Introduction'
import * as Styled from './style/TemplateStyled'

import { Helmet } from 'react-helmet'
import { RecoilRoot, useSetRecoilState } from 'recoil'
import { useCategoryMetadata } from 'hooks/useCategoryMetadata'
import { getImagePathSetList } from 'utils/Template/Template'
import { CategoryMetadataType } from 'types/Category.types'
import { templateMountState } from 'states/templateMountState'
import {
  getSelectedCategory,
  getCategoryList,
  getItemsCount,
} from 'utils/Category/Category'
import SkeletonUI from 'components/Navigation/Category/style/skeletonUI/SkeletonUI'
interface TemplateProps {
  title: string
  description: string
  url: string
  image: string
  children: ReactNode
}

const Template = ({
  title,
  description,
  url,
  image,
  children,
}: TemplateProps) => {
  const {
    data: {
      allFile: { edges },
      allMarkdownRemark,
    },
    categoryCount,
  }: CategoryMetadataType = useCategoryMetadata()
  const [mount, isMount] = useState(false)

  const selectedCategory: string = getSelectedCategory(location.search)

  const categoryList = getCategoryList(allMarkdownRemark)

  const imagePathList = getImagePathSetList(edges)
  useEffect(() => {
    setTimeout(() => {
      isMount(true)
    }, 1000)
  }, [])

  return (
    <>
      <Styled.Container>
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
          <Styled.NavigationContainer>
            <Styled.NavigationWrapper>
              <Introduction
                profileImage={imagePathList['superHero']}
                roketImage={imagePathList['rocket']}
              />
              {mount ? (
                <CategoryList
                  categoryList={categoryList}
                  selectedCategory={selectedCategory}
                  categoryCount={categoryCount}
                />
              ) : (
                <SkeletonUI categoryList={categoryList}></SkeletonUI>
              )}

              {/* <CategoryList
                categoryList={categoryList}
                selectedCategory={selectedCategory}
                categoryCount={categoryCount}
              /> */}
            </Styled.NavigationWrapper>
          </Styled.NavigationContainer>
          <Styled.MainContainer>
            <Header />
            {children}
          </Styled.MainContainer>
        </RecoilRoot>
      </Styled.Container>
      <Footer />
    </>
  )
}

export default Template

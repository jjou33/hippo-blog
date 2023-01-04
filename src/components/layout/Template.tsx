import React, { ReactNode, useEffect, useState } from 'react'
import GlobalStyle from 'styles/GlobalStyle'
import Header from 'components/layout/Header'
import Footer from 'components/layout/Footer'
import CategoryList from 'components/Navigation/Category/CategoryList'
import Introduction from 'components/Navigation/Profile/Introduction'
import MainImage from 'components/layout/MainImage'
import LandingPage from 'components/Main/LandingPage/LandingPage'
import ParallaxLandingPage from 'components/Main/LandingPage/ParallaxLandingPage'
import InteractiveLandingPage from 'components/Main/LandingPage/InteractiveLandingPage/InteractiveLandingPage'
import NavigationPage from 'components/Navigation/NavigationPage'
import * as S from './Styles'
import { useScrollStateBar } from 'hooks/useScrollStateBar'
import { Helmet } from 'react-helmet'
import { useRecoilValue } from 'recoil'
import { templateMountState } from 'states/templateMountState'
import { RecoilRoot } from 'recoil'
import { useCategoryMetadata } from 'hooks/useCategoryMetadata'
import { getImagePathSetList } from 'utils/Template/Template'
import { CategoryMetadataType } from 'types/Category.types'
import { getSelectedCategory, getCategoryList } from 'utils/Category/Category'
import CategorySkeleton from 'components/Navigation/Category/CategorySkeleton'
interface TemplateProps {
  title: string
  description: string
  url: string
  image: string
  isPost?: boolean
  children: ReactNode
}

const Template = ({
  title,
  description,
  url,
  image,
  isPost = false,
  children,
}: TemplateProps) => {
  const {
    data: {
      allFile: { edges },
      allMarkdownRemark,
    },
    categoryCount,
  }: CategoryMetadataType = useCategoryMetadata()
  const [isLanding, setIsLanding] = useState(false)
  const selectedCategory: string = getSelectedCategory(location.search)

  const categoryList = getCategoryList(allMarkdownRemark)
  const imagePath = getImagePathSetList(edges)
  const scroll = useScrollStateBar()
  const navigationProps = {
    selectedCategory,
    categoryList,
    imagePath,
    scroll,
    categoryCount,
    children,
    isLanding,
  }

  return (
    <>
      <S.Container>
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
          {selectedCategory === 'landing' && !isPost ? (
            <InteractiveLandingPage
              imageSet={imagePath}
              setIsLanding={setIsLanding}
            />
          ) : (
            <NavigationPage navigationProps={navigationProps} />
          )}
        </RecoilRoot>
      </S.Container>
      <Footer />
    </>
  )
}

export default Template

import React, { ReactNode, useEffect } from 'react'
import GlobalStyle from 'styles/GlobalStyle'
import Footer from 'components/layout/Footer'
import Header from 'components/layout/Header'
import Modal from 'components/common/Modal/Modal'
import SideNavSection from 'components/navigation'
import * as S from './styles'

import { Helmet } from 'react-helmet'

import { RecoilRoot } from 'recoil'

interface TemplateProps {
  title: string
  description: string
  url: string
  image: string
  isPost?: boolean
  navigationProps?: NavigationPropsType
  children: ReactNode
  location?: Location
}

interface NavigationPropsType {
  navigationProps: {
    categoryCount: {
      [key: string]: number
    }
    categoryList: {
      [key: string]: {
        title: string
        childrenCount: number
        children: string[]
      }
    }
    imagePath: {
      [key: string]: string
    }
    selectedCategory: string
  }
}

const Template = ({
  title,
  description,
  url,
  image,
  navigationProps,
  location,
  isPost = false,
  children,
}: TemplateProps) => {
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
              content="width=device-width, initial-scale=1.0 maximum-scale=1, user-scalable=0"
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
          <Header />
          <Modal>
            <SideNavSection location={location} />
          </Modal>

          <S.LayoutWrapper>{children}</S.LayoutWrapper>
        </RecoilRoot>
      </S.Container>
      <Footer />
    </>
  )
}

export default Template

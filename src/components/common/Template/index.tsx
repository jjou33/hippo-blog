import React, { ReactNode } from 'react'

import styled from '@emotion/styled'

import GlobalStyle from 'styles/globalStyle'
import Header from 'components/common/Header'
import Modal from 'components/common/Modal'
import Footer from '../Footer'
import NavCategory from 'components/organisms/NavCategory'
import { Helmet } from 'react-helmet'
import { RecoilRoot } from 'recoil'
import { themedPalette } from 'styles/themeVariables'

interface TemplateProps {
  title: string
  description: string
  url: string
  image: string
  children: ReactNode
  location: Location
}

export const LayoutWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100vw;
  min-height: calc(100vh - 200px);
  margin: 0 auto;
`

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  width: 100vw;
  margin: 0 auto;
  background-color: ${themedPalette.bg_page1};
`

const Template = ({
  title,
  description,
  url,
  image,
  location,
  children,
}: TemplateProps) => {
  return (
    <Container>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
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

        <meta
          name="google-site-verification"
          content="qHPW4tQItfmWapVjvbkaO_AMO3PAaSb6JOQxOfGt8fo"
        />
        <meta
          name="naver-site-verification"
          content="f30fb04ae2f6fa0378bb48ef3536d30633970b95"
        />
        <html lang="ko" />
      </Helmet>
      <RecoilRoot>
        <GlobalStyle />
        <Header />
        <Modal>
          <NavCategory {...location} />
        </Modal>
        <LayoutWrapper>{children}</LayoutWrapper>
        <Footer />
      </RecoilRoot>
    </Container>
  )
}

export default Template

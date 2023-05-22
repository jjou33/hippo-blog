import React, { ReactNode } from 'react'

import GlobalStyle from 'styles/globalStyle'
import Header from 'components/common/Header'
import Modal from 'components/common/Modal'
import Footer from '../Footer'
import NavCategory from 'components/organisms/NavCategory'

import styled from '@emotion/styled'

import { useThemeEffect } from 'hooks/useThemeEffect'

export const LayoutWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100vw;
  min-height: calc(100vh - 200px);
  margin: 0 auto;
`

interface LayoutPropsType {
  location: Location
  children: ReactNode
}

const Layout = ({ location, children }: LayoutPropsType) => {
  useThemeEffect()
  return (
    <>
      <GlobalStyle />
      <Header />
      <Modal>
        <NavCategory {...location} />
      </Modal>
      <LayoutWrapper>{children}</LayoutWrapper>
      <Footer />
    </>
  )
}

export default Layout

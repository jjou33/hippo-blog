import React, { ReactNode } from 'react'
import * as S from './styles'
import GlobalStyle from 'styles/GlobalStyle'
import Header from 'components/layout/Header'
import Modal from 'components/common/Modal'
import SideNavSection from 'components/navigation'
import { useThemeEffect } from 'hooks/useThemeEffect'

interface LayoutPropsType {
  location: Location
  children: ReactNode
}
const Layout = (props: LayoutPropsType) => {
  useThemeEffect()

  return (
    <>
      <GlobalStyle />
      <Header />
      <Modal>
        <SideNavSection {...props.location} />
      </Modal>
      <S.LayoutWrapper>{props.children}</S.LayoutWrapper>
    </>
  )
}

export default Layout

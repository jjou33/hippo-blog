import React, { ReactNode } from 'react'
import * as S from './styles'
import GlobalStyle from 'styles/GlobalStyle'
import Header from 'components/layout/Header'
import Modal from 'components/common/Modal'
import SideNavSection from 'components/navigation'
import { useThemeEffect } from 'hooks/useThemeEffect'
import { useTheme } from 'hooks/useTheme'
import { generateStorage } from 'utils/storage'
interface LayoutPropsType {
  location: Location
  children: ReactNode
}
const Layout = (props: LayoutPropsType) => {
  const localStorage = generateStorage()
  const loadTheme = () => {
    const theme = localStorage.get('theme')
    console.log('theme : ', theme)
  }

  loadTheme()

  return (
    <>
      <GlobalStyle />
      <Header />
      <Modal>
        <SideNavSection {...location} />
      </Modal>
      <S.LayoutWrapper>{props.children}</S.LayoutWrapper>
    </>
  )
}

export default Layout

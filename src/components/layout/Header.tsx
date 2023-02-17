import React from 'react'
import { navIconSet } from 'assets/svg/NavIconSet'
import { menuOpenState } from 'states/menuOpenState'
import { useSetRecoilState } from 'recoil'
import { useScrollStateBar } from 'hooks/useScrollStateBar'

import SideNavSection from 'components/navigation'
import Modal from 'components/common/Modal/Modal'
import * as S from './styles'

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

const Header = (navigationProps: NavigationPropsType) => {
  const setState = useSetRecoilState(menuOpenState)
  const scroll = useScrollStateBar()

  const toggleMenuButton = () => {
    setState((oldOpenState: boolean) => {
      return !oldOpenState
    })
  }

  return (
    <>
      <S.ProgressBarContainer>
        <S.ProgressBar scroll={scroll} />
      </S.ProgressBarContainer>
      <S.HeaderContainer>
        <S.HeaderMenuButton onClick={toggleMenuButton}>
          {navIconSet['menu'].icon('20', '20')}
        </S.HeaderMenuButton>
        {/* <Modal>
          <SideNavSection
            navigationProps={{
              selectedCategory,
              categoryList,
              imagePath,
              categoryCount,
            }}
          />
        </Modal> */}
        <S.HeaderWrapper>
          <S.HeaderItemTitle to="/">HIPPO DEV</S.HeaderItemTitle>
        </S.HeaderWrapper>
      </S.HeaderContainer>
    </>
  )
}

export default Header

import React, { useEffect, useState } from 'react'
import Introduction from 'components/navigation/Profile'
import CategoryList from 'components/navigation/Category'
import CategorySkeleton from 'components/navigation/Category/CategorySkeleton'

import { useRecoilValue } from 'recoil'
import { menuOpenState } from 'states/menuOpenState'

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

const SideNavSection = ({ navigationProps }: NavigationPropsType) => {
  const [mount, setMount] = useState(false)
  const state = useRecoilValue<boolean>(menuOpenState)

  const { imagePath, categoryList, selectedCategory, categoryCount } =
    navigationProps

  useEffect(() => {
    setMount(true)
  }, [])

  return (
    <S.NavigationContainer isOpen={state}>
      <Introduction
        profileImage={imagePath['superHero']}
        roketImage={imagePath['rocket']}
      />
      {mount ? (
        <CategoryList
          categoryList={categoryList}
          selectedCategory={selectedCategory}
          categoryCount={categoryCount}
        />
      ) : (
        <CategorySkeleton categoryList={categoryList} />
      )}
    </S.NavigationContainer>
  )
}

export default SideNavSection

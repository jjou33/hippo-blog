import React, { useEffect, useState } from 'react'
import Introduction from 'components/navigation/Profile'
import CategoryList from 'components/navigation/Category'
import CategorySkeleton from 'components/navigation/Category/CategorySkeleton'

import { useRecoilValue } from 'recoil'
import * as S from './styles'
import { menuOpenState } from 'states/menuOpenState'

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
  const [mount, isMount] = useState(false)
  const state = useRecoilValue<boolean>(menuOpenState)

  const { imagePath, categoryList, selectedCategory, categoryCount } =
    navigationProps
  useEffect(() => {
    setTimeout(() => {
      isMount(true)
    }, 600)
  }, [])

  return (
    <S.NavigationWrapper isOpen={state}>
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
    </S.NavigationWrapper>
  )
}

export default SideNavSection

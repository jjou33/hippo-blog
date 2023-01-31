import React, { useEffect, useState } from 'react'
import Introduction from 'components/Navigation/Profile'
import CategoryList from 'components/Navigation/Category'
import CategorySkeleton from 'components/Navigation/Category/CategorySkeleton'
import * as S from './Styles'

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
  const { imagePath, categoryList, selectedCategory, categoryCount } =
    navigationProps
  useEffect(() => {
    setTimeout(() => {
      isMount(true)
    }, 600)
  }, [])

  return (
    <S.NavigationContainer>
      <S.NavigationWrapper>
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
    </S.NavigationContainer>
  )
}

export default SideNavSection

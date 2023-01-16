import React, { ReactNode, useEffect, useState } from 'react'
import MainImage from 'components/layout/MainImage'
import Introduction from 'components/Navigation/Profile/Introduction'
import CategoryList from 'components/Navigation/Category/CategoryList'
import CategorySkeleton from 'components/Navigation/Category/CategorySkeleton'
import * as S from 'components/layout/Styles'

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
    scroll: number

    selectedCategory: string
  }
  children: ReactNode
}
const NavigationPages = (props: NavigationPropsType) => {
  const [mount, isMount] = useState(false)
  const { imagePath, categoryList, selectedCategory, scroll, categoryCount } =
    props.navigationProps

  useEffect(() => {
    setTimeout(() => {
      isMount(true)
    }, 600)
  }, [])

  return (
    <>
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
      <S.MainContainer>
        <S.ProgressBarContainer>
          <S.ProgressBar scroll={scroll} />
        </S.ProgressBarContainer>
        <MainImage backgroundImg={imagePath} />
        {props.children}
      </S.MainContainer>
    </>
  )
}

export default NavigationPages

import React, { ReactNode, useEffect, useState } from 'react'
import CategoryList from 'components/Navigation/Category/CategoryList'
import Introduction from 'components/Navigation/Profile/Introduction'
import MainImage from 'components/layout/MainImage'
import * as S from 'components/layout/Styles'
import { useRecoilValue } from 'recoil'
import { templateMountState } from 'states/templateMountState'
import CategorySkeleton from 'components/Navigation/Category/CategorySkeleton'

const NavigationPages = props => {
  const {
    imagePath,
    categoryList,
    selectedCategory,
    scroll,
    isLanding,
    categoryCount,
    children,
  } = props.navigationProps

  const state = useRecoilValue<any>(templateMountState)
  const removeEventTask = ['scroll', 'load', 'resize', 'orientationchange']

  const removeEventListeners = (events: any) => {
    removeEventTask.forEach(task => {
      window.removeEventListener(`${task}`, events[`${task}`])
    })
  }
  const [mount, isMount] = useState(false)
  useEffect(() => {
    setTimeout(() => {
      isMount(true)
    }, 600)
  }, [])

  useEffect(() => {
    if (isLanding) {
      removeEventListeners(state)
    }
  }, [isLanding])
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
              imagePathList={imagePath}
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
        <MainImage backgroundImg={imagePath['mainTitle']} />
        {children}
      </S.MainContainer>
    </>
  )
}

export default NavigationPages

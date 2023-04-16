import React, { ReactElement, useEffect, useState } from 'react'
import * as S from './styles'

import Introduction from 'components/navigation/Profile'
import CategoryList from 'components/navigation/Category'
import CategorySkeleton from 'components/navigation/Category/CategorySkeleton'

import { useRecoilValue, useSetRecoilState } from 'recoil'
import { menuOpenState } from 'states/menuOpenState'
import { useCategoryMetadata } from 'hooks/useCategoryMetadata'
import { getCategoryList, getSelectedCategory } from 'utils/Category'
import { getImagePathSetList } from 'utils/Image'

const SideNavSection = (location: Location) => {
  const [mount, setMount] = useState(false)
  const state = useRecoilValue<boolean>(menuOpenState)
  const setState = useSetRecoilState(menuOpenState)
  const staticData = useCategoryMetadata()

  const selectedCategory =
    location !== undefined ? getSelectedCategory(location.search) : 'All'
  const imagePath = getImagePathSetList(staticData.data.allFile.edges)
  const categoryList = getCategoryList(staticData.data.allMarkdownRemark)

  useEffect(() => {
    setMount(true)
    setState(false)
  }, [])

  return (
    <S.NavigationContainer isOpen={state}>
      <Introduction
        profileImage={imagePath['superHero']}
        roketImage={imagePath['rocket']}
      />
      <S.NavigationWrapper>
        {mount ? (
          <CategoryList
            categoryList={categoryList}
            selectedCategory={selectedCategory}
            categoryCount={staticData.categoryCount}
          />
        ) : (
          <CategorySkeleton categoryList={categoryList} />
        )}
      </S.NavigationWrapper>
    </S.NavigationContainer>
  )
}

export default SideNavSection

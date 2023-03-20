import React, { useEffect, useState } from 'react'
import Introduction from 'components/navigation/Profile'
import CategoryList from 'components/navigation/Category'
import CategorySkeleton from 'components/navigation/Category/CategorySkeleton'
import { useRecoilValue, useSetRecoilState } from 'recoil'
import { menuOpenState } from 'states/menuOpenState'
import { useCategoryMetadata } from 'hooks/useCategoryMetadata'
import { getCategoryList, getSelectedCategory } from 'utils/Category'
import { getImagePathSetList } from 'utils/Image'

import * as S from './styles'

const SideNavSection = (sideNavProps: { location: Location }) => {
  const [mount, setMount] = useState(false)
  const state = useRecoilValue<boolean>(menuOpenState)
  const setState = useSetRecoilState(menuOpenState)
  const staticData = useCategoryMetadata()

  const selectedCategory =
    sideNavProps.location !== undefined
      ? getSelectedCategory(sideNavProps.location.search)
      : 'All'
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
      {mount ? (
        <CategoryList
          categoryList={categoryList}
          selectedCategory={selectedCategory}
          categoryCount={staticData.categoryCount}
        />
      ) : (
        <CategorySkeleton categoryList={categoryList} />
      )}
    </S.NavigationContainer>
  )
}

export default SideNavSection

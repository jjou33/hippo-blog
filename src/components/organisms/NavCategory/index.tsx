import React, { useEffect, useState } from 'react'
import * as S from './styles'
import NavIntroduction from 'components/organisms/NavCategory/NavIntroduction'
import NavCategory from 'components/organisms/NavCategory/NavCategoryList'

import { useRecoilValue, useSetRecoilState } from 'recoil'
import { menuOpenState } from 'states/menuOpenState'
import { useCategoryMetadata } from 'hooks/useCategoryMetadata'
import { getCategoryList, getSelectedCategory } from 'utils/category'
import { getImagePathSetList } from 'utils/imageBridge'

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
      <NavIntroduction profileImage={imagePath['superHero']} />
      <S.NavigationWrapper>
        <NavCategory
          categoryList={categoryList}
          selectedCategory={selectedCategory}
          categoryCount={staticData.categoryCount}
        />
      </S.NavigationWrapper>
    </S.NavigationContainer>
  )
}

export default SideNavSection

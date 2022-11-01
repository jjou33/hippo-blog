import { getSvgJSXElement } from 'utils/Common/Common'
import { useDropdownEffect } from 'hooks/useDropdownEffect'
import {
  CategoryRootCount,
  CategoryRootIcon,
  CategoryRootItem,
  RootTitleWrapper,
} from './style/CategoryRootTitleStyled'

import type { CategoryCount } from 'types/Category.types'

/**
 * @description: Navigation Side Bar 최상단 Root Title 컴포넌트
 */

const CategoryRootTitle = ({ categoryCount }: CategoryCount) => {
  const { toggleTitle, titleRef } = useDropdownEffect(true)
  return (
    <RootTitleWrapper ref={titleRef} onClick={toggleTitle}>
      {getSvgJSXElement('Dot', '18')}
      <CategoryRootIcon>{getSvgJSXElement('Ghost', '18')}</CategoryRootIcon>
      <CategoryRootItem to={`/?category=All`}>Root</CategoryRootItem>
      <CategoryRootCount>
        ({categoryCount !== undefined ? categoryCount['All'] : ''})
      </CategoryRootCount>
    </RootTitleWrapper>
  )
}

export default CategoryRootTitle

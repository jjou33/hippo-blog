import * as S from './Styles'
import CounterBadge from 'components/Common/CounterBadge'
import { getSvgJSXElement } from 'utils/Common/Common'
import { useDropdownEffect } from 'hooks/useDropdownEffect'

import type { CategoryCount } from 'types/Category.types'

/**
 * @description: Navigation Side Bar 최상단 Root Title 컴포넌트
 */

const CategoryRootTitle = ({ categoryCount }: CategoryCount) => {
  return (
    <S.RootTitleWrapper>
      {getSvgJSXElement('Dot', '18')}
      <S.CategoryRootIcon>{getSvgJSXElement('Ghost', '18')}</S.CategoryRootIcon>
      <span></span>
      <S.CategoryRootItem to={`/?category=All`}>Root</S.CategoryRootItem>
      <S.CategoryRootCount>
        {categoryCount['All'] !== undefined ? (
          <CounterBadge>{categoryCount['All']}</CounterBadge>
        ) : (
          ''
        )}
      </S.CategoryRootCount>
    </S.RootTitleWrapper>
  )
}

export default CategoryRootTitle

import * as S from './styles'
import CounterBadge from 'components/common/NavigationCounterBadge/CounterBadge'

import { getSvgJSXElement } from 'utils/Common/Common'

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
      <S.CategoryRootTitle to={'/'}>Root</S.CategoryRootTitle>
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

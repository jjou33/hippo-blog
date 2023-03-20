import * as S from './styles'
import CounterBadge from 'components/common/Badges/Badge'
import ColorText from 'components/common/TextEffects/ColorText'
import { getSvgJSXElement } from 'utils/Image'

import type { CategoryCount } from 'types/category'

/**
 * @description: Navigation Side Bar 최상단 Root Title 컴포넌트
 */

const CategoryRootTitle = ({ categoryCount }: CategoryCount) => {
  return (
    <S.RootTitleWrapper>
      {getSvgJSXElement('Dot', '18')}
      <S.CategoryRootIcon>{getSvgJSXElement('Ghost', '28')}</S.CategoryRootIcon>
      <span></span>
      <S.CategoryRootTitle to={'/'}>
        <ColorText text={'Root'} fontSize={30} />
      </S.CategoryRootTitle>
      <S.CategoryRootCount>
        {categoryCount['All'] !== undefined ? (
          <CounterBadge width="30">{categoryCount['All']}</CounterBadge>
        ) : (
          ''
        )}
      </S.CategoryRootCount>
    </S.RootTitleWrapper>
  )
}

export default CategoryRootTitle

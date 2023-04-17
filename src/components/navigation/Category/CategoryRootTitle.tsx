import * as S from './styles'
import CounterBadge from 'components/common/Badges'
import ColorText from 'components/common/TextEffect'
import { getSvgJSXElement } from 'utils/imageBridge'

import type { CategoryCount } from 'types/catgegory'

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
        <ColorText text={'Root'} fontSize={25} />
      </S.CategoryRootTitle>
      <S.CategoryRootCount>
        {categoryCount['All'] !== undefined ? (
          <CounterBadge font="15px" radius="50px" fontWeight={800}>
            {categoryCount['All']}
          </CounterBadge>
        ) : (
          ''
        )}
      </S.CategoryRootCount>
    </S.RootTitleWrapper>
  )
}

export default CategoryRootTitle

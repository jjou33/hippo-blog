import { getSvgJSXElement } from 'utils/Common/Common'
import { useDropdownEffect } from 'hooks/useDropdownEffect'
import * as Styled from './style/CategoryRootTitleStyled'
import CounterBadge from 'components/Common/CounterBadge'
import type { CategoryCount } from 'types/Category.types'

/**
 * @description: Navigation Side Bar 최상단 Root Title 컴포넌트
 */

const CategoryRootTitle = ({ categoryCount }: CategoryCount) => {
  const { toggleTitle, titleRef } = useDropdownEffect(true)
  console.log('cate : ', typeof categoryCount['All'])
  return (
    <Styled.RootTitleWrapper ref={titleRef} onClick={toggleTitle}>
      {getSvgJSXElement('Dot', '18')}
      <Styled.CategoryRootIcon>
        {getSvgJSXElement('Ghost', '18')}
      </Styled.CategoryRootIcon>
      <span></span>
      <Styled.CategoryRootItem to={`/?category=All`}>
        Root
      </Styled.CategoryRootItem>
      <Styled.CategoryRootCount>
        {categoryCount['All'] !== undefined ? (
          <CounterBadge>{categoryCount['All']}</CounterBadge>
        ) : (
          ''
        )}
      </Styled.CategoryRootCount>
    </Styled.RootTitleWrapper>
  )
}

export default CategoryRootTitle

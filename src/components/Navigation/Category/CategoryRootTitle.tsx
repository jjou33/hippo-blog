import styled from '@emotion/styled'
import { keyframes } from '@emotion/react'
import { getSvgJSXElement } from 'utils/Common/Common'
import { useDropdownEffect } from 'hooks/useDropdownEffect'
import { Link } from 'gatsby'

import type { CategoryCount } from 'types/Category.types'

/**
 * @description: Navigation Side Bar 최상단 Root Title 컴포넌트
 */

const RootTitleWrapper = styled.div`
  display: flex;
  margin: 25px 10px 10px 10px;
  &:hover {
    color: red;
  }
`
const upDownAnimation = keyframes`
  from{
    transform: translatey(2px);
  }
  to{
    transform: translatey(-2px);
  }
`
const CategoryRootItem = styled(({ ...props }: any) => <Link {...props} />)``
const CategoryRootCount = styled.div`
  margin-left: 5px;
  color: #e75454;
`
const CategoryRootIcon = styled.div`
  margin: 0px 10px 10px 10px;
  animation: ${upDownAnimation} 0.6s infinite ease-in-out alternate;
`

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

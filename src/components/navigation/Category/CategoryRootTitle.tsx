import * as S from './styles'
import CounterBadge from 'components/atom/Badges'
import ColorText from 'components/atom/ColorText'

import IconWrapper from 'components/atom/IconWrapper'
import type { CategoryCount } from 'types/catgegory'

/**
 * @description: Navigation Side Bar 최상단 Root Title 컴포넌트
 */

const CategoryRootTitle = ({ categoryCount }: CategoryCount) => {
  return (
    <S.CategoryRootContainer>
      <IconWrapper iconName="Dot" iconSize={18} />
      <S.CategoryRootIcon>
        <IconWrapper iconName="Ghost" iconSize={25} />
      </S.CategoryRootIcon>
      <S.CategoryRootTitle to={'/AllPost'}>
        <ColorText text={'Root'} fontSize={25} />
      </S.CategoryRootTitle>
      <CounterBadge
        text={`${categoryCount['All']}`}
        backgroundColor="white"
        borderStyle="1px #f65660cc solid"
        fontSize={13}
        radius="50px"
        color="red"
        fontWeight={800}
      />
    </S.CategoryRootContainer>
  )
}

export default CategoryRootTitle

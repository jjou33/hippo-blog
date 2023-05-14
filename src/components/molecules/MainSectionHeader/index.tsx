import * as S from './styles'

import IconWrapper from 'components/atom/IconWrapper'
import StaticText from 'components/atom/StaticText'

interface MainSectionHeaderPropsType {
  selectedCategory: string
  fontSize: number
  categoryCount?: number
}

const MainSectionHeader = ({
  selectedCategory,
  fontSize,
  categoryCount,
}: MainSectionHeaderPropsType) => {
  return (
    <S.MainSectionHeaderContainer>
      <S.MainSectionHeaderWrapper>
        <IconWrapper
          iconName="hambergerMenu"
          iconSize={60}
          fontSize={fontSize}
          mediaSize={35}
        />
        <StaticText
          text={selectedCategory}
          fontSize={fontSize - 10}
          mediaSize={25}
        />

        {categoryCount ? (
          <StaticText
            text={`${categoryCount}`}
            fontSize={fontSize - 10}
            mediaSize={25}
          />
        ) : (
          ''
        )}
      </S.MainSectionHeaderWrapper>
    </S.MainSectionHeaderContainer>
  )
}

export default MainSectionHeader

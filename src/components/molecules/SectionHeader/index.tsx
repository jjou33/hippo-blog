import * as S from './styles'

import IconWrapper from 'components/atom/IconWrapper'
import StaticText from 'components/atom/StaticText'

interface SectionHeaderPropsType {
  selectedCategory: string
  categoryCount?: number
  iconSize: number
  iconName: string
  iconMediaSize: number
  fontSize: number
  mediaSize: number
}

const SectionHeader = ({
  selectedCategory,
  categoryCount,
  iconSize,
  iconName,
  iconMediaSize,
  fontSize,
  mediaSize,
}: SectionHeaderPropsType) => {
  return (
    <S.SectionHeaderContainer>
      <S.SectionHeaderWrapper>
        <IconWrapper
          iconName={iconName}
          iconSize={iconSize}
          mediaSize={iconMediaSize}
        />
        <StaticText
          text={selectedCategory}
          fontSize={fontSize - 10}
          mediaSize={mediaSize}
        />

        {categoryCount ? (
          <StaticText
            text={`${categoryCount}`}
            fontSize={fontSize - 10}
            mediaSize={mediaSize}
          />
        ) : (
          ''
        )}
      </S.SectionHeaderWrapper>
    </S.SectionHeaderContainer>
  )
}

export default SectionHeader

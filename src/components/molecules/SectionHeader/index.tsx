import * as S from './styles'

import IconWrapper from 'components/atom/IconWrapper'
import StaticText from 'components/atom/StaticText'

interface SectionHeaderPropsType {
  selectedCategory: string
  categoryCount?: number
  iconSize: number
  iconName: string
  iconmediasize: number
  fontSize: number
  mediasize: number
}

const SectionHeader = ({
  selectedCategory,
  categoryCount,
  iconSize,
  iconName,
  iconmediasize,
  fontSize,
  mediasize,
}: SectionHeaderPropsType) => {
  return (
    <S.SectionHeaderContainer>
      <S.SectionHeaderWrapper>
        <IconWrapper
          iconName={iconName}
          iconSize={iconSize}
          mediasize={iconmediasize}
        />
        <StaticText
          text={selectedCategory}
          fontSize={fontSize - 10}
          mediasize={mediasize}
        />

        {categoryCount ? (
          <StaticText
            text={`${categoryCount}`}
            fontSize={fontSize - 10}
            mediasize={mediasize}
          />
        ) : (
          ''
        )}
      </S.SectionHeaderWrapper>
    </S.SectionHeaderContainer>
  )
}

export default SectionHeader

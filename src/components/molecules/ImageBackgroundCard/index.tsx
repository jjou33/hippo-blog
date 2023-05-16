import * as S from './styles'

import Badge from 'components/atom/Badges'
import CardText from 'components/atom/CardText'

interface ImageCardPropsType {
  imagePath: string
  slug: string
  categories: string[]
  fontSize: number
  summary: string
  opacity?: number
  fontColor?: string
}
const ImageBackgroundCard = ({
  imagePath,
  slug,
  categories,
  fontSize,
  summary,
  opacity = 1,
  fontColor = 'white',
}: ImageCardPropsType) => {
  const badgeList = ['Vue3', 'React']
  return (
    <S.ProjectDiaryItemComtainer
      imagepath={imagePath}
      to={`/?category=${slug}`}
    >
      <S.CardTitleWrapper>
        <S.BadgeWrapper>
          {categories.map(value => {
            return (
              <Badge
                text={value}
                fontSize={fontSize - 7}
                color=""
                fontWeight={800}
              />
            )
          })}
        </S.BadgeWrapper>
        <CardText
          text={summary}
          fontSize={fontSize}
          opacity={opacity}
          fontColor={fontColor}
        />
      </S.CardTitleWrapper>
    </S.ProjectDiaryItemComtainer>
  )
}

export default ImageBackgroundCard

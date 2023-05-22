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
  return (
    <S.ProjectDiaryItemComtainer
      imagepath={imagePath}
      to={`/postList/?category=${slug}`}
    >
      <S.CardTitleWrapper>
        <S.BadgeWrapper>
          {categories.map((value, index) => {
            return (
              <Badge
                text={value}
                fontSize={fontSize - 7}
                color=""
                fontWeight={800}
                key={index}
              />
            )
          })}
        </S.BadgeWrapper>
        <CardText
          text={summary}
          fontSize={fontSize}
          opacity={opacity}
          fontColor={fontColor}
          mediasize={fontSize - 5}
        />
      </S.CardTitleWrapper>
    </S.ProjectDiaryItemComtainer>
  )
}

export default ImageBackgroundCard

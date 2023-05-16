import * as S from './styles'
import StaticText from 'components/atom/StaticText'
import RoundImage from 'components/atom/RoundImage'

interface SquareCardPropsType {
  imagePath: {
    [key: string]: string
  }
  categoryName: string
  width: string
  height: string
  radius?: string
  imageMediaSize?: string
  fontWeight?: number
  fontSize?: number
  mediaSize?: number
}

const SquareCard = ({
  imagePath,
  categoryName,
  width,
  height,
  radius,
  imageMediaSize,
  fontSize,
  fontWeight,
  mediaSize,
}: SquareCardPropsType) => {
  return (
    <S.SquareCardWrapper to={`/?category=${categoryName}`}>
      <RoundImage
        imagePath={imagePath[`${categoryName}`]}
        width={width}
        height={height}
        radius={radius}
        imageMediaSize={imageMediaSize}
      />
      <S.SquareCardTextWrapper>
        <StaticText
          text={categoryName.toUpperCase()}
          fontWeight={fontWeight}
          fontSize={fontSize}
          mediaSize={mediaSize}
        />
      </S.SquareCardTextWrapper>
    </S.SquareCardWrapper>
  )
}

export default SquareCard

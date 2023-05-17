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
  imagemediasize?: string
  fontWeight?: number
  fontSize?: number
  mediasize?: number
}

const SquareCard = ({
  imagePath,
  categoryName,
  width,
  height,
  radius,
  imagemediasize,
  fontSize,
  fontWeight,
  mediasize,
}: SquareCardPropsType) => {
  return (
    <S.SquareCardWrapper to={`/?category=${categoryName}`}>
      <RoundImage
        imagePath={imagePath[`${categoryName}`]}
        width={width}
        height={height}
        radius={radius}
        imagemediasize={imagemediasize}
      />
      <S.SquareCardTextWrapper>
        <StaticText
          text={categoryName.toUpperCase()}
          fontWeight={fontWeight}
          fontSize={fontSize}
          mediasize={mediasize}
        />
      </S.SquareCardTextWrapper>
    </S.SquareCardWrapper>
  )
}

export default SquareCard

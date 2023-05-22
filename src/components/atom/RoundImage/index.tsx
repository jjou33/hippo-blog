import * as S from './styles'

const RoundImage = ({
  width,
  height,
  radius,
  imagePath,
  imagemediasize,
}: {
  width: string
  height: string
  radius?: string
  imagePath: string
  imagemediasize?: string
}) => {
  return (
    <S.RoundImage
      imagePath={imagePath}
      width={width}
      height={height}
      radius={radius}
      mediasize={imagemediasize}
      alt="recommendCategory"
    />
  )
}

export default RoundImage

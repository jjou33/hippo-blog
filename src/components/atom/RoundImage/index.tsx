import * as S from './styles'

const RoundImage = ({
  width,
  height,
  radius,
  imagePath,
  imageMediaSize,
}: {
  width: string
  height: string
  radius?: string
  imagePath: string
  imageMediaSize?: string
}) => {
  return (
    <S.RoundImage
      imagePath={imagePath}
      width={width}
      height={height}
      radius={radius}
      mediaSize={imageMediaSize}
    />
  )
}

export default RoundImage

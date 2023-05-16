import * as S from './styles'
import type { IGatsbyImageData } from 'gatsby-plugin-image'
interface ThumnailImagePropsType {
  image: IGatsbyImageData
  width: number
  height: number
  radius?: string
  mediaSize?: number
}
const ThumnailImage = ({
  image,
  width,
  height,
  radius,
  mediaSize,
}: ThumnailImagePropsType) => {
  return (
    <S.ThumbnailImage
      image={image}
      alt="ThumbnailImage"
      width={width}
      height={height}
      radius={radius}
      mediaSize={mediaSize}
    ></S.ThumbnailImage>
  )
}

export default ThumnailImage

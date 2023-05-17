import * as S from './styles'
import type { IGatsbyImageData } from 'gatsby-plugin-image'
interface ThumnailImagePropsType {
  image: IGatsbyImageData
  width: number
  height: number
  radius?: string
  mediasize?: number
}
const ThumnailImage = ({
  image,
  width,
  height,
  radius,
  mediasize,
}: ThumnailImagePropsType) => {
  return (
    <S.ThumbnailImage
      image={image}
      alt="ThumbnailImage"
      width={width}
      height={height}
      radius={radius}
      mediasize={mediasize}
    ></S.ThumbnailImage>
  )
}

export default ThumnailImage

import * as S from './styles'
import type { IGatsbyImageData } from 'gatsby-plugin-image'
interface ThumnailImagePropsType {
  image: IGatsbyImageData
  width: number
  height: number
  radius?: string
  mediasize?: number
  type?: string
}
const ThumnailImage = ({
  image,
  width,
  height,
  radius,
  mediasize,
  type,
}: ThumnailImagePropsType) => {
  return (
    <S.ThumbnailImage
      image={image}
      alt="ThumbnailImage"
      width={width}
      height={height}
      radius={radius}
      mediasize={mediasize}
      type={type}
    ></S.ThumbnailImage>
  )
}

export default ThumnailImage

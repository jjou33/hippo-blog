import styled from '@emotion/styled'
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image'

export const AnimationWrapper = styled.div`
  position: relative;
  top: 2px;
`

export const PostHeadWrapper = styled.div`
  position: relative;
  width: 100vw;
  height: 90vh;

  @media (max-width: 768px) {
    height: 500px;
  }
`

type GatsbyImgProps = {
  image: IGatsbyImageData
  alt: string
  className?: string
}

export const BackgroundImage = styled((props: GatsbyImgProps) => (
  <GatsbyImage {...props} style={{ position: 'absolute' }} />
))`
  z-index: 1;
  width: 100%;
  height: 90vh;
  object-fit: cover;
  filter: brightness(0.25);

  @media (max-width: 768px) {
    height: 500px;
  }
`

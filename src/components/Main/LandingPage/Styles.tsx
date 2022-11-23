import { css } from '@emotion/react'
import styled from '@emotion/styled'

export const LadingPageContainer = styled.div``

export const FirstSectionWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
`

export const FirstImage = styled.img`
  alt: 'first';
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
`

export const FirstTitle = styled.h1`
  position: absolute;
  bottom: 15%;
  right: 10%;
  color: white;
  font-size: 4rem;
  padding: 15px;
`

/**
 * Slider
 */

export const SliderContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 20px;

  ${(props: string) =>
    props.inview
      ? css`
          opacity: 1;
          transform: scale(100%);
          transition: 2s;
        `
      : css`
          opacity: 0;
          transform: scale(85%);
          transition: 2s;
        `}
`

export const SliderImg = styled.img`
  alt: 'slider';
  width: 60%;
`
export const SliderTitleWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  text-align: center;
`

export const SliderTitle = styled.h1`
  text-align: center;
`
export const SliderSubTitle = styled.p``

import { css, keyframes } from '@emotion/react'
import { boat_in_animation } from 'styles/AnimationKeyframes'
import styled from '@emotion/styled'

export const LadingPageContainer = styled.div`
  background: #cce3f1;
  margin-left: 3px;
`

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

export const SecondSectionWrapper = styled.section`
  background: black;
`
/**
 * Slider
 */

interface SliderContainerProps {
  ref: (node?: Element | null) => void
  inview: boolean
}
export const SliderContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 20px;

  ${(props: SliderContainerProps) =>
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

export const SliderImg = styled.embed`
  alt: 'slider';
  width: 60%;

  path {
    fill: none;
    stroke: fff;
    stroke-width: 3px;
  }
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

/**
 * Footer Section
 */

export const FooterWrapper = styled.div`
  position: relative;
  width: 100%;
  /* margin-left: 2px; */
  height: 250px;
  top: 100%;
  overflow: hidden;
`

export const FooterFirstWaveAnimation = css``

interface FooterWavePropsType {
  src: string
  waveType: string
}

const animate = keyframes`
  0% {
    background-position-x: 0px;
  }

  100% {
    background-position-x: 1000px;
  }
`
const animate2 = keyframes`
  0% {
    background-position-x: 0px;
  }

  100% {
    background-position-x: -1000px;
  }
`
export const FooterWaveStyle = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100px;

  ${(props: FooterWavePropsType) => {
    if (props.src) {
      switch (props.waveType) {
        case 'first':
          return css`
            background: url(${props.src});
            animation: ${animate} 30s linear infinite;
            z-index: 1000;
            opacity: 1;
            animation-delay: 0s;
            bottom: 0;
          `
        case 'second':
          return css`
            background: url(${props.src});
            animation: ${animate2} 15s linear infinite;
            z-index: 999;
            opacity: 0.5;
            animation-delay: -5s;
            bottom: 5px;
          `
        case 'third':
          return css`
            background: url(${props.src});
            animation: ${animate2} 5s linear infinite;
            z-index: 998;
            opacity: 0.2;
            animation-delay: -2s;
            bottom: 10px;
          `
        case 'fourth':
          return css`
            background: url(${props.src});
            animation: ${animate2} 15s linear infinite;
            z-index: 997;
            opacity: 0.7;
            animation-delay: -5s;
            bottom: 15px;
          `
      }
    }
  }}

  background-size: 1000px 100px;
`

export const BoatIcon = styled.div`
  position: absolute;
  width: 150px;
  height: 150px;
  margin: 90px 0 0 300px;
  z-index: 1001;
  animation: ${boat_in_animation} 10s ease infinite;
`

/**
 * ParallaxLandingPage Section
 */
export const ParallaxheaderText = styled.h2`
  position: absolute;
  color: #094b65;
  font-size: 10vw;
  text-align: center;
  line-height: 0.8;
  transform: translateY(-50%);
`
export const SpanTag = styled.span`
  font-size: 0.2em;
  letter-spacing: 2px;
  font-weight: 400;
`
export const ButtonTag = styled.a`
  text-decoration: none;
  display: inline-block;
  padding: 8px 30px;
  background: #fff;
  color: #094b65;
  font-weight: 500;
  letter-spacing: 2px;
  border-radius: 40px;
  transform: translateY(100px);
`
export const ParallaxConstainer = styled.section`
  position: relative;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  &::before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 20%;
    background: linear-gradient(to top, #094b65, transparent);
    z-index: 10;
  }
  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    pointer-events: none;
  }
`
export const ParallaxScrollingContainer = styled.div`
  position: relative;
  padding: 100px;
  background: #094b65;
`
export const ParallaxScrollingHeader = styled.h2`
  font-size: 3.5em;
  color: #fff;
  margin-bottom: 10px;
`
export const ParallaxScrollingP = styled.p`
  font-size: 1em;
  color: #fff;
`

export const ParallaxBirdImage1 = styled.img``
export const ParallaxBirdImage2 = styled.img``
export const ParallaxForestImage = styled.img``
export const ParallaxRockImage = styled.img``
export const ParallaxWaterImage = styled.img``

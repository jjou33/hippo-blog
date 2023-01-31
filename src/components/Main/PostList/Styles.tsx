import styled from '@emotion/styled'
import { css, keyframes } from '@emotion/react'
import { boat_in_animation } from 'styles/AnimationKeyframes'
/**
 * Footer Section
 */

interface FooterWavePropsType {
  src: string
  waveType: string
}

export const FooterWrapper = styled.div`
  position: relative;
  width: 100%;
  margin-left: 3px;
  height: 250px;
  background: #cce3f1;
  overflow: hidden;
`

export const FooterFirstWaveAnimation = css``

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

export const islandIcon = styled.div`
  position: absolute;
  width: 150px;
  height: 150px;
  margin: 90px 0 0 1000px;
  z-index: 1001;
`

import styled from '@emotion/styled'
import { keyframes } from '@emotion/react'

const TextEffectKeyFrame = keyframes`
  to {
    background-position: 200% center;
  }
`

export const ColorText = styled.p`
  text-transform: uppercase;
  background-image: linear-gradient(
    -225deg,
    #b7b7ee 0%,
    #b197cc 29%,
    #ff1361 67%,
    #fff800 100%
  );
  background-size: auto auto;
  background-clip: border-box;
  background-size: 200% auto;
  color: #fff;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: ${TextEffectKeyFrame} 2s linear infinite;
  display: inline-block;
`

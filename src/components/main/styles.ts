import styled from '@emotion/styled'
import { keyframes } from '@emotion/react'

export const MainContainer = styled.main`
  flex-grow: 1;
  width: calc(100% - 270px);
  background-color: white;
  @media (max-width: 768px) {
    margin-top: 44px;
  }
`
export const ContentsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 4;
  align-items: center;
  margin: 50px auto;
`

const TextEffectKeyFrame = keyframes`
  to {
    background-position: 200% center;
  }
`

export const ContentsTitle = styled.h1`
  margin-top: 20px;
  font-size: 50px;
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
  text-fill-color: transparent;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: ${TextEffectKeyFrame} 2s linear infinite;
  display: inline-block;
`

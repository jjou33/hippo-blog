import styled from '@emotion/styled'
import { keyframes } from '@emotion/react'
export const MainContainer = styled.main`
  flex-grow: 1;
  width: calc(100% - 270px);
  background-color: white;
`
export const ProgressBarContainer = styled.div`
  position: sticky;
  z-index: 10;
  background: white;
  width: 100%;
  height: 3px;
  top: 0;
  left: 0;
  opacity: 0.5;
`

interface ProgressBarPropsType {
  scroll: number
}
export const ProgressBar = styled.div`
  background: red;
  transform-origin: top left;
  transform: scale(${(props: ProgressBarPropsType) => props.scroll});
  height: 3px;
  opacity: 1;
  z-index: 999;
`
export const ContentsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 4;
  align-items: center;

  @media (min-width: 768px) {
    margin-left: 270px;
    width: 1300px;
    margin: 0 auto;
    padding: 100px 0;
  }
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

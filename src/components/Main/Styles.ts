import styled from '@emotion/styled'

export const MainContainer = styled.main`
  /* flex: 4; */
  width: 100vw;
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
  /* transform: scale(0, 0); */
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
`

export const ContentsTitle = styled.h1`
  margin-top: 20px;
  font-size: 50px;
`

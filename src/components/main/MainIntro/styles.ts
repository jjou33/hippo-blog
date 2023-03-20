import styled from '@emotion/styled'

export const MainIntroContainer = styled.div`
  display: flex;
  flex-direction: row;
  @media screen and (max-width: 1200px) {
    flex-direction: column;
  }
`

export const IntroTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const IntroTitle = styled.h1`
  font-weight: 800;
  font-size: 50px;
  margin: 20px auto;
  @media (max-width: 768px) {
    font-size: 25px;
  }
`
export const IntroSubTitle = styled.h3`
  text-align: center;
  font-size: 25px;
  margin: 20px auto;
  @media (max-width: 768px) {
    font-size: 20px;
  }
`

import styled from '@emotion/styled'

export const MainIntroContainer = styled.div`
  display: flex;
  flex-direction: row;
  @media (max-width: 1200px) {
    flex-direction: column;
  }

  @media (max-width: 768px) {
    display: none;
  }
`

export const IntroTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* padding-right: 50px; */
  margin-left: 50px;

  @media (max-width: 1200px) {
    padding-right: 0px;
    margin-top: 50px;
  }
`
export const IntroTitle = styled.h1`
  font-weight: 800;
  font-size: 50px;
  margin: 20px auto;
  @media (max-width: 768px) {
    font-size: 30px;
  }
`
export const IntroSubTitle = styled.h3`
  text-align: center;
  font-size: 25px;
  margin: 20px auto;
  @media (max-width: 768px) {
    font-size: 15px;
  }
`

export const IntroGraphWrapper = styled.div`
  display: grid;
  grid-template-rows: repeat(2, 1fr);
  grid-template-columns: repeat(2, 1fr);
  grid-auto-rows: 100px;
  align-items: center;
  justify-items: center;
  @media (max-width: 1200px) {
    grid-template-rows: repeat(1, 1fr);
    grid-template-columns: repeat(4, 1fr);
  }
  @media (max-width: 768px) {
    display: none;
  }
`
export const SampleCircle = styled.div`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  background: black;
  margin: 0 10px;
`

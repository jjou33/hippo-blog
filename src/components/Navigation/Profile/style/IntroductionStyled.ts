import styled from '@emotion/styled'

export const IntroductionContainer = styled.div`
  width: 100%;
  height: 350px;
  background-image: linear-gradient(0deg, #ebeff4 20%, #c6dcf0 45%);
`

export const IntroductionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 768px) {
    width: 100%;
    height: 300px;
    padding: 0 20px;
  }
`

export const SubTitle = styled.div`
  font-size: 10px;
  font-weight: 400;
  font-style: italic;

  @media (max-width: 768px) {
    font-size: 15px;
  }
`

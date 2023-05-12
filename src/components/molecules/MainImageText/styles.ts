import styled from '@emotion/styled'

export const MainImageTextWrapper = styled.div`
  position: absolute;
  width: 100%;
  text-align: center;
  font-weight: 300;
  top: 20%;
  font-family: 'MontserratAlternates';
  color: white;
  letter-spacing: 5px;
  font-size: 60px;
  background: -webkit-linear-gradient(white, #38495a);
  -webkit-background-clip: text;
  background-clip: text;

  @media screen and (max-width: 768px) {
    font-size: 20px;
  }
`

export const CommentTextWrapper = styled.div`
  /* position: absolute; */
  border-top: 1px solid;
  width: 50%;
  margin: 30px auto;
  font-weight: 300;
  font-size: 40px;
  padding-top: 15px;
  font-family: MontserratAlternates;
  @media screen and (max-width: 768px) {
    font-size: 20px;
  }
`

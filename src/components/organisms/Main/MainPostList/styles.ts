import styled from '@emotion/styled'
import { themedPalette } from 'styles/themeVariables'

export const AllPostListContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`
export const AllPostListWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 50px;
  margin: 0 auto;
  padding: 0px 50px 50px;

  @media (max-width: 1100px) {
    grid-template-columns: repeat(2, 1fr);
    padding: 50px 20px;
  }
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    width: 100%;
    padding: 0 20px;
  }
`

export const Button = styled.button`
  width: 150px;
  height: 50px;
  border: 1px solid;
  border-radius: 50px;
  font-weight: 800;
  font-size: 20px;
  cursor: pointer;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${themedPalette.button_text};
  background: ${themedPalette.button_color};
  transform: scale(1);
  transition: transform 0.5s;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
  &:hover {
    transform: scale(1.05);
    transition: transform 0.5s;
    box-shadow: 0 0 8px rgba(151, 234, 219, 0.15);
  }
  @media screen and (max-width: 768px) {
    margin-top: 30px;
  }
`

import styled from '@emotion/styled'
import { css } from '@emotion/react'
export const ProjectDiaryContainer = styled.div`
  width: 100%;
`

export const ProjectDiaryItemWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 30px;

  @media screen and (max-width: 1400px) {
    grid-template-columns: repeat(1, 1fr);
    width: 100%;
    margin: 0 auto;
  }
`

export const ItemTextWrapper = styled.div`
  color: white;
`
export const ItemImageWrapper = styled.div``

export const ProjectDiaryItemComtainer = styled.div`
  ${(props: any) =>
    css`
      background: linear-gradient(
          to bottom,
          rgba(20, 20, 20, 0) 10%,
          rgba(20, 20, 20, 0.1) 55%,
          rgba(20, 20, 20, 0.6) 100%
        ),
        url(${props.imagePath});
      background-size: cover;
    `};
  border: none;
  height: 350px;
  margin: 50px;
  position: relative;
  width: calc((100vw - calc((100vw - 1200px))) / 2 - 20px);
  border-radius: 20px;
  display: flex;
  margin: 0 auto;
  flex-direction: column;
  padding: 200px 20px 0px 20px;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease 0s;
  cursor: pointer;
  outline: none;

  &:hover {
    box-shadow: 0px 15px 20px rgba(0, 0, 0, 0.1);
    transform: translateY(-7px);
  }

  @media screen and (max-width: 768px) {
    width: 350px;
    padding: 170px 0 0 10px;
  }
`
export const Title = styled.p`
  font-size: 25px;
`
export const Date = styled.p``
export const Category = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 10px;
  margin: 10px -5px;
`
export const CategoryItem = styled.div`
  margin: 2.5px 5px;
  padding: 3px 10px;
  border-radius: 20px;
  background: #ffc75d;
  font-size: 14px;
  font-weight: 700;
  color: #191d23;
`
export const Summary = styled.p`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: normal;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  opacity: 0.6;
  font-size: 20px;
  padding-top: 10px;
`

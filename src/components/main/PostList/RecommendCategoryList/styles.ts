import styled from '@emotion/styled'
import { css } from '@emotion/react'
export const RecommendCategoryContainer = styled.div`
  margin: 0 auto;
`

export const RecommandCategoryWrapper = styled.div`
  display: grid;
  justify-items: center;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 80px;
  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 30px;
  }
`
export const RecommendCategoryItem = styled.div`
  width: 150px;
  height: 150px;
  border: 1px solid;
  border-radius: 20px;
  display: flex;
  @media screen and (max-width: 1200px) {
    width: 120px;
    height: 120px;
  }
`

export const RecommendCategoryImg = styled.div`
  width: 85%;
  height: 85%;
  ${(props: { imagePath: string }) =>
    props.imagePath
      ? css`
          background: url(${props.imagePath});
          background-size: contain;
        `
      : css``}

  border-radius: 50%;
  border: 1px solid;
  margin: auto;
`

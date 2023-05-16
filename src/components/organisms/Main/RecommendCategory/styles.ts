import styled from '@emotion/styled'

export const RecommendCategoryContainer = styled.div`
  width: 100%;
`

export const RecommandCategoryWrapper = styled.div`
  display: grid;
  justify-items: center;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 40px;
  @media screen and (max-width: 1300px) {
    grid-template-columns: repeat(2, 1fr);
  }
`

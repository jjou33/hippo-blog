import styled from '@emotion/styled'
import { keyframes, css } from '@emotion/react'

export const PostCategoryHeaderContainer = styled.div`
  /* padding: 30px 30px 10px; */
  display: flex;
  align-items: center;
  gap: 15px;
  @media screen and (max-width: 768px) {
    gap: 10px;
  }
`
export const PostCategoryIconWrapper = styled.div`
  ${(props: { size: number }) =>
    props.size
      ? css`
          width: ${props.size}px;
          height: ${props.size}px;
        `
      : css`
          font-size: 50px;
        `}
  @media screen and (max-width: 768px) {
    width: 20px;
    height: 20px;
  }
`
export const PostCategoryTitleWrapper = styled.div`
  ${(props: { fontSize: number }) =>
    props.fontSize
      ? css`
          font-size: ${props.fontSize - 10}px;
        `
      : css`
          font-size: 50px;
        `}
  @media screen and (max-width: 768px) {
    font-size: 17px;
  }
`
export const PostCategoryCountWrapper = styled.div`
  ${(props: { fontSize: number }) =>
    props.fontSize
      ? css`
          font-size: ${props.fontSize - 10}px;
        `
      : css`
          font-size: 50px;
        `}
  @media screen and (max-width: 768px) {
    font-size: 17px;
  }
`

import styled from '@emotion/styled'
import { keyframes, css } from '@emotion/react'

export const PostCategoryHeaderContainer = styled.div`
  /* padding: 30px 30px 10px; */
  display: flex;
  gap: 15px;
`
export const PostCategoryIconWrapper = styled.div`
  margin: 7px 0 0 0;
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
`

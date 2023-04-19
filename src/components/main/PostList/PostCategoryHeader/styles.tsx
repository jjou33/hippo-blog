import styled from '@emotion/styled'
import { css } from '@emotion/react'
import { themedPalette } from 'styles/themeVariables'

export const PostCategoryHeaderContainer = styled.div`
  display: flex;
  border-bottom: 1px solid ${themedPalette.border2};
  margin: 50px 0;
`

export const PostCategoryHeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
  margin: 25px 0;
  color: ${themedPalette.text1};
  @media screen and (max-width: 768px) {
    gap: 10px;
    margin: 15px 0;
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
    width: 35px;
    height: 35px;
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
    font-size: 25px;
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
    font-size: 25px;
  }
`

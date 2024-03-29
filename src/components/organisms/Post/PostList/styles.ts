import styled from '@emotion/styled'
import { css } from '@emotion/react'
import { Link } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import { themedPalette } from 'styles/themeVariables'

export const PostCategoryContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 1100px;
  margin: 40px auto;
  height: 100%;

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`

export const PostCateListWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-gap: 30px;
  width: 100%;
  @media screen and (max-width: 768px) {
    padding: 0 20px;
  }
`

export const PostItemContainer = styled.div`
  border-width: 1px 1px 1px 1px;
  border-style: solid;
  border-color: ${themedPalette.border3};
  border-radius: 10px;
  transform: scale(1);
  transition: transform 0.5s;
  box-shadow: 0px 9px 10px -2px rgb(0 0 0 / 10%);
  &:hover {
    transform: scale(1.05);
    transition: transform 0.5s;
    box-shadow: 0px 12px 15px 0px rgb(0 0 0 / 20%);
  }
`

export const PostItemWrapper = styled(Link)`
  display: flex;
  flex-direction: row;
  border-radius: 10px;
  box-shadow: 0 0 8px rgba(151, 234, 219, 0.15);

  cursor: pointer;

  ${(props: { type: string }) =>
    props.type === 'main'
      ? css`
          // recent
          height: 210px;
        `
      : css`
          // category
        `}
`

export const PostItemContent = styled.div`
  flex: 3;
  display: flex;
  flex-direction: column;
  padding: 15px;
  border-radius: 10px;
  color: ${themedPalette.text1};
  border-color: ${themedPalette.border3};
`

export const Title = styled.div`
  display: -webkit-box;
  overflow: hidden;
  margin-bottom: 3px;
  text-overflow: ellipsis;
  white-space: normal;
  overflow-wrap: break-word;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  font-size: 20px;
  font-weight: 700;
  @media screen and (max-width: 768px) {
    font-size: 15px;
  }
`

export const Date = styled.div`
  font-size: 14px;
  font-weight: 400;
  opacity: 0.7;
  @media screen and (max-width: 768px) {
    font-size: 13px;
  }
`

export const Category = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 10px;
  margin: 10px -5px;
  @media (max-width: 768px) {
    display: none;
  }
`
export const CategoryItem = styled.div`
  margin: 2.5px 5px;
  padding: 3px 10px;
  border-radius: 20px;
  background: ${themedPalette.badge_color};
  color: ${themedPalette.badge_text};
  font-size: 14px;
  font-weight: 700;
`

export const Summary = styled.div`
  display: -webkit-box;
  overflow: hidden;
  margin: auto 0;
  text-overflow: ellipsis;
  white-space: normal;
  overflow-wrap: break-word;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  font-size: 16px;
  /* opacity: 0.8; */
  @media screen and (max-width: 768px) {
    font-size: 10px;
  }
`

export const ThumbnailWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
`
export const ThumbnailImage = styled(GatsbyImage)`
  height: 190px;
  width: 190px;
  border-radius: 20px;

  ${(props: { type: string }) =>
    props.type === 'main'
      ? css`
          // Category
          @media screen and (max-width: 768px) {
            display: none;
          }
        `
      : css`
          // recent
          @media screen and (max-width: 768px) {
            height: 100px;
            width: 100px;
          }
        `}
`

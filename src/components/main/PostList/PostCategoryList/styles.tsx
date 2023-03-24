import styled from '@emotion/styled'
import { css } from '@emotion/react'
import { Link } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'

export const PostCategoryContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1100px;
  margin: 40px auto;
  height: 100%;
`

export const PostCateListWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-gap: 30px;
  width: 100%;
  margin: 0 auto;
`

export const PostItemContainer = styled.div`
  border-width: 1px 1px 1px 1px;
  border-style: solid;
  border-color: #e5e7eb;
  border-radius: 10px;
  transform: scale(1);
  transition: transform 0.5s;
  &:hover {
    transform: scale(1.05);
    transition: transform 0.5s;
    box-shadow: 0 0 8px rgba(151, 234, 219, 0.15);
  }
`

export const PostItemWrapper = styled(Link)`
  display: flex;
  flex-direction: row;
  border-radius: 10px;
  box-shadow: 0 0 8px rgba(151, 234, 219, 0.15);

  cursor: pointer;
`

export const PostItemContent = styled.div`
  flex: 3;
  display: flex;
  flex-direction: column;
  padding: 15px;
  background-color: white;
  border-radius: 10px;
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
`

export const Date = styled.div`
  font-size: 14px;
  font-weight: 400;
  opacity: 0.7;
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
  background: #ffc75d;
  font-size: 14px;
  font-weight: 700;
  color: #191d23;
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
  opacity: 0.8;
`

export const ThumbnailWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
`
export const ThumbnailImage = styled(GatsbyImage)`
  height: 200px;
  width: 200px;
  border-radius: 20px;

  ${(props: { type: string }) =>
    props.type
      ? css`
          // recent
          @media screen and (max-width: 1500px) {
            display: none;
          }
        `
      : css`
          // category
          @media screen and (max-width: 768px) {
            height: 100px;
            width: 100px;
          }
        `}
  @media screen and (max-width: 768px) {
    height: 100px;
    width: 100px;
  }
`

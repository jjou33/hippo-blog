import styled from '@emotion/styled'
import { css } from '@emotion/react'
import { Link } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'

export const RecentPostContainer = styled.div`
  width: 1200px;
`

export const RecentHeaderWrapper = styled.div`
  margin: 50px auto;
`
export const RecentPostsWrapper = styled.div`
  display: flex;
`

export const FirstPostWrapper = styled.div`
  margin-right: 30px;
`
export const OtherPostWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`
interface PostItemContainerPropsType {
  ref: (node?: Element | null) => void
  inview: boolean
}

export const PostItemContainer = styled.div`
  height: 700px;
  margin: auto;
  /* ${(props: PostItemContainerPropsType) =>
    props.inview
      ? css`
          opacity: 1;
          transform: scale(100%);
          transition: 2s;
        `
      : css`
          opacity: 0;
          transform: scale(85%);
          transition: 2s;
        `}; */
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
  flex-direction: column;
  width: 500px;
  height: 100%;
  border-radius: 10px;
  box-shadow: 0 0 8px rgba(151, 234, 219, 0.15);
  transition: 0.3s box-shadow;

  cursor: pointer;

  &:hover {
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  }
`

export const ThumbnailImage = styled(GatsbyImage)`
  width: 100%;
  height: 350px;
  border-radius: 10px 10px 0 0;
`
export const PostItemBadgeWrapper = styled.div`
  position: absolute;
  z-index: 1000;
  margin: 10px 10px;
`

export const PostItemContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 15px;
  background-color: var(--white-color);
  border-radius: 10px;
  border-width: 0px 0.5px 0.5px 0.5px;
  border-style: solid;
  border-color: #e5e7eb;
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

export const OtherItemContainer = styled.div`
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

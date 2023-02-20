import styled from '@emotion/styled'
import { css } from '@emotion/react'
import { Link } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'

interface ButtonPropsType {
  current?: string | null
}

export const PostListWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 30px;
  width: 100%;
  margin: 0 auto;
  padding: 50px 50px 100px;

  @media (max-width: 1300px) {
    grid-template-columns: repeat(2, 1fr);
    width: 80%;
    padding: 50px 20px;
  }
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    width: 100%;
    padding: 50px 20px;
  }
`

export const PostListContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 1100px;
`
export const FooterWrapper = styled.div`
  display: grid;
  place-items: center;
  margin-top: auto;
  padding: 50px 0;
  font-size: 15px;
  text-align: center;
  line-height: 1.5;
  border: 3px;
  border-style: dashed;

  @media (max-width: 768px) {
    font-size: 13px;
  }
`

export const PostItemBadgeWrapper = styled.div`
  position: absolute;
  z-index: 1000;
  margin: 10px 10px;
`
interface PostItemContainerPropsType {
  ref: (node?: Element | null) => void
  inview: boolean
}

export const PostItemContainer = styled.div`
  ${(props: PostItemContainerPropsType) =>
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
        `}
`
export const PostItemWrapper = styled(Link)`
  display: flex;
  flex-direction: column;
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
  height: 200px;
  border-radius: 10px 10px 0 0;
`

export const PostItemContent = styled.div`
  flex: 1;
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
`

export const CategoryItem = styled.div`
  margin: 2.5px 5px;
  padding: 3px 5px;
  border-radius: 3px;
  background: black;
  font-size: 14px;
  font-weight: 700;
  color: white;
`

export const Summary = styled.div`
  display: -webkit-box;
  overflow: hidden;
  margin-top: auto;
  text-overflow: ellipsis;
  white-space: normal;
  overflow-wrap: break-word;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  font-size: 16px;
  opacity: 0.8;
`

export const Nav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
  margin: 16px;
`

export const Button = styled.button`
  border: none;
  border-radius: 8px;
  padding: 8px;
  margin: 0;
  background: black;
  color: white;
  font-size: 1rem;

  &:hover {
    background: tomato;
    cursor: pointer;
    transform: translateY(-2px);
  }

  &[disabled] {
    background: grey;
    cursor: revert;
    transform: revert;
  }

  ${(props: ButtonPropsType) =>
    props.current === 'page'
      ? css`
          background: #e0f09a;
          color: black;
          font-weight: bold;
          cursor: revert;
          transform: revert;
        `
      : ''}
`

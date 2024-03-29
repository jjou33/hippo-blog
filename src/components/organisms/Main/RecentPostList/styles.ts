import styled from '@emotion/styled'
import { css, keyframes } from '@emotion/react'
import { Link } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import { themedPalette } from 'styles/themeVariables'

export const shakingIcon = keyframes`
0% {
  transform: rotate(7deg);
}

30% {
  transform: rotate(-7deg);
}

70% {
  transform: rotate(7deg);
}
50% {
  transform: rotate(-7deg);
}
`

export const PostSeqenceWrapper = styled.div`
  position: absolute;
  z-index: 1000;

  ${(props: { type: string }) =>
    props.type === 'first'
      ? css`
          animation: ${upDownAnimation} 0.6s infinite ease-in-out alternate;
          right: 93%;
          bottom: 96%;
        `
      : css`
          right: 95%;
          bottom: 92%;
        `}
`

export const RecentPostContainer = styled.div`
  width: 100%;
  @media screen and (max-width: 768px){
    display: none;
  }
`
export const RecentPostsWrapper = styled.div`
  display: flex;
  height: 700px;
  width: 90%;
  margin: 0 auto;
  @media screen and (max-width: 768px) {
    height: 700px;
  }
`

export const VerticalPostWrapper = styled.div`
  margin-right: 20px;
  width: 50%;

  @media (max-width: 1400px) {
    margin-right: 0px;
    width: 100%;
  }

  @media screen and (max-width: 768px) {
    margin-right: 0px;
    width: 100%;
  }
`

export const HorizonPostContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 20px;
  width: 50%;
  @media (max-width: 1400px) {
    display: none;
  }
`

export const HorizonPostWrapper = styled.div`
  border-width: 1px 1px 1px 1px;
  border-style: solid;
  border-color: ${themedPalette.border3};
  border-radius: 10px;
  transform: scale(1);
  transition: transform 0.5s;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
  &:hover {
    transform: scale(1.05);
    transition: transform 0.5s;
    box-shadow: 0px 15px 20px rgba(0, 0, 0, 0.1);
    background-color: ${themedPalette.bg_element1};
    ${PostSeqenceWrapper} {
      animation: ${shakingIcon} 0.5s ease;
    }
  }
`

export const upDownAnimation = keyframes`
 from{
   transform: translatey(2px);
 }
 to{
   transform: translatey(-2px);
 }
`

export const ThumbnailWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
`

export const FirstPostWrapper = styled.div`
  margin-right: 30px;
  width: 50%;
  @media (max-width: 1400px) {
    margin: 0 auto;
    width: 100%;
  }
`

export const PostItemContainer = styled.div`
  height: 100%;

  border-width: 1px 1px 1px 1px;
  border-style: solid;
  border-color: ${themedPalette.border3};
  border-radius: 10px;
  transform: scale(1);
  transition: transform 0.5s;
  &:hover {
    transform: scale(1.05);
    transition: transform 0.5s;
    box-shadow: 0 0 8px rgba(151, 234, 219, 0.15);

    ${PostSeqenceWrapper} {
      animation: ${shakingIcon} 0.5s ease;
    }
  }
`

export const PostSequenceIcon = styled.img``
export const PostItemWrapper = styled(Link)`
  display: flex;
  flex-direction: column;
  height: 100%;
  border-radius: 10px;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
  transition: 0.3s box-shadow;

  cursor: pointer;

  &:hover {
    box-shadow: 0px 15px 20px rgba(0, 0, 0, 0.1);
    background-color: ${themedPalette.bg_element1};
  }
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`
export const ThumbnailImage = styled(GatsbyImage)`
  width: 100%;
  height: 300px;
  border-radius: 10px 10px 0 0;
`

export const PostItemContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 15px;
  color: ${themedPalette.text1};
  border-radius: 10px;
  border-width: 0px 0.5px 0.5px 0.5px;
  border-style: solid;
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
  font-size: 30px;
  font-weight: 700;
  @media screen and (max-width: 768px) {
    font-size: 20px;
  }
`

export const Date = styled.div`
  font-size: 20px;
  font-weight: 400;
  opacity: 0.7;
  @media screen and (max-width: 768px) {
    font-size: 15px;
  }
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
  opacity: 0.8;
  @media screen and (max-width: 768px) {
    font-size: 10px;
  }
`

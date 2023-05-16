import styled from '@emotion/styled'
import { keyframes } from '@emotion/react'
import { css } from '@emotion/react'
import SkeletonUI from 'components/common/Skeleton/SkeletonUI'

export const shaking_in_animation = keyframes`
 0% {
   transform: rotate(15deg);
 }
 
 30% {
   transform: rotate(-15deg);
 }
 
 70% {
   transform: rotate(15deg);
 }
 100% {
   transform: rotate(-15deg);
 }
 `

export const CategoryTitleIconWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 30px;
  height: 30px;
  margin: 0 8px 0 10px;
`
interface IsOpenPropsType {
  isOpen: boolean
  categoryItemCount?: number
}
export const CategoryItemOpenArrow = styled.div`
  float: right;
  cursor: pointer;
  margin-right: 25px;
  ${(props: IsOpenPropsType) =>
    props.isOpen
      ? css`
          transform: rotate(90deg);
        `
      : css`
          transform: rotate(0deg);
          padding-top: 4px;
        `};
`

export const CategoryTitleContainer = styled.li`
  position: relative;
  display: flex;
  gap: 5px;
  align-items: center;
  margin: 0 10px;
  height: 40px;
  border-radius: 5px;

  span {
    display: block;
    position: absolute;
    background: #8accee;
  }
  span:nth-of-type(1) {
    left: 1;
    bottom: 0;
    width: 100%;
    height: 1.5px;
    transform: scaleX(0);
    transform-origin: right;
    transition: transform 0.5s;
  }

  &:hover {
    background: #dcfbed;

    ${CategoryTitleIconWrapper} {
      animation: ${shaking_in_animation} 0.4s ease;
    }
    ${CategoryItemOpenArrow} {
      scale: 1;
      transition: 0.3s;
    }

    span:nth-of-type(1) {
      transform: scaleX(1);
      transform-origin: left;
      transition: transform 0.5s;
    }
  }
`

export const CartegoryTitleText = styled.p`
  cursor: pointer;
  flex-grow: 1;
  display: flex;
  align-items: center;
  position: relative;
  font-size: 22px;
`

export const DropdownWrapper = styled.article`
  overflow: hidden;
  margin-left: 30px;
  height: 0;
  transition: height ease-in-out 0.3s;
  ${(props: IsOpenPropsType) => {
    if (props.isOpen) {
      return css`
        height: ${(props.categoryItemCount as number) * 45 + 10}px;
      `
    } else {
      return css`
        height: 0px;
      `
    }
  }}
`

/**
 * Category Skeleton Ui Component Styled Section
 * @description: 카테고리 리스트 깜박임 방지 Skeleton UI 영역
 */

export const SkeletonContainer = styled.div`
  width: 100%;
  margin-top: 15px;
  margin-right: 3px;
  @media (max-width: 768px) {
    width: 100%;
    margin-top: 50px;
    padding: 0 20px;
  }
`

export const SkeletonRootTitle = styled.div`
  display: flex;
  margin: 25px 10px 10px 0px;
  width: 100%;
`

export const SkeletonRootIcon = styled(SkeletonUI)`
  margin: 0px 5px 10px 10px;
  width: 30px;
`

export const SkeletonRootItem = styled(SkeletonUI)`
  width: 100px;
`

export const SkeletonTitleContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;

  width: 230px;
  height: 40px;
  margin: 10px 0 0 10px;
  border-radius: 5px;
`
export const SkeletonTitleIcon = styled(SkeletonUI)`
  display: flex;
  border-radius: 50%;
  align-items: center;
  width: 25px;
  height: 25px;
  margin: -8px 8px 0 10px;
`
export const SkeletonItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px 0 0 0;
`

export const SkeletonTitleText = styled(SkeletonUI)`
  cursor: pointer;
  flex-grow: 1;
  align-items: center;
  width: 100px;
  margin: -8px 8px 0 0px;
`
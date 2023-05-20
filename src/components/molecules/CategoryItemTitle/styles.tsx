import styled from '@emotion/styled'
import { keyframes } from '@emotion/react'
import { css } from '@emotion/react'

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

export const CartegoryTitleText = styled.div`
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

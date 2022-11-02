import styled from '@emotion/styled'
import { keyframes } from '@emotion/react'
import { css } from '@emotion/react'
import { shaking_in_animation } from 'styles/AnimationKeyframes'
interface IsOpenPropsType {
  isOpen: boolean
}

export const dropdown_in_animation = keyframes`
  0% {
    transform: translateY(-100%);
  }

  100% {
    transform: translateY(0);
  }
`

export const dropdown_out_animation = keyframes`
  0% {
    transform: translateY(0);
  }

  100% {
    transform: translateY(-100%);
  }
`

export const CategoryTitleIconWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 20px;
  height: 20px;
  margin: 0 8px 0 10px;
`

export const CategoryItemOpenArrow = styled.div`
  float: right;
  cursor: pointer;
  margin-right: 10px;
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

export const CategoryTitleContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;

  width: 230px;
  height: 40px;
  margin: 0 auto;
  border-radius: 5px;
  transition: all ease 1s 0s;

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

  ${(props: IsOpenPropsType) =>
    props.isOpen
      ? css`
          background: #fff9ec;
        `
      : css``}

  &:hover {
    background: #fff9ec;

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
  font-size: 13px;
`

export const DropdownWrapper = styled.article`
  overflow: hidden;
  margin-left: 30px;

  ul {
    animation: ${(props: IsOpenPropsType) =>
      props.isOpen
        ? css`
            ${dropdown_in_animation} .4s ease;
          `
        : css`
            ${dropdown_out_animation} .4s ease;
          `};
  }
`

import styled from '@emotion/styled'
import { keyframes } from '@emotion/react'
import { css } from '@emotion/react'
import { shaking_in_animation } from 'styles/AnimationKeyframes'
interface DropdownPropsType {
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

export const textHighlightAnimation = css`
  position: relative;
  font-size: 10px;
  text-decoration: none;
  letter-spacing: 1px;
  text-transform: uppercase;

  -webkit-text-stroke: 1px rgba(5, 4, 4, 0.5);

  &::before {
    content: attr(data-text);
    position: absolute;
    color: black;
    width: 0;
    overflow: hidden;
    transition: 1.5s;
  }

  &:hover {
    &::before {
      width: 100%;
      filter: drop-shadow(0 0 15px #00ade1);
    }
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
  ${(props: DropdownPropsType) =>
    props.isOpen
      ? css`
          transform: rotate(90deg);
        `
      : css`
          transform: rotate(0deg);
          padding-top: 4px;
        `};
  ${textHighlightAnimation}
`

interface HighlightPropsType {
  isOpen: boolean
}

export const CategoryTitleContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;

  width: 230px;
  height: 40px;
  margin: 0 auto;
  border-radius: 10px;
  transition: all ease 0.5s 0s;
  ${(props: HighlightPropsType) =>
    props.isOpen
      ? css`
          background: #def2f2;
          box-shadow: 1px 1px 1px #aecbcb, inset 0px 0px 1px #aecbcb;
        `
      : css``}

  &:hover {
    background: #def2f2;
    box-shadow: 1px 1px 1px gray, inset 0px 0px 1px gray;
    ${CategoryTitleIconWrapper} {
      animation: ${shaking_in_animation} 0.4s ease;
    }
    ${CategoryItemOpenArrow} {
      scale: 1;
      transition: 0.3s;
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
  /* ${textHighlightAnimation} */
`

export const DropdownWrapper = styled.article`
  overflow: hidden;
  margin-left: 40px;
  ul {
    animation: ${(props: DropdownPropsType) =>
      props.isOpen
        ? css`
            ${dropdown_in_animation} .5s ease;
          `
        : css`
            ${dropdown_out_animation} .5s ease;
          `};
  }
`

import React, { ReactNode, useEffect, useState } from 'react'
import { css, keyframes } from '@emotion/react'
import styled from '@emotion/styled'
import { useDropdownEffect } from 'hooks/useDropdownEffect'
import { getSvgJSXElement } from 'utils/Common/Common'
import { shaking_in_animation } from 'styles/AnimationKeyframes'

/**
 * @description CategoryTitle 타입
 */
interface CategoryTitleProps {
  children: ReactNode
  categoryItem: string
}

const dropdown_in_animation = keyframes`
  0% {
    transform: translateY(-100%);
  }

  100% {
    transform: translateY(0);
  }
`

const dropdown_out_animation = keyframes`
  0% {
    transform: translateY(0);
  }

  100% {
    transform: translateY(-100%);
  }
`

const textHighlightAnimation = css`
  position: relative;
  font-size: 13px;
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

const CategoryTitleIconWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 20px;
  height: 20px;
  margin: 0 8px 0 5px;
`

const CategoryItemOpenArrow = styled.div`
  float: right;
  cursor: pointer;

  ${(props: DropdownPropsType) =>
    props.isOpen
      ? css`
          transform: scaleY(-1);
        `
      : css`
          transform: scaleY(1);
          padding-top: 8px;
        `};
  ${textHighlightAnimation}
`
const CategoryTitleContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;

  width: 187px;
  height: 40px;
  margin: 0 auto;

  &:hover {
    ${CategoryTitleIconWrapper} {
      animation: ${shaking_in_animation} 0.4s ease;
    }
    ${CategoryItemOpenArrow} {
      scale: 1;
      transition: 0.3s;
    }
  }
`

const CartegoryTitleText = styled.p`
  cursor: pointer;
  flex-grow: 1;
  display: flex;
  align-items: center;
  position: relative;
  font-size: 13px;
  ${textHighlightAnimation}
`
interface DropdownPropsType {
  isOpen: boolean
}

const DropdownWrapper = styled.article`
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

const CategoryTitle = ({ children, categoryItem }: CategoryTitleProps) => {
  // Hook 을 활용하여 각 Title 에 Ref 설정 및 Open/Close Effect 추가
  const { isOpen, toggleTitle, titleRef } = useDropdownEffect(false)

  // Dropdown Animation 을 위한 Props
  const [isAnimation, setIsAnimation] = useState(false)

  // isOpen 이 변경될 경우 isAnimation 은 Delay 를 가지고 변경
  useEffect(() => {
    if (isOpen) {
      setIsAnimation(true)
    } else {
      setTimeout(() => {
        setIsAnimation(false)
      }, 250)
    }
  }, [isOpen])

  return (
    <>
      <CategoryTitleContainer ref={titleRef} onClick={toggleTitle}>
        <CategoryTitleIconWrapper>
          {getSvgJSXElement(categoryItem, '18')}
        </CategoryTitleIconWrapper>
        <CartegoryTitleText data-text={categoryItem}>
          {categoryItem}
        </CartegoryTitleText>
        <CategoryItemOpenArrow isOpen={isOpen}>
          {getSvgJSXElement('OpenArrow', '18')}
        </CategoryItemOpenArrow>
      </CategoryTitleContainer>

      <DropdownWrapper isOpen={isOpen}>
        {isAnimation && children}
      </DropdownWrapper>
    </>
  )
}

export default CategoryTitle

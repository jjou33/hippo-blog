import React, { ReactNode, useEffect, useState } from 'react'
import { css, keyframes } from '@emotion/react'
import styled from '@emotion/styled'
import { CategoryNavIconProps } from 'types/Category.types'
import { useDropdownEffect } from 'hooks/useDropdownEffect'
import { CategoryItem } from './CategoryItems'
interface CategoryTitleProps extends CategoryNavIconProps {
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
const shaking_in_animation = keyframes`
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
const open_close_rotate_animation = keyframes`
  0% {
    transform: scaleY(0);
  }

  100% {
    transform: scaleY(100%);
  }
`

const close_open_rotate_animation = keyframes`
  0% {
    transform: rotate(100%);
  }

  100% {
    transform: rotate(0);
  }
`

const CategoryTitleIconWrapper = styled.div`
  width: 20px;
  height: 20px;
  margin-right: 8px;
  margin-left: 5px;
  display: flex;
  align-items: center;
`

const CategoryTitleContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  border-radius: 10px;
  width: 12rem;
  height: 3rem;
  border-width: 1px;
  border-style: solid;
  border-color: black;
  background-color: white;
  transition: background, 1s;

  &:hover {
    ${CategoryTitleIconWrapper} {
      animation: ${shaking_in_animation} 0.4s ease;
    }
    background-color: #c2f8f5;
  }
`

const CategoryTitleAll = styled.div``
const CartegoryTitleText = styled.p`
  cursor: pointer;
  flex-grow: 1;
`
const CategoryItemOpenArrow = styled.div`
  margin-right: 10px;
  /* animation: ${open_close_rotate_animation} 0.5s ease; */
  transform: ${(props: any) =>
    props.isOpen
      ? css`
          ${open_close_rotate_animation} 0.5s ease;
        `
      : css`
          ${close_open_rotate_animation} 0.5s ease;
        `};
`
type DropdownPropsType = {
  isOpen: boolean
}
const DropdownWrapper = styled.article`
  overflow: hidden;
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
const CategoryTitle = ({
  children,
  categoryItem,
  navIconSet,
}: CategoryTitleProps) => {
  // Hook 을 활용하여 각 Title 에 Ref 설정 및 Open/Close Effect 추가
  const { isOpen, toggleTitle, titleRef } = useDropdownEffect()

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
          {navIconSet[categoryItem] !== undefined
            ? navIconSet[categoryItem].icon('18', '18')
            : ''}
        </CategoryTitleIconWrapper>
        <CartegoryTitleText>{categoryItem}</CartegoryTitleText>
        <CategoryItemOpenArrow isOpen={isOpen}>
          {navIconSet['OpenArrow'] !== undefined
            ? navIconSet['OpenArrow'].icon('14', '14')
            : ''}
        </CategoryItemOpenArrow>
      </CategoryTitleContainer>
      <DropdownWrapper isOpen={isOpen}>
        {isAnimation && children}
      </DropdownWrapper>
    </>
  )
}

export default CategoryTitle

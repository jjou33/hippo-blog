import React, { ReactNode, useEffect, useState } from 'react'
import { css, keyframes } from '@emotion/react'
import styled from '@emotion/styled'
import { CategoryNavIconProps } from 'types/Category.types'
import { useDropdownEffect } from 'hooks/useDropdownEffect'

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
    background-color: #dfebdb;
    color: black;
  }
`

const CartegoryTitleText = styled.p`
  cursor: pointer;
`
const CategoryTitleIconWrapper = styled.div`
  width: 20px;
  height: 20px;
  margin-right: 8px;
  margin-left: 5px;
  display: flex;
  align-items: center;
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
      </CategoryTitleContainer>
      <DropdownWrapper isOpen={isOpen}>
        {isAnimation && children}
      </DropdownWrapper>
    </>
  )
}

export default CategoryTitle

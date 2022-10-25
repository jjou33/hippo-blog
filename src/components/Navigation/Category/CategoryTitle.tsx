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

const CategoryTitleIconWrapper = styled.div`
  width: 20px;
  height: 20px;
  margin-right: 8px;
  margin-left: 5px;
  display: flex;
  align-items: center;
`
const CategoryItemOpenArrow = styled.div`
  margin-right: 10px;
  scale: 0;
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
`
const HoverEffect = styled.div``
const CategoryTitleContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  /* margin-bottom: 10px; */
  /* border-radius: 10px; */
  width: 187px;
  height: 40px;
  margin: 0 auto;
  /* transition: background, 1s; */

  &:hover {
    ${CategoryTitleIconWrapper} {
      animation: ${shaking_in_animation} 0.4s ease;
    }
    ${CategoryItemOpenArrow} {
      scale: 1;
      transition: 0.5s;
    }
  }
`

const CategoryTitleAll = styled.div``
const CartegoryTitleText = styled.p`
  cursor: pointer;
  flex-grow: 1;
`

type DropdownPropsType = {
  isOpen: boolean
}

const DropdownWrapper = styled.article`
  overflow: hidden;
  margin-left: 30px;
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
        <span></span>
        <span></span>
        <span></span>
        <span></span>
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

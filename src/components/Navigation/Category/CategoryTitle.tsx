import React, { ReactNode } from 'react'
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
  background-color: #fdf1ed;
`

const CategoryTitleIconWrapper = styled.div`
  width: 20px;
  height: 20px;
  margin-right: 8px;
  margin-left: 5px;
  display: flex;
  align-items: center;
`

const Temp = styled.div`
  overflow: hidden;
  ul {
    animation: ${props =>
      props.isOpen
        ? css`
            ${dropdown_in_animation} .6s ease;
          `
        : css`
            ${dropdown_out_animation} .6s ease;
          `};
  }
`
const CategoryTitle = ({
  children,
  categoryItem,
  navIconSet,
}: CategoryTitleProps) => {
  const { isOpen, toggleTitle, titleRef } = useDropdownEffect()

  return (
    <>
      <CategoryTitleContainer ref={titleRef} onClick={toggleTitle}>
        <CategoryTitleIconWrapper>
          {navIconSet[categoryItem] !== undefined
            ? navIconSet[categoryItem].icon('18', '18')
            : ''}
        </CategoryTitleIconWrapper>
        {categoryItem}
      </CategoryTitleContainer>
      <Temp isOpen={isOpen}>{isOpen && children}</Temp>
    </>
  )
}

export default CategoryTitle

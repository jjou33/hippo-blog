import React, { ReactNode, useEffect, useState } from 'react'
import { useDropdownEffect } from 'hooks/useDropdownEffect'
import { getSvgJSXElement } from 'utils/Common/Common'
import {
  CartegoryTitleText,
  CategoryItemOpenArrow,
  CategoryTitleContainer,
  CategoryTitleIconWrapper,
  DropdownWrapper,
} from './style/CategoryTitleStyled'

/**
 * @description CategoryTitle 타입
 */

interface CategoryTitleProps {
  children: ReactNode
  categoryItem: string
}

const CategoryTitle = ({ children, categoryItem }: CategoryTitleProps) => {
  const { isOpen, toggleTitle, titleRef } = useDropdownEffect(false)
  const [isAnimation, setIsAnimation] = useState(false)

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

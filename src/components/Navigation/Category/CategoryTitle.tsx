import React, { ReactNode, useEffect, useState } from 'react'
import { useDropdownEffect } from 'hooks/useDropdownEffect'
import { getSvgJSXElement } from 'utils/Common/Common'
import * as Styled from './style/CategoryTitleStyled'

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
      <Styled.CategoryTitleContainer
        isOpen={isOpen}
        ref={titleRef}
        onClick={toggleTitle}
      >
        <Styled.CategoryTitleIconWrapper>
          {getSvgJSXElement(categoryItem, '18')}
        </Styled.CategoryTitleIconWrapper>
        <Styled.CartegoryTitleText data-text={categoryItem}>
          {categoryItem}
        </Styled.CartegoryTitleText>
        <Styled.CategoryItemOpenArrow isOpen={isOpen}>
          {getSvgJSXElement('NonFilledArrow', '14')}
        </Styled.CategoryItemOpenArrow>
      </Styled.CategoryTitleContainer>

      <Styled.DropdownWrapper isOpen={isOpen}>
        {isAnimation && children}
      </Styled.DropdownWrapper>
    </>
  )
}

export default CategoryTitle

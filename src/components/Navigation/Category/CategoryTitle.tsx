import React, { ReactNode, useEffect, useState } from 'react'
import { useDropdownEffect } from 'hooks/useDropdownEffect'
import { getSvgJSXElement } from 'utils/Common/Common'
import { useRecoilState, atom, useRecoilValue } from 'recoil'
import { recoilDropdownState } from 'states/recoilDropdownState'
import { templateMountState } from 'states/templateMountState'
import * as Styled from './style/CategoryTitleStyled'

/**
 * @description CategoryTitle 타입
 */

interface CategoryTitleProps {
  children: ReactNode
  categoryItem: string
  categoryItemCount: number
}

interface RecoilToggleStateType {
  [key: string]: boolean
}

const CategoryTitle = ({
  children,
  categoryItem,
  categoryItemCount,
}: CategoryTitleProps) => {
  const state = useRecoilValue<RecoilToggleStateType>(recoilDropdownState)

  const { isOpen, toggleTitle, titleRef } = useDropdownEffect(categoryItem)
  const [isAnimation, setIsAnimation] = useState(false)

  const isOpenFilter = (state: RecoilToggleStateType) => {
    return state[categoryItem] === true ? true : false
  }

  useEffect(() => {
    if (isOpenFilter(state)) {
      setIsAnimation(true)
    } else {
      setTimeout(() => {
        setIsAnimation(false)
      }, 250)
    }
  }, [isOpen])

  // useEffect(() => {
  //   console.log(templateValue)
  // }, [templateValue])

  return (
    <>
      <Styled.CategoryTitleContainer
        isOpen={isOpenFilter(state)}
        ref={titleRef}
        onClick={toggleTitle}
      >
        <span></span>

        <Styled.CategoryTitleIconWrapper>
          {getSvgJSXElement(categoryItem, '18')}
        </Styled.CategoryTitleIconWrapper>
        <Styled.CartegoryTitleText>{categoryItem}</Styled.CartegoryTitleText>
        <Styled.CategoryItemOpenArrow isOpen={isOpenFilter(state)}>
          {getSvgJSXElement('NonFilledArrow', '14')}
        </Styled.CategoryItemOpenArrow>
      </Styled.CategoryTitleContainer>
      <Styled.DropdownWrapper
        isOpen={isOpenFilter(state)}
        categoryItemCount={categoryItemCount}
      >
        {isAnimation && children}
      </Styled.DropdownWrapper>
    </>
  )
}

export default CategoryTitle

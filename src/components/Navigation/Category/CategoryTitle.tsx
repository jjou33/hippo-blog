import React, { ReactNode, useEffect, useState } from 'react'
import { useDropdownEffect } from 'hooks/useDropdownEffect'
import { getSvgJSXElement } from 'utils/Common/Common'
import { useRecoilValue } from 'recoil'
import { recoilDropdownState } from 'states/recoilDropdownState'

import * as S from './Styles'
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

  return (
    <>
      <S.CategoryTitleContainer
        isOpen={isOpenFilter(state)}
        ref={titleRef}
        onClick={e => {
          toggleTitle(categoryItem)
        }}
      >
        <span></span>

        <S.CategoryTitleIconWrapper>
          {getSvgJSXElement(categoryItem, '18')}
        </S.CategoryTitleIconWrapper>
        <S.CartegoryTitleText>{categoryItem}</S.CartegoryTitleText>
        <S.CategoryItemOpenArrow isOpen={isOpenFilter(state)}>
          {getSvgJSXElement('NonFilledArrow', '14')}
        </S.CategoryItemOpenArrow>
      </S.CategoryTitleContainer>
      <S.DropdownWrapper
        isOpen={isOpenFilter(state)}
        categoryItemCount={categoryItemCount}
      >
        {isAnimation && children}
      </S.DropdownWrapper>
    </>
  )
}

export default CategoryTitle

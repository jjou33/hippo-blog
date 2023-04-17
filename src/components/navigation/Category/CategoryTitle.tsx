import React, { ReactNode, useEffect, useState } from 'react'

import { useCategoryState } from 'hooks/useCategoryOpenState'
import { useRecoilValue } from 'recoil'
import { recoilDropdownState } from 'states/recoilDropdownState'
import { getSvgJSXElement } from 'utils/imageBridge'
import * as S from './styles'
/**
 * @description CategoryTitle 타입
 */

interface CategoryTitleProps {
  children: ReactNode
  categoryItem: string
  categoryItemCount: number
}

const CategoryTitle = ({
  children,
  categoryItem,
  categoryItemCount,
}: CategoryTitleProps) => {
  const state = useRecoilValue<{ [key: string]: boolean }>(recoilDropdownState)

  const { isOpen, toggleTitle, titleRef } = useCategoryState()

  const [isAnimation, setIsAnimation] = useState(false)

  const isOpenFilter = (state: { [key: string]: boolean }) => {
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
          {getSvgJSXElement(categoryItem, '25')}
        </S.CategoryTitleIconWrapper>
        <S.CartegoryTitleText>{categoryItem}</S.CartegoryTitleText>
        <S.CategoryItemOpenArrow isOpen={isOpenFilter(state)}>
          {getSvgJSXElement('NonFilledArrow', '18')}
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

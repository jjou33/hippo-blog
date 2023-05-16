import React, { ReactNode, useEffect, useState } from 'react'
import * as S from './styles'

import IconWrapper from 'components/atom/IconWrapper'
import StaticText from 'components/atom/StaticText'
import { useCategoryState } from 'hooks/useCategoryOpenState'
import { useRecoilValue } from 'recoil'
import { recoilDropdownState } from 'states/recoilDropdownState'

interface CategoryTitleProps {
  children: ReactNode
  categoryItem: string
  categoryItemCount: number
}

const CategoryItemTitle = ({
  children,
  categoryItem,
  categoryItemCount,
}: CategoryTitleProps) => {
  const dropDownState =
    useRecoilValue<{ [key: string]: boolean }>(recoilDropdownState)[
      categoryItem
    ] === true
      ? true
      : false
  const { isOpen, toggleTitle, titleRef } = useCategoryState()
  const [openState, setOpenState] = useState(false)

  useEffect(() => {
    if (dropDownState) {
      setOpenState(true)
    } else {
      setTimeout(() => {
        setOpenState(false)
      }, 250)
    }
  }, [isOpen])

  return (
    <>
      <S.CategoryTitleContainer
        ref={titleRef}
        onClick={() => {
          toggleTitle(categoryItem)
        }}
      >
        <S.CategoryTitleIconWrapper>
          <IconWrapper iconName={categoryItem} iconSize={25} />
        </S.CategoryTitleIconWrapper>

        <S.CartegoryTitleText>
          <StaticText text={categoryItem} fontSize={22} fontWeight={600} />
        </S.CartegoryTitleText>
        <S.CategoryItemOpenArrow isOpen={dropDownState}>
          <IconWrapper iconName="NonFilledArrow" iconSize={18} />
        </S.CategoryItemOpenArrow>
      </S.CategoryTitleContainer>
      <S.DropdownWrapper
        isOpen={dropDownState}
        categoryItemCount={categoryItemCount}
      >
        {openState && children}
      </S.DropdownWrapper>
    </>
  )
}

export default CategoryItemTitle

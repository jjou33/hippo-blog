import styled from '@emotion/styled'
import { keyframes } from '@emotion/react'
import { css } from '@emotion/react'
import { ReactNode } from 'react'
import { Link } from 'gatsby'

export const CategoryBadgeWrapper = styled.div``
/**
 * @description Hover 혹은 Event 발생 시 양옆으로 흔들리는 Keyframes
 */
export const shaking_in_animation = keyframes`
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

/**
 * CategoryList Component Styled Section
 * 카테고리 리스트 컴포넌트 스타일 영역
 */

export const CategoryListContainer = styled.div`
  width: 100%;
  height: 100vh;
  /* overflow-y: auto; */
  background: white;

  z-index: 1010;
`

export const CategoryListWrapper = styled.ul`
  display: flex;
  flex-direction: column;
  margin: 10px 0 0 0;
`

/**
 * CategoryRootTitle Component Styled Section
 * 카테고리 루트 컴포넌트 스타일 영역
 */

export const upDownAnimation = keyframes`
 from{
   transform: translatey(2px);
 }
 to{
   transform: translatey(-2px);
 }
`

export const CategoryRootContainer = styled.div`
  display: flex;
  margin: 15px 0 0 0;
  gap: 10px;
  align-items: center;
  span {
    display: block;
    position: absolute;
    background: #8accee;
  }
  span:nth-of-type(1) {
    left: 1;
    bottom: 0;
    width: 100%;
    height: 1.5px;
    transform: scaleX(0);
    transform-origin: right;
    transition: transform 0.5s;
  }
  &:hover {
    color: red;

    span:nth-of-type(1) {
      transform: scaleX(1);
      transform-origin: left;
      transition: transform 0.5s;
    }
  }
`

export const CategoryRootCount = styled.div`
  color: #e75454;
`
export const CategoryRootIcon = styled.div`
  margin: 0 0 7px 0px;
  width: 20px;
  height: 20px;
  animation: ${upDownAnimation} 0.6s infinite ease-in-out alternate;
`

export const CategoryRootTitle = styled(Link)`
  margin-left: 10px;
`
/**
 * CategoryTitle Component Styled Section
 * 카테고리 타이틀 컴포넌트 스타일 영역
 */

interface IsOpenPropsType {
  isOpen: boolean
  categoryItemCount?: number
}

export const dropdown_in_animation = keyframes`
  0% {
    transform: translateY(-100%);
  }
  100% {
    transform: translateY(0);
  }
`

export const dropdown_out_animation = keyframes`
  0% {
    transform: translateY(0);
  }

  100% {
    transform: translateY(-100%);
    
  }
`

export const CategoryTitleIconWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 30px;
  height: 30px;
  margin: 0 8px 0 10px;
`

export const CategoryItemOpenArrow = styled.div`
  float: right;
  cursor: pointer;
  margin-right: 25px;
  ${(props: IsOpenPropsType) =>
    props.isOpen
      ? css`
          transform: rotate(90deg);
        `
      : css`
          transform: rotate(0deg);
          padding-top: 4px;
        `};
`

export const CategoryTitleContainer = styled.li`
  position: relative;
  display: flex;
  gap: 5px;
  align-items: center;
  margin: 0 10px;
  height: 40px;
  border-radius: 5px;

  span {
    display: block;
    position: absolute;
    background: #8accee;
  }
  span:nth-of-type(1) {
    left: 1;
    bottom: 0;
    width: 100%;
    height: 1.5px;
    transform: scaleX(0);
    transform-origin: right;
    transition: transform 0.5s;
  }

  &:hover {
    background: #dcfbed;

    ${CategoryTitleIconWrapper} {
      animation: ${shaking_in_animation} 0.4s ease;
    }
    ${CategoryItemOpenArrow} {
      scale: 1;
      transition: 0.3s;
    }

    span:nth-of-type(1) {
      transform: scaleX(1);
      transform-origin: left;
      transition: transform 0.5s;
    }
  }
`

export const CartegoryTitleText = styled.p`
  cursor: pointer;
  flex-grow: 1;
  display: flex;
  align-items: center;
  position: relative;
  font-size: 22px;
`

export const DropdownWrapper = styled.article`
  overflow: hidden;
  margin-left: 30px;
  height: 0;
  transition: height ease-in-out 0.3s;
  ${(props: IsOpenPropsType) => {
    if (props.isOpen) {
      return css`
        height: ${(props.categoryItemCount as number) * 45 + 10}px;
      `
    } else {
      return css`
        height: 0px;
      `
    }
  }}
`

/**
 * CategoryItems Component Styled Section
 * 카테고리 아이템 컴포넌트 스타일 영역
 */

interface CategoryItemProps {
  active: boolean
}

interface GatsbyLinkProps extends CategoryItemProps {
  children: ReactNode
  className?: string
  to: string
}

export const CategoryTitleIcon = styled.div`
  width: 30px;
  height: 30px;
  margin-right: 0px;
  display: flex;
  align-items: center;
`

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const CategoryItem = styled(({ active, ...props }: GatsbyLinkProps) => (
  <Link {...props} />
))<CategoryItemProps>`
  display: flex;
  align-items: center;
  margin-right: 20px;
  padding: 5px 0;
  font-size: 20px;
  font-weight: ${({ active }) => (active ? '800' : '400')};
  cursor: pointer;

  &:last-of-type {
    margin-right: 0;
  }

  @media (max-width: 768px) {
    font-size: 15px;
  }
`
export const CategoryItemWrapper = styled.li`
  display: flex;
  align-items: center;
  margin-top: 5px;
  width: 100%;
  border-radius: 5px;
  transition: background, 0.5s;
  gap: 10px;
  margin-left: 20px;
  &:hover {
    background: #ebfeff;
    color: black;
  }
`

export const CategoryItemArrow = styled.div`
  display: flex;
  align-items: center;
`

export const CategoryItemCount = styled.div``
export const CategoryItemContainer = styled.ul``

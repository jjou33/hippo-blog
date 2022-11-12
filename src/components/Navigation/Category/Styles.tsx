import styled from '@emotion/styled'
import { keyframes } from '@emotion/react'
import { css } from '@emotion/react'
import { shaking_in_animation } from 'styles/AnimationKeyframes'
import { ReactNode } from 'react'
import { Link } from 'gatsby'
import SkeletonUI from 'styles/SkeletonUI'
/**
 * CategoryList Component Styled Section
 * 카테고리 리스트 컴포넌트 스타일 영역
 */

export const CategoryListContainer = styled.div`
  width: 100%;

  @media (max-width: 768px) {
    width: 100%;
    margin-top: 50px;
    padding: 0 20px;
  }
`

export const CategoryListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px 0 0 0;
`

/**
 * CategoryRootTitle Component Styled Section
 * 카테고리 루트 컴포넌트 스타일 영역
 */

interface RootItemPropsType {
  children: ReactNode
  className?: string
  to: string
}

export const RootTitleWrapper = styled.div`
  display: flex;
  margin: 25px 10px 10px 10px;
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
export const upDownAnimation = keyframes`
  from{
    transform: translatey(2px);
  }
  to{
    transform: translatey(-2px);
  }
`

export const CategoryRootCount = styled.div`
  margin: 2px 0 0 7px;
  color: #e75454;
`
export const CategoryRootIcon = styled.div`
  margin: 0px 10px 10px 10px;
  animation: ${upDownAnimation} 0.6s infinite ease-in-out alternate;
`

export const CategoryRootItem = styled(({ ...props }: RootItemPropsType) => {
  return <Link {...props} />
})``

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
  width: 20px;
  height: 20px;
  margin: 0 8px 0 10px;
`

export const CategoryItemOpenArrow = styled.div`
  float: right;
  cursor: pointer;
  margin-right: 10px;
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

export const CategoryTitleContainer = styled.div`
  position: relative;
  display: flex;

  align-items: center;

  width: 230px;
  height: 40px;
  margin: 0 auto;
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

  ${(props: IsOpenPropsType) =>
    props.isOpen
      ? css`
          background: #dcfbed;
        `
      : css``}

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
  font-size: 13px;
`

export const DropdownWrapper = styled.article`
  overflow: hidden;
  margin-left: 30px;
  height: 0;
  transition: height ease-in-out 0.3s;
  ${(props: IsOpenPropsType) =>
    props.isOpen
      ? css`
          height: ${(props.categoryItemCount as number) * 30 + 10}px;
        `
      : css`
          height: 0px;
        `}
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
  width: 15px;
  height: 15px;
  margin-right: 10px;
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
  font-size: 13px;
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
  width: 200px;
  border-radius: 5px;
  transition: background, 0.5s;
  &:hover {
    background: #ebfeff;
    color: black;
  }
`

export const CategoryItemArrow = styled.div`
  display: flex;
  align-items: center;
  margin: 0px 10px 0px 10px;
`

export const CategoryItemCount = styled.div`
  margin-left: 7px;
`
export const CategoryItemContainer = styled.ul``

/**
 * Category Skeleton Ui Component Styled Section
 * @description: 카테고리 리스트 깜박임 방지 Skeleton UI 영역
 */

export const SkeletonContainer = styled.div`
  width: 100%;
  margin-top: 15px;
  margin-right: 3px;
  @media (max-width: 768px) {
    width: 100%;
    margin-top: 50px;
    padding: 0 20px;
  }
`

export const SkeletonRootTitle = styled.div`
  display: flex;
  margin: 25px 10px 10px 0px;
  width: 100%;
`

export const SkeletonRootIcon = styled(SkeletonUI)`
  margin: 0px 5px 10px 10px;
  width: 30px;
`

export const SkeletonRootItem = styled(SkeletonUI)`
  width: 100px;
`

export const SkeletonTitleContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;

  width: 230px;
  height: 40px;
  margin: 10px 0 0 10px;
  border-radius: 5px;
`
export const SkeletonTitleIcon = styled(SkeletonUI)`
  display: flex;
  border-radius: 50%;
  align-items: center;
  width: 25px;
  height: 25px;
  margin: -8px 8px 0 10px;
`
export const SkeletonItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px 0 0 0;
`

export const SkeletonTitleText = styled(SkeletonUI)`
  cursor: pointer;
  flex-grow: 1;
  align-items: center;
  width: 100px;
  margin: -8px 8px 0 0px;
`

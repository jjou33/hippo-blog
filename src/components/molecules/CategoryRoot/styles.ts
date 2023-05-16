import styled from '@emotion/styled'
import { keyframes } from '@emotion/react'
import { css } from '@emotion/react'
import { ReactNode } from 'react'
import { Link } from 'gatsby'
import SkeletonUI from 'components/common/Skeleton/SkeletonUI'

export const CategoryRootTitle = styled(Link)``

export const upDownAnimation = keyframes`
 from{
   transform: translatey(2px);
 }
 to{
   transform: translatey(-2px);
 }
`

export const CategoryRootIcon = styled.div`
  margin: 0 0 7px 0px;
  width: 20px;
  height: 20px;
  animation: ${upDownAnimation} 0.6s infinite ease-in-out alternate;
`

export const CategoryRootContainer = styled.div`
  display: flex;
  margin: 15px 0 0 0;
  gap: 18px;
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

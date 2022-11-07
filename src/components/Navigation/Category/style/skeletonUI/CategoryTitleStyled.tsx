import styled from '@emotion/styled'
import { keyframes } from '@emotion/react'
import { css } from '@emotion/react'
import { shaking_in_animation } from 'styles/AnimationKeyframes'
import SkeletonUI from 'styles/SkeletonUI'
interface IsOpenPropsType {
  isOpen: boolean
}

export const CategoryTitleIconWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 20px;
  height: 20px;
  margin: 0 8px 0 10px;
`

export const CategoryTitleContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;

  width: 230px;
  height: 40px;
  margin: 0 auto;
  border-radius: 5px;
`

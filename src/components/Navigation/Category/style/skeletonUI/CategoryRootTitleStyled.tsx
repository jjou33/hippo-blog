import { ReactNode } from 'react'
import styled from '@emotion/styled'
import { keyframes } from '@emotion/react'
import { Link } from 'gatsby'
import SkeletonUI from 'styles/SkeletonUI'
interface RootItemPropsType {
  children: ReactNode
  className?: string
  to: string
}

export const RootTitleWrapper = styled.div`
  display: flex;
  margin: 25px 10px 10px 10px;
`

export const CategoryRootIcon = styled(SkeletonUI)`
  margin: 0px 10px 10px 10px;
`

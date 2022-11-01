import { ReactNode } from 'react'
import styled from '@emotion/styled'
import { keyframes } from '@emotion/react'
import { Link } from 'gatsby'

interface RootItemPropsType {
  children: ReactNode
  className?: string
  to: string
}

export const RootTitleWrapper = styled.div`
  display: flex;
  margin: 25px 10px 10px 10px;
  &:hover {
    color: red;
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
  margin-left: 5px;
  color: #e75454;
`
export const CategoryRootIcon = styled.div`
  margin: 0px 10px 10px 10px;
  animation: ${upDownAnimation} 0.6s infinite ease-in-out alternate;
`

export const CategoryRootItem = styled(({ ...props }: RootItemPropsType) => {
  console.log('props: ', props)
  return <Link {...props} />
})``

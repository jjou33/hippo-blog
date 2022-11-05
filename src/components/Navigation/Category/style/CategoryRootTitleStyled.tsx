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

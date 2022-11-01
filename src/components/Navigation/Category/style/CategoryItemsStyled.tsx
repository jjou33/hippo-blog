import { ReactNode } from 'react'
import styled from '@emotion/styled'
import { Link } from 'gatsby'
import { shaking_in_animation } from 'styles/AnimationKeyframes'

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
  color: rgba(0, 0, 0, 0.5);
  font-size: 12px;
  font-weight: ${({ active }) => (active ? '800' : '400')};
  cursor: pointer;

  &:last-of-type {
    margin-right: 0;
  }

  @media (max-width: 768px) {
    font-size: 15px;
  }
  &:hover {
    ${CategoryTitleIcon} {
      animation: ${shaking_in_animation} 0.5s ease;
    }
    color: black;
  }
`
export const CategoryItemWrapper = styled.li`
  display: flex;
  align-items: center;
  margin-top: 5px;
`

export const CategoryItemArrow = styled.div`
  display: flex;
  align-items: center;
  margin: 0px 20px 0px 15px;
`
export const CategoryItemCount = styled.div`
  color: #e75454;
  margin-left: 5px;
`
export const CategoryItemContainer = styled.ul``

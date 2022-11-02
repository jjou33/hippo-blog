import { ReactNode } from 'react'
import styled from '@emotion/styled'
import { css } from '@emotion/react'
import { Link } from 'gatsby'
import ConterBadge from 'components/Common/CounterBadge'
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

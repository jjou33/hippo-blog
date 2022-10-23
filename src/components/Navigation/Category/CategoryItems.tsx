import React, { FunctionComponent, ReactNode } from 'react'
import { CategoryItemListProps } from 'types/Category.types'
import styled from '@emotion/styled'
import { keyframes } from '@emotion/react'
import { Link } from 'gatsby'

type CategoryItemProps = {
  active: boolean
}

type GatsbyLinkProps = {
  children: ReactNode
  className?: string
  to: string
} & CategoryItemProps

const shaking_in_animation = keyframes`
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
const CategoryTitleIcon = styled.div`
  width: 15px;
  height: 15px;
  margin-right: 10px;
  display: flex;
  align-items: center;
`
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const CategoryItem = styled(({ active, ...props }: GatsbyLinkProps) => (
  <Link {...props} />
))<CategoryItemProps>`
  margin-right: 20px;
  display: flex;
  align-items: center;
  padding: 5px 0;
  font-size: 14px;
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
  }
`
const CategoryItemWrapper = styled.li`
  display: flex;
  align-items: center;
`

const CategoryItemArrow = styled.div`
  display: flex;
  align-items: center;
  margin: 0px 20px 0px 15px;
`

const CategoryItemContainer = styled.ul``
const CategoryItems: FunctionComponent<CategoryItemListProps> = function ({
  selectedCategory,
  categoryList,
  navIconSet,
}) {
  return (
    <CategoryItemContainer>
      {categoryList.map((categoryItem, idx): ReactNode => {
        return (
          <CategoryItemWrapper key={idx}>
            <CategoryItemArrow>
              {navIconSet['Arrow'].icon('10', '20')}
            </CategoryItemArrow>
            <CategoryTitleIcon>
              {navIconSet[categoryItem] !== undefined
                ? navIconSet[categoryItem].icon('18px', '18px')
                : ''}
            </CategoryTitleIcon>
            <CategoryItem
              to={`/?category=${categoryItem}`}
              active={categoryItem === selectedCategory}
              key={categoryItem}
            >
              {categoryItem}
            </CategoryItem>
          </CategoryItemWrapper>
        )
      })}
    </CategoryItemContainer>
  )
}

export default CategoryItems

import React, { FunctionComponent, ReactNode } from 'react'
import { CategoryItemListProps } from './CategoryList'
import styled from '@emotion/styled'
import { Link } from 'gatsby'

type CategoryItemProps = {
  active: boolean
}

type GatsbyLinkProps = {
  children: ReactNode
  className?: string
  to: string
} & CategoryItemProps

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const CategoryItem = styled(({ active, ...props }: GatsbyLinkProps) => (
  <Link {...props} />
))<CategoryItemProps>`
  margin-right: 20px;
  margin-bottom: 10px;
  padding: 5px 0;
  font-size: 18px;
  font-weight: ${({ active }) => (active ? '800' : '400')};
  cursor: pointer;

  &:last-of-type {
    margin-right: 0;
  }

  @media (max-width: 768px) {
    font-size: 15px;
  }
`

// const CategoryCount = styled.div`
//   border-radius: 20%;
//   color: red;
//   font-size: 3px;
//   justify-content: center;
//   align-items: center;
//   display: flex;
//   flex-direction: row;
// `

const CategoryItemWrapper = styled.div`
  display: flex;
  flex-direction: row;
`

const CategoryItems: FunctionComponent<CategoryItemListProps> = function ({
  selectedCategory,
  categoryList,
}) {
  console.log('cateL : ', categoryList)
  return (
    <>
      {categoryList.map((val, idx): JSX.Element => {
        console.log('val : ', val)
        return (
          <CategoryItemWrapper key={idx}>
            <CategoryItem
              to={`/?category=${val}`}
              active={val === selectedCategory}
              key={val}
            >
              {val}
            </CategoryItem>
          </CategoryItemWrapper>
        )
      })}
    </>
  )
}

export default CategoryItems

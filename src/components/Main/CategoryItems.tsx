import React, { FunctionComponent, ReactNode } from 'react'
import { CategoryListProps } from './CategoryList'
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

const CategoryCount = styled.div`
  border-radius: 20%;
  color: red;
  font-size: 3px;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: row;
`

const CategoryItemWrapper = styled.div`
  display: flex;
  flex-direction: row;
`

const CategoryItems: FunctionComponent<CategoryListProps> = function ({
  selectedCategory,
  categoryList,
}) {
  console.log('rc1 : ', categoryList)
  return (
    <>
      {Object.entries(categoryList).map((val, idx): any => {
        console.log('in : ', val[0])
        return (
          <CategoryItemWrapper>
            <CategoryItem
              to={`/?category=${val[0]}`}
              active={val[0] === selectedCategory}
              key={val[0]}
            >
              {val[0]}
            </CategoryItem>
            <CategoryCount>({val[1]})</CategoryCount>
          </CategoryItemWrapper>
        )
      })}
    </>
  )
}

export default CategoryItems
{
  /* <CategoryItem
  to={`/?category=${name}`}
  active={name === selectedCategory}
  key={name}
>
  #{name}({count})
</CategoryItem> */
}

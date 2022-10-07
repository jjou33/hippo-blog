import React, { FunctionComponent, ReactNode } from 'react'
import { CategoryItemListProps } from './CategoryList'
import { GatsbyImage } from 'gatsby-plugin-image'
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

const CategoryItemWrapper = styled.li`
  display: flex;
  /* margin-top: 10px; */
`
const CategoryTitleIcon = styled(GatsbyImage)`
  width: 15px;
  height: 15px;
  margin: 7px 10px 0px 5px;
`

// const CategoryItemContainer = styled.li`
//   margin-top: 15px;
// `
const CategoryItems: FunctionComponent<CategoryItemListProps> = function ({
  selectedCategory,
  categoryList,
  image,
}) {
  console.log('catego : ', categoryList)
  return (
    <>
      {categoryList.map((categoryItem, idx): JSX.Element => {
        return (
          <CategoryItemWrapper key={idx}>
            <CategoryTitleIcon image={image[idx]} alt="icon" />
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
    </>
  )
}

export default CategoryItems

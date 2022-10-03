import React, { FunctionComponent, ReactNode } from 'react'
import styled from '@emotion/styled'
import CategoryItems from './CategoryItems'
export type CategoryListProps = {
  selectedCategory: string
  categoryList: {
    [key: string]: number
  }
}

const CategoryListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: float;
  width: 100%;
  margin: 120px 0px 0px 30px;

  @media (max-width: 768px) {
    width: 100%;
    margin-top: 50px;
    padding: 0 20px;
  }
`

const CategoryTitle = styled.span`
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: 25px;
`
const CategoryList: FunctionComponent<CategoryListProps> = function ({
  selectedCategory,
  categoryList,
}) {
  // console.log('cate : ', categoryList['Webpack'])
  return (
    <CategoryListWrapper>
      {Object.entries(categoryList).map((val, idx): any => {
        console.log('rv : ', val)
        return (
          <CategoryTitle>
            {val[0]}
            {val[0] === 'All' ? ` (${val[1]})` : ''}
            <CategoryItems
              selectedCategory={selectedCategory}
              categoryList={val[1]}
            />
          </CategoryTitle>
        )
      })}
    </CategoryListWrapper>
  )
}

export default CategoryList

{
  /* <CategoryItem
  to={`/?category=${name}`}
  active={name === selectedCategory}
  key={name}
>
  #{name}({count})
</CategoryItem> */
}

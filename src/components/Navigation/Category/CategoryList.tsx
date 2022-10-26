import React, { FunctionComponent, ReactNode } from 'react'
import styled from '@emotion/styled'
import CategoryItems from './CategoryItems'
import CategoryTitle from './CategoryTitle'
import { CategoryListProps } from 'types/Category.types'
import { useDropdownEffect } from 'hooks/useDropdownEffect'
import { CategoryItem } from './CategoryItems'
import { GatsbyLinkProps, Link } from 'gatsby'
import { keyframes } from '@emotion/react'
const CategoryListContainer = styled.div`
  justify-content: center;
  align-items: float;
  width: 100%;

  @media (max-width: 768px) {
    width: 100%;
    margin-top: 50px;
    padding: 0 20px;
  }
`
// TODO: 드롭다운으로 변경하기 위해 Styled 태그 변경필요
const CategoryItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: 15px;
  margin: 10px auto;
  transition: 1s;
`
const motion = keyframes`
  from{
    transform: translatey(2px);
  }
  to{
    transform: translatey(-2px);
  }
`
const CategoryRootWrapper = styled.div`
  display: flex;
  margin: 25px 10px 10px 10px;
  &:hover {
    color: red;
  }
`
const CategoryRootItem = styled(({ ...props }: any) => <Link {...props} />)``
const CategoryRootCount = styled.div`
  margin-left: 5px;
  color: #e75454;
`
const CategoryRootIcon = styled.div`
  margin: 0px 10px 10px 10px;
  animation: ${motion} 0.6s infinite ease-in-out alternate;
  /*  */
`

const CategoryList: FunctionComponent<CategoryListProps> = function ({
  selectedCategory,
  categoryList,
  navIconSet,
  categoryCount,
}) {
  const { toggleTitle, titleRef } = useDropdownEffect(true)
  return (
    <CategoryListContainer>
      <CategoryRootWrapper ref={titleRef} onClick={toggleTitle}>
        {navIconSet['Dot'].icon('18', '18')}
        <CategoryRootIcon>
          {navIconSet['Ghost'] !== undefined
            ? navIconSet['Ghost'].icon('18', '18')
            : ''}
        </CategoryRootIcon>
        <CategoryRootItem to={`/?category=All`}>Root</CategoryRootItem>
        <CategoryRootCount>
          ({categoryCount !== undefined ? categoryCount['All'] : ''})
        </CategoryRootCount>
      </CategoryRootWrapper>
      {Object.entries(categoryList).map((categoryItems, idx): ReactNode => {
        return (
          <CategoryItemWrapper key={idx}>
            <CategoryTitle
              categoryItem={categoryItems[0]}
              navIconSet={navIconSet}
            >
              <CategoryItems
                key={idx}
                selectedCategory={selectedCategory}
                categoryList={categoryItems[1]['children']}
                navIconSet={navIconSet}
                categoryCount={categoryCount}
              />
            </CategoryTitle>
          </CategoryItemWrapper>
        )
      })}
    </CategoryListContainer>
  )
}

export default CategoryList

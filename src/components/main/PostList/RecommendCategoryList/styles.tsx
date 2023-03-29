import styled from '@emotion/styled'
import { Link } from 'gatsby'
import { ReactNode } from 'react'
import { css } from '@emotion/react'
export const RecommendCategoryContainer = styled.div`
  margin: 0 auto;
`

export const RecommandCategoryWrapper = styled.div`
  display: grid;
  justify-items: center;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 80px;
  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 30px;
  }
`

export const RecommendCategoryItem = styled.div`
  width: 150px;
  height: 150px;
  border: 1px solid;
  border-radius: 20px;
  display: flex;
  @media screen and (max-width: 1200px) {
    width: 120px;
    height: 120px;
  }
`
export const RecommentCategoryItemWrapper = styled(
  ({ ...props }: GatsbyLinkProps) => <Link {...props} />,
)`
  width: 150px;
  height: 150px;
  border: 2px solid transparent;
  background-image: linear-gradient(to right, #fbfcb9be, #ffcdf3aa, #65d3ffaa);
  background-origin: border-box;
  background-clip: content-box, border-box;
  border-radius: 20px;
  display: flex;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease 0s;
  cursor: pointer;
  outline: none;
  &:hover {
    box-shadow: 0px 15px 20px rgba(0, 0, 0, 0.1);
    color: #fff;
    transform: translateY(-7px);
  }
`

export const RecommendCategoryImg = styled.div`
  width: 85%;
  height: 85%;
  ${(props: { imagePath: string }) =>
    props.imagePath
      ? css`
          background: url(${props.imagePath});
          background-size: contain;
        `
      : css``}

  border-radius: 50%;
  border: none;
  margin: auto;
`

interface GatsbyLinkProps {
  children: ReactNode
  className?: string
  to: string
}
export const CategoryItem = styled(({ ...props }: GatsbyLinkProps) => (
  <Link {...props} />
))
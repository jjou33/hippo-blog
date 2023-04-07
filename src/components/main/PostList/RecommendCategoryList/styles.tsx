import styled from '@emotion/styled'
import { Link } from 'gatsby'
import { ReactNode } from 'react'
import { css } from '@emotion/react'
export const RecommendCategoryContainer = styled.div`
  width: 100%;
`

export const RecommandCategoryWrapper = styled.div`
  display: grid;
  justify-items: center;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 40px;
  @media screen and (max-width: 1300px) {
    grid-template-columns: repeat(2, 1fr);
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
export const RecommendCategoryTitle = styled.div`
  height: 20px;
  /* border: 1px solid; */
  font-weight: 800;
  font-size: 20px;
  border-radius: 20px;
  text-align: center;
  margin: 5px 0px 25px 0px;
  @media screen and (max-width: 1200px) {
    font-size: 15px;
    margin: 0px 0px 15px 0px;
  }
  @media screen and (max-width: 768px) {
    font-size: 10px;
    margin: 0px 0px 5px 0px;
  }
`
export const RecommentCategoryItemWrapper = styled(
  ({ ...props }: GatsbyLinkProps) => <Link {...props} />,
)`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 200px;
  height: 200px;
  border: none;
  border-radius: 20px;
  display: flex;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease 0s;
  cursor: pointer;
  outline: none;
  &:hover {
    box-shadow: 0px 15px 20px rgba(0, 0, 0, 0.1);
    transform: translateY(-7px);
  }
  @media screen and (max-width: 1200px) {
    width: 100px;
    height: 120px;
  }
  @media screen and (max-width: 768px) {
    width: 100px;
    height: 120px;
  }
`

export const RecommendCategoryImg = styled.img`
  width: 65%;
  height: 65%;
  ${(props: { imagePath: string }) =>
    props.imagePath
      ? css`
          background: url(${props.imagePath});
          background-size: contain;
          background-repeat: no-repeat;
        `
      : css``}

  border-radius: 50%;
  border: none;
  /* margin: auto; */
  margin-top: auto;
  @media screen and (max-width: 1200px) {
    width: 60px;
    height: 120px;
    margin: 20px 0 5px 0;
  }
  @media screen and (max-width: 768px) {
    width: 70px;
    height: 70px;
    margin: 20px 0 5px 0;
  }
`

interface GatsbyLinkProps {
  children: ReactNode
  className?: string
  to: string
}
export const CategoryItem = styled(({ ...props }: GatsbyLinkProps) => (
  <Link {...props} />
))

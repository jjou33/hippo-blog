import styled from '@emotion/styled'
import { css } from '@emotion/react'
import { themedPalette } from 'styles/themeVariables'
import { Link } from 'gatsby'

export const PostItemContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 15px;
  color: ${themedPalette.text1};
  border-radius: 0 0 20px 20px;
  border-width: 0px 0.5px 0.5px 0.5px;
  border-style: solid;
  border-color: ${themedPalette.border3};
`

export const Category = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 10px;
  margin: 10px -5px;
`

interface PostItemContainerPropsType {
  ref: (node?: Element | null) => void
  inview: boolean
}

export const VerticalCardWrapper = styled(Link)`
  display: flex;
  height: 100%;
  flex-direction: column;
  border-radius: 20px;
  box-shadow: 0 0 8px rgba(151, 234, 219, 0.15);
  transition: 0.3s box-shadow;

  cursor: pointer;

  &:hover {
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  }
`

export const VerticalCardContainer = styled.div`
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
  height: 100%;
  border-radius: 20px;

  &:hover {
    transform: scale(1.05);
    transition: transform 0.5s;
    box-shadow: 0px 15px 20px rgba(0, 0, 0, 0.1);
  }

  ${(props: PostItemContainerPropsType) =>
    props.inview
      ? css`
          opacity: 1;
          transform: scale(100%);
          transition: 2s;
        `
      : css`
          opacity: 0;
          transform: scale(85%);
          transition: 2s;
        `}
  @media screen and (max-width: 768px) {
    height: 350px;
  }
`

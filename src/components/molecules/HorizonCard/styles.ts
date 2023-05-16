import styled from '@emotion/styled'
import { css } from '@emotion/react'
import { Link } from 'gatsby'

import { themedPalette } from 'styles/themeVariables'

export const HorizonCardWrapper = styled(Link)`
  display: flex;
  flex-direction: row;
  border-radius: 10px;
  box-shadow: 0 0 8px rgba(151, 234, 219, 0.15);

  cursor: pointer;

  ${(props: { type: string }) =>
    props.type === 'main'
      ? css`
          // recent
          height: 210px;
        `
      : css`
          // category
        `}
`
export const HorizonCardContent = styled.div`
  flex: 3;
  display: flex;
  flex-direction: column;
  padding: 15px;
  border-radius: 10px;
  color: ${themedPalette.text1};
  border-color: ${themedPalette.border3};
`

export const ThumbnailWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
`
export const Category = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 10px;
  margin: 10px -5px;
  @media (max-width: 768px) {
    display: none;
  }
`

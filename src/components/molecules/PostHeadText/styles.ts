import styled from '@emotion/styled'
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image'
import { themedPalette } from 'styles/themeVariables'

/**
 * PostHeadInfo
 */

export const PostHeadInfoWrapper = styled.div`
  display: flex;
  position: relative;
  z-index: 2;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 900px;
  height: 100%;
  margin: 0 auto;
  padding: 150px 0;
  color: #ffffff;

  @media (max-width: 768px) {
    width: 100%;
    padding: 40px 20px;
  }
`

export const BadgeWrapper = styled.div`
  position: relative;
  margin: 0 auto;
  /* padding-top: 100px; */
`

export const CategoryWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  /* margin: 0 auto; */
  width: 100%;
  text-align: center;
  padding: 10px;
  /* padding-top: 100px; */
`

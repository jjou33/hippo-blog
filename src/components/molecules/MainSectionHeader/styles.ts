import styled from '@emotion/styled'

import { themedPalette } from 'styles/themeVariables'

export const MainSectionHeaderContainer = styled.div`
  display: flex;
  border-bottom: 1px solid ${themedPalette.border2};
  margin: 50px 0;
`

export const MainSectionHeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
  margin: 25px 0;
  color: ${themedPalette.text1};
  @media screen and (max-width: 768px) {
    gap: 10px;
    margin: 15px 0;
  }
`

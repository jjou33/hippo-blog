import React from 'react'
import styled from '@emotion/styled'
import { themedPalette } from 'styles/themeVariables'

export const FooterWrapper = styled.div`
  display: grid;
  place-items: center;
  margin-top: auto;
  height: 200px;
  padding: 50px 0;
  font-size: 15px;
  text-align: center;
  line-height: 1.5;
  border: 1px solid;
  background-color: ${themedPalette.bg_page1};
  color: ${themedPalette.text1};
  @media (max-width: 768px) {
    font-size: 13px;
  }
`

const Footer = () => {
  return (
    <FooterWrapper>
      Thank You for Visiting My Blog, Have a Good Day 😆
      <br />© 2022 HIPPO DEV, Powered By Gatsby.
      {/* <S.ButtonComponent to="/introduce">테스트 용 클릭</S.ButtonComponent> */}
    </FooterWrapper>
  )
}

export default Footer

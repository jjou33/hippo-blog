import React, { FunctionComponent } from 'react'

import * as S from './Styles'

const Footer = () => {
  return (
    <S.FooterWrapper>
      Thank You for Visiting My Blog, Have a Good Day 😆
      <br />© 2021 Developer Hyun, Powered By Gatsby.
      <S.ButtonComponent to="/introduce">클릭</S.ButtonComponent>
    </S.FooterWrapper>
  )
}

export default Footer

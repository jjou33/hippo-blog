import React, { FunctionComponent } from 'react'

import * as S from './styles'

const Footer = () => {
  return (
    <S.FooterWrapper>
      Thank You for Visiting My Blog, Have a Good Day 😆
      <br />© 2022 HIPPO DEV, Powered By Gatsby.
      <S.ButtonComponent to="/introduce">테스트 용 클릭</S.ButtonComponent>
    </S.FooterWrapper>
  )
}

export default Footer

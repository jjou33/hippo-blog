import React from 'react'
import * as S from './Styles'
interface ImagePropsType {
  imageSet: {
    [key: string]: string
  }
}
const InteractiveLandingPage = (props: ImagePropsType) => {
  return (
    <S.LandingPageContainer>
      <S.HeaderNav>
        <S.NavLinkItems>
          <S.TitleLinkItem href="#">HIPPO DEV</S.TitleLinkItem>
          <S.LinkItem href="#">ABOUT ME</S.LinkItem>
          <S.LinkItem href="#">TOTAL POST</S.LinkItem>
        </S.NavLinkItems>
      </S.HeaderNav>
      <S.ScrollSection>
        <S.ScrollSectionTitle>Welcome Hippo Dev</S.ScrollSectionTitle>
        <S.ScrollSectionSubTitleWrapper>
          <S.ScrollSectionSubTitle>
            프론트를 사랑하는 개발자입니다.
          </S.ScrollSectionSubTitle>
        </S.ScrollSectionSubTitleWrapper>
        <S.ScrollSectionSubTitleWrapper>
          <S.ScrollSectionSubTitle>즐겁게 개발하며</S.ScrollSectionSubTitle>
        </S.ScrollSectionSubTitleWrapper>
        <S.ScrollSectionSubTitleWrapper>
          <S.ScrollSectionSubTitle>
            행복하게 성장하는 개발자 입니다.
          </S.ScrollSectionSubTitle>
        </S.ScrollSectionSubTitleWrapper>
        <S.ScrollSectionSubTitleWrapper>
          <S.ScrollSectionSubTitle>
            와주셔서 감사합니다.
          </S.ScrollSectionSubTitle>
        </S.ScrollSectionSubTitleWrapper>
      </S.ScrollSection>
      <S.ScrollSection>
        <S.ScrollSectionSubTitle>
          <strong>저의 이력은 이렀습니다.</strong>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque porro
          debitis deserunt sapiente cumque rerum fugit? Culpa, cupiditate
          provident molestiae animi fugit sed velit fuga debitis quaerat omnis
          sit quos reprehenderit assumenda ipsum distinctio, ea adipisci quis
          doloribus. Assumenda sit delectus, enim commodi, consequuntur, non
          nobis blanditiis autem rem praesentium vitae. Reiciendis vero
          laboriosam excepturi eligendi reprehenderit dolorem eaque at ipsa?
          Magnam quam, delectus tenetur alias ullam voluptates blanditiis
          laboriosam nisi doloribus eveniet sed possimus, perferendis, nesciunt
          deserunt harum iusto reprehenderit dolorum! Facilis porro ea quas
          error accusantium iusto nulla. Dolores delectus nisi error ipsa, porro
          nulla facere ex aliquam ratione nam iure fugiat nobis. Optio ut
          expedita dolor amet natus tempore accusantium esse reiciendis iure
          illo facere eaque sed eos, reprehenderit eum dignissimos magnam
          quidem, tempora velit fuga? Unde voluptatem enim tenetur blanditiis
          autem reiciendis, odio itaque sequi, explicabo sint sit eaque dolor
          pariatur atque quisquam eius eligendi dolores fugit quia corrupti
          iste. Beatae quae cum excepturi, blanditiis distinctio qui velit
          consequuntur quisquam, recusandae repellat officiis minus harum
          officia. Aliquid, laborum? Facere sapiente omnis repellat voluptas
          quaerat magni voluptatum pariatur numquam laborum, tenetur praesentium
          id quas totam tempore illo aliquid ratione amet natus at odit eos
          error, excepturi repellendus.
        </S.ScrollSectionSubTitle>
      </S.ScrollSection>
    </S.LandingPageContainer>
  )
}

export default InteractiveLandingPage

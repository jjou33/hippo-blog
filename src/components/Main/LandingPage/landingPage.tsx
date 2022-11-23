import React from 'react'
import * as S from './Styles'
import Slider from './Slider'
const LandingPage = (props: any) => {
  return (
    <>
      <S.LadingPageContainer>
        <S.FirstSectionWrapper>
          <S.FirstImage src={props.imageSet.sea} />
          <S.FirstTitle>Hello World Hyun Woo</S.FirstTitle>
        </S.FirstSectionWrapper>
      </S.LadingPageContainer>
      <Slider
        imageSrc={props.imageSet.beach}
        title="This is First Title"
        subTitle="It's my SubTitle"
      ></Slider>
      <Slider
        imageSrc={props.imageSet.beach}
        title="This is Second Title"
        subTitle="It's my SubTitle"
        flipped={true}
      ></Slider>
    </>
  )
}

export default LandingPage

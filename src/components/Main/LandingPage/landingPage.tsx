import React from 'react'
import Slider from './Slider'
import * as S from './Styles'

interface ImagePropsType {
  imageSet: {
    [key: string]: string
  }
}
const LandingPage = (props: ImagePropsType) => {
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
        flipped={false}
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

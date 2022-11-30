import React from 'react'
import Slider from './Slider'
import { getSvgJSXElement } from 'utils/Common/Common'
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
        {/* <S.SecondSectionWrapper>
          <Slider
            imageSrc={props.imageSet.sea}
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
        </S.SecondSectionWrapper> */}
        {/* <S.FooterWrapper>
          <S.FooterWaveStyle
            src={props.imageSet.wave}
            waveType="first"
          ></S.FooterWaveStyle>
          <S.FooterWaveStyle
            src={props.imageSet.wave}
            waveType="second"
          ></S.FooterWaveStyle>
          <S.FooterWaveStyle
            src={props.imageSet.wave}
            waveType="third"
          ></S.FooterWaveStyle>
          <S.FooterWaveStyle
            src={props.imageSet.wave}
            waveType="fourth"
          ></S.FooterWaveStyle>
          <S.BoatIcon>{getSvgJSXElement('Ship', '120', '120')}</S.BoatIcon>
           <S.IslandIcon>{getSvgJSXElement('Tree', '120', '120')}</S.IslandIcon> 
      </S.FooterWrapper> */}
      </S.LadingPageContainer>
    </>
  )
}

export default LandingPage

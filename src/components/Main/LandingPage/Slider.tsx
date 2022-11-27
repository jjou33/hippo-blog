import React from 'react'
import { useInView } from 'react-intersection-observer'

import * as S from './Styles'

interface SliderPropsType {
  imageSrc: string
  title: string
  subTitle: string
  flipped: boolean
}
const Slider = ({ imageSrc, title, subTitle, flipped }: SliderPropsType) => {
  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0.2,
  })

  const renderContent = () => {
    return flipped ? (
      <>
        <S.SliderImg src={imageSrc} />
        <S.SliderTitleWrapper>
          <S.SliderTitle>{title}</S.SliderTitle>
          <S.SliderSubTitle>{subTitle}</S.SliderSubTitle>
        </S.SliderTitleWrapper>
      </>
    ) : (
      <>
        <S.SliderTitleWrapper>
          <S.SliderTitle>{title}</S.SliderTitle>
          <S.SliderSubTitle>{subTitle}</S.SliderSubTitle>
        </S.SliderTitleWrapper>
        <S.SliderImg src={imageSrc} />
      </>
    )
  }
  return (
    <S.SliderContainer ref={ref} inview={inView}>
      {renderContent()}
    </S.SliderContainer>
  )
}

export default Slider

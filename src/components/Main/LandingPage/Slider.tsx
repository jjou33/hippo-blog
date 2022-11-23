import React, { ref } from 'react'
import { useInView } from 'react-intersection-observer'

import * as S from './Styles'

const Slider = ({ imageSrc, title, subTitle, flipped }) => {
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

import styled from '@emotion/styled'
import { MutableRefObject, useRef } from 'react'
import { navIconSet } from 'assets/Svg/NavIconSet'
import * as S from './Styles'

const WaveImageAnimation = ({ imagePath, totalHeight, totalWidth }) => {
  return (
    <S.FooterFirstWaveAnimation>
      <S.BoatIcon totalHeight={totalHeight} totalWidth={totalWidth}>
        {navIconSet['Ship'].icon(
          `${totalHeight * 0.15}`,
          `${totalHeight * 0.15}`,
        )}
      </S.BoatIcon>
      <S.FooterWaveStyle
        src={imagePath['wave']}
        waveType="first"
        totalHeight={totalHeight}
      />
      <S.FooterWaveStyle
        src={imagePath['wave']}
        waveType="second"
        totalHeight={totalHeight}
      />
      <S.FooterWaveStyle
        src={imagePath['wave']}
        waveType="third"
        totalHeight={totalHeight}
      />
      <S.FooterWaveStyle
        src={imagePath['wave']}
        waveType="fourth"
        totalHeight={totalHeight}
      />
      <S.FooterWaveStyle
        src={imagePath['wave']}
        waveType="five"
        totalHeight={totalHeight}
      />
    </S.FooterFirstWaveAnimation>
  )
}

export default WaveImageAnimation

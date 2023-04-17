import * as S from './styles'
import type { ImagePathPropsType } from 'types/image/index'

const WaveImageAnimation = ({ imagePath }: ImagePathPropsType) => {
  return (
    <S.WaveAnimationWrapper>
      <S.WaveAnimationItem src={imagePath['wave']} waveType="first" />
      <S.WaveAnimationItem src={imagePath['wave']} waveType="second" />
      <S.WaveAnimationItem src={imagePath['wave']} waveType="third" />
      <S.WaveAnimationItem src={imagePath['wave']} waveType="fourth" />
      <S.WaveAnimationItem src={imagePath['wave']} waveType="five" />
    </S.WaveAnimationWrapper>
  )
}

export default WaveImageAnimation

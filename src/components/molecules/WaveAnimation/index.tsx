import * as S from './styles'

const WaveImageAnimation = ({ imagePath }: { imagePath: string }) => {
  return (
    <S.WaveAnimationWrapper>
      <S.WaveAnimationItem src={imagePath} waveType="first" />
      <S.WaveAnimationItem src={imagePath} waveType="second" />
      <S.WaveAnimationItem src={imagePath} waveType="third" />
      <S.WaveAnimationItem src={imagePath} waveType="fourth" />
      <S.WaveAnimationItem src={imagePath} waveType="five" />
    </S.WaveAnimationWrapper>
  )
}

export default WaveImageAnimation

import * as S from './styles'
interface WaveAnimationProps {
  imagePath: {
    [key: string]: string
  }
}
const WaveImageAnimation = ({ imagePath }: WaveAnimationProps) => {
  return (
    <S.WaveAnimationWrapper>
      {/* <S.BoatIcon totalHeight={totalHeight} totalWidth={totalWidth}>
        {navIconSet['Ship'].icon(
          `${totalHeight * 0.15}`,
          `${totalHeight * 0.15}`,
        )}
      </S.BoatIcon> */}
      <S.WaveAnimationItem src={imagePath['wave']} waveType="first" />
      <S.WaveAnimationItem src={imagePath['wave']} waveType="second" />
      <S.WaveAnimationItem src={imagePath['wave']} waveType="third" />
      <S.WaveAnimationItem src={imagePath['wave']} waveType="fourth" />
      <S.WaveAnimationItem src={imagePath['wave']} waveType="five" />
    </S.WaveAnimationWrapper>
  )
}

export default WaveImageAnimation

import { navIconSet } from 'assets/svg/NavIconSet'
import * as S from './styles'
interface WaveAnimationProps {
  imagePath: {
    [key: string]: string
  }
  totalHeight: number
  totalWidth: number
}
const WaveImageAnimation = ({
  imagePath,
  totalHeight,
  totalWidth,
}: WaveAnimationProps) => {
  return (
    <S.WaveAnimationWrapper>
      <S.BoatIcon totalHeight={totalHeight} totalWidth={totalWidth}>
        {navIconSet['Ship'].icon(
          `${totalHeight * 0.15}`,
          `${totalHeight * 0.15}`,
        )}
      </S.BoatIcon>
      <S.WaveAnimationItem
        src={imagePath['wave']}
        waveType="first"
        totalHeight={totalHeight}
      />
      <S.WaveAnimationItem
        src={imagePath['wave']}
        waveType="second"
        totalHeight={totalHeight}
      />
      <S.WaveAnimationItem
        src={imagePath['wave']}
        waveType="third"
        totalHeight={totalHeight}
      />
      <S.WaveAnimationItem
        src={imagePath['wave']}
        waveType="fourth"
        totalHeight={totalHeight}
      />
      <S.WaveAnimationItem
        src={imagePath['wave']}
        waveType="five"
        totalHeight={totalHeight}
      />
    </S.WaveAnimationWrapper>
  )
}

export default WaveImageAnimation

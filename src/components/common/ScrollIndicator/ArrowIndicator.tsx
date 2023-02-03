import * as S from './styles'

const ArrowScrollIndicator = props => {
  return (
    <S.ArrowIndicatorWrapper totalHeight={props.totalHeight}>
      <S.ArrowIndicator />
      <S.ArrowIndicator />
      <S.ArrowIndicator />
    </S.ArrowIndicatorWrapper>
  )
}

export default ArrowScrollIndicator

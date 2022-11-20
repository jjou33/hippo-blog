import * as S from './Styles'

const LandingPage = (props: any) => {
  console.log(props.imageSet.sea)
  return (
    <S.LadingPageContainer>
      <S.FirstSectionWrapper>
        <S.FirstImage src={props.imageSet.sea} />
        <S.FirstTitle>Hello World Hyun Woo</S.FirstTitle>
      </S.FirstSectionWrapper>
    </S.LadingPageContainer>
  )
}

export default LandingPage

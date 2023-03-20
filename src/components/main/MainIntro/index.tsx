import * as S from './styles'

const MainIntro = () => {
  return (
    <S.MainIntroContainer>
      <S.IntroTextWrapper>
        <S.IntroTitle>
          안녕하세요 HIPPO DEV 입니다.
          <br />
          방문해 주신 모든분께 감사합니다
        </S.IntroTitle>
        <S.IntroSubTitle>
          여기는 저의 개발 놀이터 입니다.
          <br />
          제가 만들고 표현하고 싶은 모든 것을 적용해보는
          <br />
          블로그 이며 재미있게 봐주시면 감사하겠습니다.
        </S.IntroSubTitle>
      </S.IntroTextWrapper>
    </S.MainIntroContainer>
  )
}

export default MainIntro

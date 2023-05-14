import * as S from './styles'
import TitleText from 'components/atom/TitleText'

const IntroductionText = () => {
  return (
    <S.IntroTextWrapper>
      <TitleText fontSize={40} fontWeight={800}>
        안녕하세요 HIPPO DEV 입니다.
        <br />
        방문해 주신 모든분께 감사합니다
      </TitleText>
      <TitleText fontSize={25}>
        여기는 저의 개발 놀이터 입니다.
        <br />
        제가 만들고 표현하고 싶은 모든 것을 적용해보는 블로그 이며
        <br />
        재미있게 봐주시면 감사하겠습니다.
      </TitleText>
    </S.IntroTextWrapper>
  )
}

export default IntroductionText

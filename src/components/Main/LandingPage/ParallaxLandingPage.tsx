import React, { useRef } from 'react'
import { useParallaxScroll } from 'hooks/useParallaxScroll'
import { useScrollStateBar } from 'hooks/useScrollStateBar'
import * as S from './Styles'
interface ImagePropsType {
  imageSet: {
    [key: string]: string
  }
}
const ParallaxLandingPage = (props: ImagePropsType) => {
  const scroll: number = useParallaxScroll()

  return (
    <>
      <S.ParallaxConstainer>
        <S.ParallaxheaderText style={{ top: 50 + scroll * -1.5 + '%' }}>
          <S.SpanTag>It's My New Tech Blog</S.SpanTag>
          <br />
          Welcome
        </S.ParallaxheaderText>
        <S.ParallaxBirdImage1
          src={props.imageSet.bird1}
          style={{ top: scroll * -1.5 + 'px', left: scroll * 2 + 'px' }}
        />
        <S.ParallaxBirdImage2
          src={props.imageSet.bird2}
          style={{ top: scroll * -1.5 + 'px', left: scroll * -1.5 + 'px' }}
        />
        <S.ParallaxForestImage
          src={props.imageSet.forest}
          style={{ top: scroll * 0.25 + 'px' }}
        />
        <S.ButtonTag href="#" style={{ marginTop: scroll * 1.5 + 'px' }}>
          Explore
        </S.ButtonTag>
        <S.ParallaxRockImage
          src={props.imageSet.rocks}
          style={{ top: scroll * -0.12 + 'px' }}
        />
        <S.ParallaxWaterImage src={props.imageSet.water} />
      </S.ParallaxConstainer>
      <S.ParallaxScrollingContainer>
        <S.ParallaxScrollingHeader>
          Gatsby Static Query
        </S.ParallaxScrollingHeader>
        <S.ParallaxScrollingP>
          Gatsby Cloud는 이제 1초 만에 CDN에 배포할 수 있습니다. 이는 일반적인
          CI/CD 서비스에서 정확히 동일한 Gatsby 사이트를 구축하는 것보다 100배
          빠릅니다. 우리는 빠르고, 안전하고 강력한 웹사이트를 구축하는 것을 돕기
          위해 2017년에 Gatsby v1을 출시했습니다. 이후 우리는 데이터 레이어(Data
          layer), 반응형 빌드(Reactive build)와 같은 새롭고 강력한 기능을
          계속해서 추가했습니다.
          <br />
          <br />
          일관되고 표준화된 GraphQL을 통해 제공되는 데이터 레이어는 Contentful,
          WordPress, Shopify의 데이터를 Gatsby DB로 동기화해 실시간 데이터 변경
          스트림에 접근할 수 있게 해줍니다. 반응형 빌드는 GraphQL에 의해
          동작합니다.
          <br />
          <br />
          각 페이지는 GraphQL을 통해 데이터 의존성을 선언합니다. 그다음 데이터가
          변경되면 Gatsby Cloud는 무효화된 페이지가 업데이트되도록 합니다. 지난
          12개월 동안 Gatsby 팀은 이 아키텍처를 우리의 전담 클라우드 인프라로
          이식하고 성능을 최적화하는데 집중해 왔습니다. 오늘날 웹에 콘텐츠를
          배포하는 방법 중 이보다 더 빠르고 간단하며 확장 가능한 방법은
          없습니다.
          <br />
          <br />
          우리는 이를 반응형 사이트 생성(Reactive Site Generation)이라고
          부르기로 했습니다. Gatsby Cloud의 모든 Gatsby v4 사이트에 대한 콘텐츠
          업데이트 평균 배포 시간은 현재 단 5초입니다. 다음은 콘텐츠 관리
          시스템(Content Management System, CMS)과 함께 Gatsby Cloud를 사용하면
          어떤지에 대한 예입니다.
        </S.ParallaxScrollingP>
      </S.ParallaxScrollingContainer>
    </>
  )
}

export default ParallaxLandingPage

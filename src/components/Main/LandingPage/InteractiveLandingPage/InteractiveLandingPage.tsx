import React, { MutableRefObject, useEffect, useRef, useState } from 'react'
import { useShowScene } from 'hooks/useShowScene'
import * as S from './Styles'
interface ImagePropsType {
  imageSet: {
    [key: string]: string
  }
}
const InteractiveLandingPage = (props: ImagePropsType) => {
  const [isShowScene, setShowScene] = useState('section-0')

  const section1: MutableRefObject<HTMLDivElement | null> =
    useRef<HTMLDivElement>(null)
  const section2: MutableRefObject<HTMLDivElement | null> =
    useRef<HTMLDivElement>(null)
  const section3: MutableRefObject<HTMLDivElement | null> =
    useRef<HTMLDivElement>(null)
  const section4: MutableRefObject<HTMLDivElement | null> =
    useRef<HTMLDivElement>(null)
  const mainMessage1: MutableRefObject<HTMLDivElement | null> =
    useRef<HTMLDivElement>(null)
  const mainMessage2: MutableRefObject<HTMLDivElement | null> =
    useRef<HTMLDivElement>(null)
  const mainMessage3: MutableRefObject<HTMLDivElement | null> =
    useRef<HTMLDivElement>(null)
  const mainMessage4: MutableRefObject<HTMLDivElement | null> =
    useRef<HTMLDivElement>(null)
  const thirdMainMessage1: MutableRefObject<HTMLDivElement | null> =
    useRef<HTMLDivElement>(null)
  const thirdMainMessage2: MutableRefObject<HTMLDivElement | null> =
    useRef<HTMLDivElement>(null)
  const thirdMainMessage3: MutableRefObject<HTMLDivElement | null> =
    useRef<HTMLDivElement>(null)
  const thirdPinB: MutableRefObject<HTMLDivElement | null> =
    useRef<HTMLDivElement>(null)
  const thirdPinC: MutableRefObject<HTMLDivElement | null> =
    useRef<HTMLDivElement>(null)
  const canvasCaption: MutableRefObject<HTMLDivElement | null> =
    useRef<HTMLDivElement>(null)
  const useShowSceneProps = {
    sectionRef: {
      section1,
      section2,
      section3,
      section4,
    },
    mainMessageRef: {
      mainMessage1,
      mainMessage2,
      mainMessage3,
      mainMessage4,
    },
    thirdMainMessageRef: {
      thirdMainMessage1,
      thirdMainMessage2,
      thirdMainMessage3,
      thirdPinB,
      thirdPinC,
    },
    fourthMainMessageRef: {
      canvasCaption,
    },
  }

  useEffect(() => {
    useShowScene(useShowSceneProps, setShowScene)
  }, [])

  return (
    <S.LandingPageContainer>
      <S.HeaderNav>
        <S.NavLinkItems>
          <S.TitleLinkItem href="#">HIPPO DEV</S.TitleLinkItem>
          <S.LinkItem href="#">ABOUT ME</S.LinkItem>
          <S.LinkItem href="#">TOTAL POST</S.LinkItem>
        </S.NavLinkItems>
      </S.HeaderNav>
      <S.ScrollSectionContainer1 ref={section1} currentScene={isShowScene}>
        <S.ScrollSectionTitle>Welcome Hippo Dev</S.ScrollSectionTitle>
        <S.ScrollStickElemCanvas></S.ScrollStickElemCanvas>
        <S.ScrollStickElemMainMessage ref={mainMessage1}>
          <S.ScrollDefaultDesc>
            온전히 빠져들게 하는
            <br />
            최고급 세라믹
          </S.ScrollDefaultDesc>
        </S.ScrollStickElemMainMessage>
        <S.ScrollStickElemMainMessage ref={mainMessage2}>
          <S.ScrollDefaultDesc>
            주변 맛을 느끼게 해주는
            <br />
            주변 맛 허용 모드
          </S.ScrollDefaultDesc>
        </S.ScrollStickElemMainMessage>
        <S.ScrollStickElemMainMessage ref={mainMessage3}>
          <S.ScrollDefaultDesc>
            온종일 편안한
            <br />
            맞춤형 손잡이
          </S.ScrollDefaultDesc>
        </S.ScrollStickElemMainMessage>
        <S.ScrollStickElemMainMessage ref={mainMessage4}>
          <S.ScrollDefaultDesc>
            새롭게 입가를
            <br />
            찾아온 매혹
          </S.ScrollDefaultDesc>
        </S.ScrollStickElemMainMessage>
      </S.ScrollSectionContainer1>
      <S.ScrollSectionContainer2 ref={section2}>
        <S.ScrollDescription>
          <strong>보통 스크롤 영역</strong>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque porro
          debitis deserunt sapiente cumque rerum fugit? Culpa, cupiditate
          provident molestiae animi fugit sed velit fuga debitis quaerat omnis
          sit quos reprehenderit assumenda ipsum distinctio, ea adipisci quis
          doloribus. Assumenda sit delectus, enim commodi, consequuntur, non
          nobis blanditiis autem rem praesentium vitae. Reiciendis vero
          laboriosam excepturi eligendi reprehenderit dolorem eaque at ipsa?
          Magnam quam, delectus tenetur alias ullam voluptates blanditiis
          laboriosam nisi doloribus eveniet sed possimus, perferendis, nesciunt
          deserunt harum iusto reprehenderit dolorum! Facilis porro ea quas
          error accusantium iusto nulla. Dolores delectus nisi error ipsa, porro
          nulla facere ex aliquam ratione nam iure fugiat nobis. Optio ut
          expedita dolor amet natus tempore accusantium esse reiciendis iure
          illo facere eaque sed eos, reprehenderit eum dignissimos magnam
          quidem, tempora velit fuga? Unde voluptatem enim tenetur blanditiis
          autem reiciendis, odio itaque sequi, explicabo sint sit eaque dolor
          pariatur atque quisquam eius eligendi dolores fugit quia corrupti
          iste. Beatae quae cum excepturi, blanditiis distinctio qui velit
          consequuntur quisquam, recusandae repellat officiis minus harum
          officia. Aliquid, laborum? Facere sapiente omnis repellat voluptas
          quaerat magni voluptatum pariatur numquam laborum, tenetur praesentium
          id quas totam tempore illo aliquid ratione amet natus at odit eos
          error, excepturi repellendus.
        </S.ScrollDescription>
      </S.ScrollSectionContainer2>
      <S.ScrollSectionContainer3 ref={section3} currentScene={isShowScene}>
        <S.ScrollStickElemCanvas></S.ScrollStickElemCanvas>
        <S.ScrollStickElemMainMessage className="a" ref={thirdMainMessage1}>
          <S.ScrollDefaultDesc>
            <small>편안한 촉감</small>
            입과 하나 되다
          </S.ScrollDefaultDesc>
        </S.ScrollStickElemMainMessage>
        <S.ScrollStickElemDescMessage className="b" ref={thirdMainMessage2}>
          <S.ScrollDefaultDesc>
            편안한 목넘김을 완성하는 디테일한 여러 구성 요소들, 우리는 이를
            하나하나 새롭게 살피고 재구성하는 과정을 거쳐 새로운 수준의 머그,
            AirMug Pro를 만들었습니다. 입에 뭔가 댔다는 감각은 어느새 사라지고
            오롯이 당신과 음료만 남게 되죠.
          </S.ScrollDefaultDesc>
          <S.ScrollPin ref={thirdPinB}></S.ScrollPin>
        </S.ScrollStickElemDescMessage>
        <S.ScrollStickElemDescMessage className="c" ref={thirdMainMessage3}>
          <S.ScrollDefaultDesc>
            디자인 앤 퀄리티 오브 스웨덴,
            <br />
            메이드 인 차이나
          </S.ScrollDefaultDesc>
          <S.ScrollPin ref={thirdPinC}></S.ScrollPin>
        </S.ScrollStickElemDescMessage>
      </S.ScrollSectionContainer3>
      <S.ScrollSectionContainer4 ref={section4}>
        <S.ScrollMidMessage>
          <strong>Retina 머그</strong>
          <br />
          아이디어를 광활하게 펼칠
          <br />
          아름답고 부드러운 음료 공간.
        </S.ScrollMidMessage>
        {/* <S.ScrollImageBlendCanvas></S.ScrollImageBlendCanvas> */}
        <S.ScrollCanvasCaption>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet at
          fuga quae perspiciatis veniam impedit et, ratione est optio porro.
          Incidunt aperiam nemo voluptas odit quisquam harum in mollitia.
          Incidunt minima iusto in corporis, dolores velit. Autem, sit dolorum
          inventore a rerum distinctio vero illo magni possimus temporibus
          dolores neque adipisci, repudiandae repellat. Ducimus accusamus
          similique quas earum laborum. Autem tempora repellendus asperiores
          illum ex! Velit ea corporis odit? Ea, incidunt delectus. Sapiente
          rerum neque error deleniti quis, et, quibusdam, est autem voluptate
          rem voluptas. Ratione soluta similique harum nihil vel. Quas inventore
          perferendis iusto explicabo animi eos ratione obcaecati.
        </S.ScrollCanvasCaption>
      </S.ScrollSectionContainer4>
    </S.LandingPageContainer>
  )
}

export default InteractiveLandingPage

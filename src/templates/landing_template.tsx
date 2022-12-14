import React, { MutableRefObject, useEffect, useRef, useState } from 'react'
import Template from 'components/layout/Template'
import { navigate, graphql } from 'gatsby'
import { globalHistory } from '@reach/router'
import { useShowScene } from 'hooks/useShowScene'
import { PostListItemType } from 'types/PostItem.types'
import { getImagePathSetList } from 'utils/Template/Template'

import * as S from 'styles/LandingTemplateStyles'
interface IndexPageProps {
  location: {
    search: string
  }
  data: {
    site: {
      siteMetadata: {
        title: string
        description: string
        siteUrl: string
      }
    }
    allMarkdownRemark: {
      edges: PostListItemType[]
    }
    allFile: {
      edges: {
        node: {
          [key: string]: string
        }
      }[]
    }
  }
}

const InteractiveLandingPage = ({
  data: {
    site: {
      siteMetadata: { title, description, siteUrl },
    },
    allFile,
  },
}: IndexPageProps) => {
  let eventListener: EventListenerTypes
  const [isShowScene, setShowScene] = useState('section-0')
  const [makeSticky, setMakeSticky] = useState(false)
  const imagePathList = getImagePathSetList(allFile.edges)

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
  const canvasCaption: MutableRefObject<HTMLParagraphElement | null> =
    useRef<HTMLParagraphElement>(null)
  const canvasElem: MutableRefObject<HTMLCanvasElement | null> =
    useRef<HTMLCanvasElement>(null)
  const canvasElem2: MutableRefObject<HTMLCanvasElement | null> =
    useRef<HTMLCanvasElement>(null)
  const canvasImage: MutableRefObject<HTMLCanvasElement | null> =
    useRef<HTMLCanvasElement>(null)
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
    canvasRef: {
      canvasElem,
      canvasElem2,
      canvasImage,
    },
  }
  interface EventListenerTypes {
    [key: string]: () => void
  }
  const removeEventTask = ['scroll', 'load', 'resize', 'orientationchange']

  const goToBlog = () => {
    navigate('/')
  }
  const removeEventListeners = (events: EventListenerTypes) => {
    removeEventTask.forEach(task => {
      window.removeEventListener(`${task}`, events[`${task}`])
    })
  }

  useEffect(() => {
    return globalHistory.listen(() => {
      removeEventListeners(eventListener)
    })
  }, [])

  useEffect(() => {
    eventListener = useShowScene(
      useShowSceneProps,
      setMakeSticky,
      setShowScene,
      imagePathList,
    )
  }, [])

  return (
    <Template
      title={title}
      description={description}
      url={siteUrl}
      image={imagePathList['profile-image']}
    >
      <S.LandingPageContainer>
        <S.HeaderContainer>
          <S.HeaderWrapper>
            <S.HeaderItemTitle to="/">HIPPO DEV</S.HeaderItemTitle>
            <S.HeaderItemLink onClick={goToBlog}>????????? ??????</S.HeaderItemLink>
          </S.HeaderWrapper>
        </S.HeaderContainer>

        <S.FirstSectionContainer ref={section1} currentScene={isShowScene}>
          <S.FirstSectionTitle>Welcome Hippo Dev</S.FirstSectionTitle>

          <S.FirstSectionStickyCanvasWrapper currentScene={isShowScene}>
            <S.FirstSectionStickyCanvas
              ref={canvasElem}
              width="1920"
              height="1080"
            ></S.FirstSectionStickyCanvas>
          </S.FirstSectionStickyCanvasWrapper>

          <S.ScrollStickyTextWrapper ref={mainMessage1}>
            <S.ScrollDefaultDesc>
              ????????? ???????????? ??????
              <br />
              ????????? ?????????
            </S.ScrollDefaultDesc>
          </S.ScrollStickyTextWrapper>
          <S.ScrollStickyTextWrapper ref={mainMessage2}>
            <S.ScrollDefaultDesc>
              ?????? ?????? ????????? ?????????
              <br />
              ?????? ??? ?????? ??????
            </S.ScrollDefaultDesc>
          </S.ScrollStickyTextWrapper>
          <S.ScrollStickyTextWrapper ref={mainMessage3}>
            <S.ScrollDefaultDesc>
              ????????? ?????????
              <br />
              ????????? ?????????
            </S.ScrollDefaultDesc>
          </S.ScrollStickyTextWrapper>
          <S.ScrollStickyTextWrapper ref={mainMessage4}>
            <S.ScrollDefaultDesc>
              ????????? ?????????
              <br />
              ????????? ??????
            </S.ScrollDefaultDesc>
          </S.ScrollStickyTextWrapper>
        </S.FirstSectionContainer>
        <S.SecondSectionContainer ref={section2}>
          <S.ScrollDescription>
            <strong>?????? ????????? ??????</strong>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque porro
            debitis deserunt sapiente cumque rerum fugit? Culpa, cupiditate
            provident molestiae animi fugit sed velit fuga debitis quaerat omnis
            sit quos reprehenderit assumenda ipsum distinctio, ea adipisci quis
            doloribus. Assumenda sit delectus, enim commodi, consequuntur, non
            nobis blanditiis autem rem praesentium vitae. Reiciendis vero
            laboriosam excepturi eligendi reprehenderit dolorem eaque at ipsa?
            Magnam quam, delectus tenetur alias ullam voluptates blanditiis
            laboriosam nisi doloribus eveniet sed possimus, perferendis,
            nesciunt deserunt harum iusto reprehenderit dolorum! Facilis porro
            ea quas error accusantium iusto nulla. Dolores delectus nisi error
            ipsa, porro nulla facere ex aliquam ratione nam iure fugiat nobis.
            Optio ut expedita dolor amet natus tempore accusantium esse
            reiciendis iure illo facere eaque sed eos, reprehenderit eum
            dignissimos magnam quidem, tempora velit fuga? Unde voluptatem enim
            tenetur blanditiis autem reiciendis, odio itaque sequi, explicabo
            sint sit eaque dolor pariatur atque quisquam eius eligendi dolores
            fugit quia corrupti iste. Beatae quae cum excepturi, blanditiis
            distinctio qui velit consequuntur quisquam, recusandae repellat
            officiis minus harum officia. Aliquid, laborum? Facere sapiente
            omnis repellat voluptas quaerat magni voluptatum pariatur numquam
            laborum, tenetur praesentium id quas totam tempore illo aliquid
            ratione amet natus at odit eos error, excepturi repellendus.
          </S.ScrollDescription>
        </S.SecondSectionContainer>
        <S.ThirdSectionContainer ref={section3} currentScene={isShowScene}>
          <S.ThirdSectionStickyCanvasWrapper currentScene={isShowScene}>
            <S.ThirdSectionStickyCanvas
              ref={canvasElem2}
              width="1920"
              height="1080"
            ></S.ThirdSectionStickyCanvas>
          </S.ThirdSectionStickyCanvasWrapper>
          <S.ScrollStickyTextWrapper className="a" ref={thirdMainMessage1}>
            <S.ScrollDefaultDesc>
              <small>????????? ??????</small>
              ?????? ?????? ??????
            </S.ScrollDefaultDesc>
          </S.ScrollStickyTextWrapper>
          <S.ScrollStickDescWrapper className="b" ref={thirdMainMessage2}>
            <S.ScrollDefaultDesc>
              ????????? ???????????? ???????????? ???????????? ?????? ?????? ?????????, ????????? ??????
              ???????????? ????????? ????????? ??????????????? ????????? ?????? ????????? ????????? ??????,
              AirMug Pro??? ??????????????????. ?????? ?????? ????????? ????????? ????????? ????????????
              ????????? ????????? ????????? ?????? ??????.
            </S.ScrollDefaultDesc>
            <S.ScrollPin ref={thirdPinB}></S.ScrollPin>
          </S.ScrollStickDescWrapper>
          <S.ScrollStickDescWrapper className="c" ref={thirdMainMessage3}>
            <S.ScrollDefaultDesc>
              ????????? ??? ????????? ?????? ?????????,
              <br />
              ????????? ??? ?????????
            </S.ScrollDefaultDesc>
            <S.ScrollPin ref={thirdPinC}></S.ScrollPin>
          </S.ScrollStickDescWrapper>
        </S.ThirdSectionContainer>
        <S.FourthSectionContainer ref={section4}>
          <S.FourthMainMessageWrapper>
            <strong>Retina ??????</strong>
            <br />
            ??????????????? ???????????? ??????
            <br />
            ???????????? ???????????? ?????? ??????.
          </S.FourthMainMessageWrapper>
          <S.ScrollImageBlendCanvas
            ref={canvasImage}
            makeSticky={makeSticky}
            width="1920"
            height="1080"
          ></S.ScrollImageBlendCanvas>
          <S.ScrollCanvasCaption ref={canvasCaption} makeSticky={makeSticky}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet at
            fuga quae perspiciatis veniam impedit et, ratione est optio porro.
            Incidunt aperiam nemo voluptas odit quisquam harum in mollitia.
            Incidunt minima iusto in corporis, dolores velit. Autem, sit dolorum
            inventore a rerum distinctio vero illo magni possimus temporibus
            dolores neque adipisci, repudiandae repellat. Ducimus accusamus
            similique quas earum laborum. Autem tempora repellendus asperiores
            illum ex! Velit ea corporis odit? Ea, incidunt delectus. Sapiente
            rerum neque error deleniti quis, et, quibusdam, est autem voluptate
            rem voluptas. Ratione soluta similique harum nihil vel. Quas
            inventore perferendis iusto explicabo animi eos ratione obcaecati.
          </S.ScrollCanvasCaption>
        </S.FourthSectionContainer>
      </S.LandingPageContainer>
    </Template>
  )
}

export default InteractiveLandingPage

export const getPostList = graphql`
  query getPostList {
    site {
      siteMetadata {
        title
        description
        siteUrl
      }
    }
    allMarkdownRemark(sort: { order: ASC, fields: [frontmatter___domain] }) {
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            title
            summary
            date(formatString: "YYYY.MM.DD.")
            categories
            index
            domain
            sideTitle
            thumbnail {
              childImageSharp {
                gatsbyImageData(width: 768, height: 400)
              }
            }
            categoryIcon {
              childImageSharp {
                gatsbyImageData(width: 10, height: 10)
              }
            }
          }
        }
      }
    }
    allFile(
      filter: {
        extension: { regex: "/(jpg)|(png)|(svg)|(gltf)|(bin)/" }
        sourceInstanceName: { eq: "images" }
      }
    ) {
      edges {
        node {
          extension
          sourceInstanceName
          id
          publicURL
        }
      }
    }
  }
`

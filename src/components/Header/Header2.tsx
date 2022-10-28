import ComputerModel from 'components/Common/ComputerGraphic'
import styled from '@emotion/styled'
import { css, keyframes } from '@emotion/react'
import { useScrollStateBar } from 'hooks/useScrollStateBar'
import { useRef, MutableRefObject } from 'react'
const HeaderContainer = styled.header`
  position: sticky;
  top: 0;
  z-index: 1;
  h1 {
    color: black;
  }
  border-style: solid;
  border-color: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 5rem;
`

const WaveAnimation = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 40px;
  background: url('../../../wave.png');
  background-size: 1000px 100px;
`
const animate = keyframes`
    0% {
        background-position-x: 0;
    }

    100% {
        background-position-x: 1000px;
    }
`
const animate2 = keyframes`
    0% {
        background-position-x: 0;
    }

    100% {
        background-position-x: -1000px;
    }
`

const Background = styled.section`
  position: relative;
  width: 100%;
  height: 100%;
  background: #406eb3;
  overflow: hidden;

  div:nth-child(1) {
    animation: ${animate} 30s linear infinite;
    z-index: 1000;
    opacity: 1;
    animation-delay: 0s;
    bottom: 0;
  }
  div:nth-child(2) {
    animation: ${animate2} 15s linear infinite;
    z-index: 997;
    opacity: 0.3;
    animation-delay: -2s;
    bottom: 5px;
  }
  div:nth-child(3) {
    animation: ${animate2} 30s linear infinite;
    z-index: 998;
    opacity: 0.5;
    animation-delay: -5s;
    bottom: 15px;
  }
  div:nth-child(4) {
    animation: ${animate2} 5s linear infinite;
    z-index: 999;
    opacity: 0.7;
    animation-delay: -5s;
    bottom: 20px;
  }
`

const ProgressBarContainer = styled.div`
  position: relative;
  z-index: 10;
  background: rgba(255, 255, 255, 0.05);
  width: 100%;
  height: 10px;
  top: 0;
  left: 0;
`

const ProgressBar = styled.div`
  background: black;
  transform-origin: top left;
  transform: scale(0, 0);
  height: 10px;
  opacity: 0;
  z-index: 1;
`

const Icon = styled.div`
  position: absolute;
  width: 30px;
  height: 30px;
  background: black;
  transition: 0.2s;
  margin-top: 20px;
  z-index: 1500;
  /* left: 45%; */
  transform: translateX(1404px);
  ${props =>
    props.scroll !== ''
      ? css`
          /* left: ${props.scroll}px; */
          transform: translateX(${props.scroll}px);
        `
      : css`
          left: ${props.scroll}px;
        `};
`
const HeaderWrapper = styled.div`
  float: right;
`
const Header = props => {
  const scroll = useScrollStateBar()
  console.log('stickyWidth : ', props.stickyWidth)
  const headerRef: MutableRefObject<HTMLDivElement | null> =
    useRef<HTMLDivElement>(null)
  const iconRef: MutableRefObject<HTMLDivElement | null> =
    useRef<HTMLDivElement>(null)
  const headerWidth = headerRef.current?.clientWidth
  const iconWidth = iconRef.current?.clientWidth
  // console.log('scroll : ', scroll)
  // console.log('size : ', window.innerWidth)
  // console.log('scroll: ', headerRef.current?.offsetLeft)
  console.log('header x: ', headerRef.current?.clientWidth)
  // console.log(
  //   'header width: ',
  //   document.documentElement.getBoundingClientRect().width,
  // )
  console.log('header + sticky : ', props.stickyWidth + headerWidth)
  console.log('icon width : ', iconWidth)
  const xScroll = (headerWidth - iconWidth) * 1

  return (
    <HeaderContainer ref={headerRef}>
      <Background>
        {/* <ComputerModel /> */}
        <WaveAnimation></WaveAnimation>
        <WaveAnimation></WaveAnimation>
        <WaveAnimation></WaveAnimation>
        <WaveAnimation></WaveAnimation>
        <Icon ref={iconRef} scroll={xScroll * scroll}></Icon>
      </Background>

      <ProgressBarContainer>
        <ProgressBar
          style={{
            transform: `scale(${scroll}, 1)`,
            opacity: `${scroll}`,
          }}
        />
      </ProgressBarContainer>
    </HeaderContainer>
  )
}

export default Header

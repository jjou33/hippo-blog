import styled from '@emotion/styled'
import { keyframes } from '@emotion/react'
import { themedPalette } from 'styles/themeVariables'

export const MainAnimationContainer = styled.div`
  height: calc(100vh);

  @media (max-width: 768px) {
    height: 60vh;
  }
  /* overflow: hidden; */
`

export const CommentTextWrapper = styled.div`
  /* position: absolute; */
  border-top: 1px solid;
  width: 50%;
  margin: 30px auto;
  font-size: 40px;
  padding-top: 15px;
  font-family: 'MontserratAlternates';
  @media screen and (max-width: 768px) {
    font-size: 20px;
  }
`
export const MainImageTextWrapper = styled.div`
  position: absolute;
  width: 100%;
  text-align: center;
  font-weight: 300;
  top: 20%;
  font-family: 'MontserratAlternates';
  color: white;
  letter-spacing: 5px;
  font-size: 60px;
  background: -webkit-linear-gradient(white, #38495a);
  -webkit-background-clip: text;
  background-clip: text;

  @media screen and (max-width: 768px) {
    font-size: 20px;
  }
`
export const MainImageStaticText = styled.h3`
  font-family: MontserratAlternates;
  color: white;
  /* text-transform: uppercase; */

  display: inline-block;
`

const blinkCursorKeyframe = keyframes`
  50% {
    opacity: 0;
  }
`

export const MainImageDynamicText = styled.span`
  color: rgb(238, 240, 124);
  font-family: 'MontserratAlternates';
  &::after {
    content: '';
    position: absolute;
    background-color: #e65454;

    height: 55px;
    width: 5px;
    animation: ${blinkCursorKeyframe} 0.5s infinite;
    margin-top: 20px;
    @media screen and (max-width: 768px) {
      height: 30px;
      margin-top: 0;
    }
  }
`

export const MainImageWrapper = styled.div`
  width: 100vw;
  height: calc(100vh - 30px);
  position: relative;

  &::after {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    content: '';
    background: rgba(0, 0, 0, 0.5);
    border: 1px solid rgba(0, 0, 0, 0.05);
    @media screen and (max-width: 768px) {
      height: 60vh;
    }
  }
`
export const MainImage = styled.img`
  width: 100vw;
  height: calc(100vh - 70px);
  background-color: rgba(0, 0, 0, 0.6);
  margin-top: 40px;
  cursor: auto;
  -webkit-user-drag: none;
  -khtml-user-drag: none;
  -moz-user-drag: none;
  -o-user-drag: none;

  @media (max-width: 768px) {
    height: 60vh;
    margin-top: 0px;
  }
`

export const CircleDiv = styled.div`
  position: relative;
  bottom: 50px;
  margin: auto;
  width: 130px;
  height: 100px;
  border-radius: 50%;
  background-color: ${themedPalette.bg_page1};
  z-index: 998;

  @media (max-width: 768px) {
    display: none;
  }
`

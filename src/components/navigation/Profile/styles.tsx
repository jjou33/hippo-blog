import styled from '@emotion/styled'
import { keyframes } from '@emotion/react'
import { shaking_in_animation } from 'styles/AnimationKeyframes'

/**
 * Introduction Component Styled Section
 * 사이드 상단 프로필 영역 컴포넌트 스타일 영역
 */

const animate = keyframes`
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(200vh);
  }
`

export const IntroductionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 280px;
  border-width: 0 0 0.5px 0;
  border-style: solid;
  background-image: linear-gradient(0deg, white 20%, #fdf3db 45%);
  i {
    position: absolute;
    top: -250px;
    background: rgba(255, 255, 255, 0.5);
    animation: ${animate} linear infinite;
  }

  @media (max-width: 768px) {
    width: 100%;
    height: 300px;
    padding: 0 20px;
  }
`

export const SubTitle = styled.div`
  font-size: 10px;
  font-weight: 400;
  font-style: italic;

  @media (max-width: 768px) {
    font-size: 15px;
  }
`

/**
 * ProfileImage Component Styled Section
 * 프로필 이미지 컴포넌트 스타일 영역
 */

export const ProfileImageWrapper = styled.img`
  width: 100px;
  height: 100px;
  margin: 20px 0px 0px 0px;
  border-radius: 15px;

  @media (max-width: 768px) {
    width: 80px;
    height: 80px;
  }
`

/**
 *  Navigation Menu Component Styled Section
 *  사이드 네비게이션 메뉴 컴포넌트 스타일 영역
 */

export const NavTabMenuContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 50px 10px auto;
  background-color: #98a4aa;
  border-radius: 30px;
  width: 250px;
  height: 60px;
`
export const NavTabMenuWrapper = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 50px 10px auto;
  width: 240px;
  background-color: #f0f3fe;
  height: 50px;
  border-radius: 30px;
  box-shadow: 1px 1px 1px gray, inset 0 0 1px gray, 0 0 5px gray;
`
/**
 * Navigation Menu Items Component Styled Section
 * 사이드 네비게이션 메뉴 아이템 컴포넌트 스타일 영역
 */

export const NavTabMenuItemContainer = styled.li`
  list-style: none;
  width: 80px;
`

export const NavTabMenuItemWrapper = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all ease 1s;
  &:hover {
    animation: ${shaking_in_animation} 0.4s ease;
  }
`

export const NavTabMenuItemIcon = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 70px;
  height: 70px;
`

/**
 *  기타 코드
 *  Rocket Interaction 관련 현재사용(X)
 */

const Rocket_Updown_Animation = keyframes`
 0% {
   transform: translateX(2px)
 }
 100% {
   transform: translateY(2px);
 }
`
export const RotateRocket = styled.div`
  transform: rotate(-42deg);
`
export const RoketImageWrapper = styled.div`
  width: 50px;
  height: 50px;
  animation: ${Rocket_Updown_Animation} 0.3s ease infinite;

  &::before {
    content: '';
    position: absolute;
    bottom: -40px;
    left: 0;

    transform: translateX(-50%) rotate(42deg);
    width: 8px;
    height: 50px;
    background: linear-gradient(#00d0ff, transparent);
  }

  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 0;

    transform: translateX(-20%) rotate(40deg);
    width: 10px;
    height: 80px;
    background: linear-gradient(#00d0ff, transparent);
    filter: blur(100px);
  }
`

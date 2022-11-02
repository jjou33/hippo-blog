import styled from '@emotion/styled'
import { keyframes } from '@emotion/react'
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

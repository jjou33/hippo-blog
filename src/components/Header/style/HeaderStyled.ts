import styled from '@emotion/styled'
import { css } from '@emotion/react'
import { upDownAnimation } from 'styles/AnimationKeyframes'

interface ScrollStateIconType {
  scroll: number
}

export const HeaderContainer = styled.header`
  position: sticky;
  display: flex;
  top: 0;
  z-index: 999;
  background: white;

  h1 {
    color: black;
  }
  border-style: solid;
  border-color: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 90px;
`

export const IconWrapper = styled.div`
  animation: ${upDownAnimation} 0.6s infinite ease-in-out alternate;
`

export const Icon = styled.div`
  position: absolute;
  width: 30px;
  height: 30px;
  transition: 0.2s;
  margin-top: 60px;
  ${(props: ScrollStateIconType) =>
    props.scroll !== undefined
      ? css`
          transform: translateX(${props.scroll}px);
        `
      : ''};
`

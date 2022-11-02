import styled from '@emotion/styled'
import React from 'react'

interface BadgeColorType {
  color?: string
  children: string | number
}

const CounterBadgeStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 6px;
  border-style: solid;
  border-radius: 8px;
  width: 20px;
  height: 15px;
  color: ${(props: BadgeColorType) =>
    props.color !== undefined ? props.color : ''};
`

const CounterBadge = ({ color, children }: BadgeColorType) => {
  return (
    <>
      <CounterBadgeStyle color={color}>{children}</CounterBadgeStyle>
    </>
  )
}

export default CounterBadge

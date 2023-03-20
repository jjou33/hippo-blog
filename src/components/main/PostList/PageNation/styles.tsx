import styled from '@emotion/styled'
import { css } from '@emotion/react'

export const Nav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
  margin: 16px;
`
export const Button = styled.button`
  border: none;
  border-radius: 8px;
  padding: 8px;
  margin: 0;
  background: black;
  color: white;
  font-size: 1rem;

  &:hover {
    background: tomato;
    cursor: pointer;
    transform: translateY(-2px);
  }

  &[disabled] {
    background: grey;
    cursor: revert;
    transform: revert;
  }

  ${(props: { current?: string | null }) =>
    props.current === 'page'
      ? css`
          background: #e0f09a;
          color: black;
          font-weight: bold;
          cursor: revert;
          transform: revert;
        `
      : ''}
`

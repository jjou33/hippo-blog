import React from 'react'
import styled from '@emotion/styled'
import { css } from '@emotion/react'
const Nav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
  margin: 16px;
`
interface ButtonPropsType {
  current?: string | null
}
const Button = styled.button`
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

  ${(props: ButtonPropsType) =>
    props.current === 'page'
      ? css`
          background: deeppink;
          font-weight: bold;
          cursor: revert;
          transform: revert;
        `
      : ''}
`

interface PaginationPropsType {
  total: number
  limit: number
  page: number
  setPage: React.Dispatch<React.SetStateAction<number>>
}
const Pagination = ({ total, limit, page, setPage }: PaginationPropsType) => {
  const numPages = Math.ceil(total / limit)

  return (
    <>
      <Nav>
        <Button onClick={() => setPage(page - 1)} disabled={page === 1}>
          {`<`}
        </Button>
        {Array(numPages)
          .fill('')
          .map((_, i) => (
            <Button
              key={i + 1}
              onClick={() => setPage(i + 1)}
              current={page === i + 1 ? 'page' : null}
            >
              {i + 1}
            </Button>
          ))}
        <Button onClick={() => setPage(page + 1)} disabled={page === numPages}>
          {`>`}
        </Button>
      </Nav>
    </>
  )
}

export default Pagination

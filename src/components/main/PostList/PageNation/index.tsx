import * as S from './styles'
interface PaginationPropsType {
  total: number
  limit: number
  page: number
  setPage: React.Dispatch<React.SetStateAction<number>>
}
const Pagination = ({ total, limit, page, setPage }: PaginationPropsType) => {
  const numPages = Math.ceil(total / limit)

  return (
    <S.Nav>
      <S.Button onClick={() => setPage(page - 1)} disabled={page === 1}>
        {`<`}
      </S.Button>
      {Array(numPages)
        .fill('')
        .map((_, i) => (
          <S.Button
            key={i + 1}
            onClick={() => setPage(i + 1)}
            current={page === i + 1 ? 'page' : null}
          >
            {i + 1}
          </S.Button>
        ))}
      <S.Button onClick={() => setPage(page + 1)} disabled={page === numPages}>
        {`>`}
      </S.Button>
    </S.Nav>
  )
}

export default Pagination

import { useState, useEffect } from 'react'
import * as S from './styles'

interface ElementeType {
  id: string
  text: string
  level: number
}
const getClassName = (level: number) => {
  switch (level) {
    case 2:
      return 'head2'
    case 3:
      return 'head3'
    case 4:
      return 'head4'
    case 5:
      return 'head5'
    default:
      return ''
  }
}

const PostToc = () => {
  const [headings, setHeadings] = useState<ElementeType[]>([])
  useEffect(() => {
    const elem: NodeListOf<HTMLElement> = document.querySelectorAll('h3,h4,h5')
    elem.forEach((element, index) => {
      element.setAttribute('id', `head${index}`)
    })

    const elements: ElementeType[] = Array.from(elem).map(
      (elem: HTMLElement) => ({
        id: elem.id,
        text: elem.innerText,
        level: Number(elem.nodeName.charAt(1)),
      }),
    )

    setHeadings(elements)
  }, [])

  return (
    <S.PostTocContainer>
      <S.PostTocWrapper>
        <S.PostTocTitle>📚 목차</S.PostTocTitle>
        {headings.map(headings => (
          <S.PostTocItem
            key={headings.id}
            className={getClassName(headings.level)}
          >
            <a
              href={`#${headings.id}`}
              onClick={e => {
                e.preventDefault()
                document.querySelector(`#${headings.id}`)?.scrollIntoView({
                  behavior: 'smooth',
                  block: 'center',
                })
              }}
            >
              {headings.text}
            </a>
          </S.PostTocItem>
        ))}
      </S.PostTocWrapper>
    </S.PostTocContainer>
  )
}

export default PostToc

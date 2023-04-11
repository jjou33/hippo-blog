import React from 'react'
import PostTocAnchor from './PostTocAnchor'
import { useState, useEffect } from 'react'
import * as S from '../styles'

interface NestedHeadingType {
  id: string
  text: string
  level: number
}
interface NestedListType extends NestedHeadingType {
  items: NestedHeadingType[]
}

export const getNestedHeadings = (headingList: NodeListOf<HTMLElement>) => {
  const nestedList: NestedListType[] = []
  headingList.forEach(elem => {
    const { id, innerText, nodeName } = elem
    const headingsLevel = Number(nodeName.charAt(1))
    if (headingsLevel === 4) {
      nestedList.push({ id, text: innerText, level: headingsLevel, items: [] })
    } else if (headingsLevel === 5 && nestedList.length > 0) {
      nestedList[nestedList.length - 1].items.push({
        id,
        text: innerText,
        level: headingsLevel,
      })
    }
  })
  return nestedList
}

export const getClassName = (level: number) => {
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
  const [headings, setHeadings] = useState<NestedListType[]>([])
  useEffect(() => {
    const elem: NodeListOf<HTMLElement> = document.querySelectorAll('h3,h4,h5')

    elem.forEach((element, index) => {
      element.setAttribute('id', `head${index}`)
    })

    const nestedHeadings = getNestedHeadings(elem)

    setHeadings(nestedHeadings)
  }, [])

  return (
    <S.PostTocContainer>
      <S.PostTocTitle>📚 목차</S.PostTocTitle>
      <S.PostTocWrapper>
        {headings.map((headings: NestedListType) => (
          <S.PostTocItem key={headings.id}>
            <PostTocAnchor {...headings} />
            {headings.items.length > 0 ? (
              <S.PostTocWrapper>
                {headings.items.map(
                  (headingItems: {
                    id: string
                    text: string
                    level: number
                  }) => {
                    return (
                      <S.PostTocItem
                        key={headingItems.id}
                        className={getClassName(headingItems.level)}
                      >
                        <PostTocAnchor {...headingItems} />
                      </S.PostTocItem>
                    )
                  },
                )}
              </S.PostTocWrapper>
            ) : (
              <></>
            )}
          </S.PostTocItem>
        ))}
      </S.PostTocWrapper>
    </S.PostTocContainer>
  )
}

export default PostToc

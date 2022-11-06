import {
  MutableRefObject,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react'

import { useRecoilState, atom } from 'recoil'
import { recoilDropdownState } from 'states/recoilDropdownState'
export interface useDropdownEffectType {
  isOpen: boolean
  toggleTitle: () => void
  titleRef: MutableRefObject<HTMLDivElement | null>
}
export const useDropdownEffect = (categoryItem: string) => {
  const [state, setState] = useRecoilState(recoilDropdownState)
  const [isOpen, setIsOpen] = useState(false)

  const titleRef: MutableRefObject<HTMLDivElement | null> =
    useRef<HTMLDivElement>(null)

  const onMouseDown = useCallback(
    (e: Event) => {
      // if (titleRef.current && !titleRef.current.contains(e.target)) {
      //   // setIsOpen(false)
      //   console.log('e : ', titleRef.current)
      // }
    },
    [titleRef, setIsOpen],
  )

  // Click 시 Callback 함수 필요 할 경우
  // useEffect(() => {
  //   console.log('isRoot : ', isRoot)
  //   if (isRoot) {
  //     setIsOpen(false)
  //   }
  // }, [isOpen])

  useEffect(() => {
    window.addEventListener('click', onMouseDown)

    return () => window.removeEventListener('click', onMouseDown)
  }, [onMouseDown])

  const isOpenFilter = state => {
    // console.log('state : ', state[categoryItem])
    return state[categoryItem] === true ? true : false
  }

  const toggleTitle = () => {
    setIsOpen(!isOpen)
    // console.log('cate : ', categoryItem)
    setState((oldCategory: object) => {
      const tmpObj = { ...oldCategory }
      tmpObj[categoryItem] = !tmpObj[categoryItem]

      return tmpObj
    })
    // console.log('cate : ', state)
  }

  return { isOpen, toggleTitle, titleRef }
}

/**
 * 클릭 -> toggleTitle 에서 전역 상태 추가 ->
 */

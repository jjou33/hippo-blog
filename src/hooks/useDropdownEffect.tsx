import {
  MutableRefObject,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react'

export interface useDropdownEffectType {
  isOpen: boolean
  toggleTitle: () => void
  titleRef: MutableRefObject<HTMLDivElement | null>
}
export const useDropdownEffect = (isRoot: any = false) => {
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

  const toggleTitle = () => {
    setIsOpen(!isOpen)
  }

  return { isOpen, toggleTitle, titleRef }
}

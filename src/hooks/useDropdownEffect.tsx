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
export const useDropdownEffect = () => {
  const [isOpen, setIsOpen] = useState(false)
  const titleRef: MutableRefObject<HTMLDivElement | null> =
    useRef<HTMLDivElement>(null)

  const onMouseDown = useCallback(
    (e: Event) => {
      //   if (ref.current && !ref.current.contains(e.target)) {
      //     setIsOpen(false)
      //   }
    },
    [titleRef, setIsOpen],
  )

  // Click 시 Callback 함수 필요 할 경우
  //   useEffect(() => {
  //     if (isOpen) {
  //       onOpen()
  //     }
  //   }, [isOpen])

  useEffect(() => {
    window.addEventListener('mousedown', onMouseDown)

    return () => window.removeEventListener('mousedown', onMouseDown)
  }, [onMouseDown])

  const toggleTitle = () => {
    setIsOpen(!isOpen)
  }

  return { isOpen, toggleTitle, titleRef }
}

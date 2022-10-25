import {
  MutableRefObject,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react'

export const useToggleTabMenu = () => {
  const [isActive, setIsActive] = useState(false)

  const tabMenuRef: MutableRefObject<HTMLDivElement | null> =
    useRef<HTMLDivElement>(null)

  // const onMouseClick = useCallback(
  //   (e: EventTarget) => {
  //     // if (tabMenuRef.current && !tabMenuRef.current.contains(e.target)) {
  //     //   setIsActive(false)
  //     // }
  //   },
  //   [tabMenuRef, setIsActive],
  // )

  // useEffect(() => {
  //   if (isActive) {
  //   }
  // }, [isActive])

  // useEffect(() => {
  //   window.addEventListener('mouseenter', onMouseClick)

  //   return () => window.removeEventListener('mouseleave', onMouseClick)
  // }, [onMouseClick])

  const toggleTab = () => {
    setIsActive(!isActive)
  }

  return { isActive, toggleTab, tabMenuRef }
}

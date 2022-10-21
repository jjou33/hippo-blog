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

  const onMouseClick = useCallback(
    (e: Event) => {
      if (tabMenuRef.current && !tabMenuRef.current.contains(e.target)) {
        setIsActive(false)
      }
    },
    [tabMenuRef, setIsActive],
  )

  useEffect(() => {
    if (isActive) {
      console.log('hh')
    }
  }, [isActive])

  useEffect(() => {
    window.addEventListener('click', onMouseClick)

    return () => window.removeEventListener('click', onMouseClick)
  }, [onMouseClick])

  const toggleTab = () => {
    setIsActive(!isActive)
  }

  return { isActive, toggleTab, tabMenuRef }
}

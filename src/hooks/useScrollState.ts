import { useState, useEffect, useRef } from 'react'

const throttle = (callback: () => void, waitTime: number) => {
  let timerId: number | null = null
  return () => {
    if (timerId) return
    timerId = setTimeout(() => {
      callback.call(this)
      timerId = null
    }, waitTime)
  }
}
export const useScrollState = () => {
  const [hide, setHide] = useState(false)
  const [pageY, setPageY] = useState(0)
  const documentRef = useRef(document)
  const handleScroll = () => {
    const { pageYOffset } = window
    const deltaY = pageYOffset - pageY
    const hide = pageYOffset !== 0 && deltaY >= 0
    setHide(hide)
    setPageY(pageYOffset)
  }

  const throttleScroll = throttle(handleScroll, 50)

  useEffect(() => {
    window.addEventListener('scroll', throttleScroll)
    return () => window.removeEventListener('scroll', throttleScroll)
  }, [pageY])

  return hide
}

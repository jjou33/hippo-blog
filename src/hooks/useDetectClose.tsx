import { useEffect, useState, useRef } from 'react'

export const useDetectClose = (initialState: any[]) => {
  const [isOpen, setIsOpen] = useState(initialState)
  const ref = useRef(null)

  const removeHandler = () => {
    setIsOpen(!isOpen)
  }

  useEffect(() => {
    const onClick = (e: Event) => {
      if (ref.current !== null && !ref.current.contains(e.target)) {
        setIsOpen(!isOpen)
      }
    }

    if (isOpen) {
      window.addEventListener('click', onClick)
    }

    return () => {
      window.removeEventListener('click', onClick)
    }
  }, [isOpen])

  return [isOpen, ref, removeHandler]
}

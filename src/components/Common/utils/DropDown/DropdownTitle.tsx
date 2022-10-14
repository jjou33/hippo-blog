import React, { useCallback, useEffect, useRef, useState } from 'react'
import CategoryTitle from 'components/Navigation/Category/CategoryTitle'

const Dropdown2 = ({ onOpen, children, categoryItem, navIconSet }) => {
  const [isOpen, setIsOpen] = useState(false)
  const ref = useRef()

  const onMouseDown = useCallback(
    (e: Evnet) => {
      // if (ref.current && !ref.current.contains(e.target)) {
      //   setIsOpen(false)
      // }
    },
    [ref, setIsOpen],
  )

  useEffect(() => {
    if (isOpen) {
      onOpen()
    }
  }, [isOpen])
  useEffect(() => {
    window.addEventListener('mousedown', onMouseDown)

    return () => window.removeEventListener('mousedown', onMouseDown)
  }, [onMouseDown])

  const toggleIsOpen = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <div ref={ref} onClick={toggleIsOpen}>
        <CategoryTitle
          categoryTitle={categoryItem}
          navIconSet={navIconSet}
        ></CategoryTitle>
      </div>
      {isOpen && children}
    </>
  )
}

export default Dropdown2

import { useRef, useState } from 'react'

import { useSetRecoilState } from 'recoil'
import { recoilDropdownState } from 'states/recoilDropdownState'

interface OpenStateType {
  [key: string]: boolean
}

export const useCategoryState = () => {
  const [isOpen, setIsOpen] = useState(false)

  const setState = useSetRecoilState(recoilDropdownState)

  const titleRef = useRef(null)

  const toggleTitle = (categoryItem: string) => {
    setIsOpen(!isOpen)
    setState((oldOpenState: OpenStateType) => {
      const newOpenState: OpenStateType = { ...oldOpenState }
      newOpenState[categoryItem] = !newOpenState[categoryItem]
      return newOpenState
    })
  }

  return { isOpen, toggleTitle, titleRef }
}

import { MutableRefObject, useRef, useState } from 'react'

import { useSetRecoilState } from 'recoil'
import { recoilDropdownState } from 'states/recoilDropdownState'
export interface useDropdownEffectType {
  isOpen: boolean
  toggleTitle: () => void
  titleRef: MutableRefObject<HTMLDivElement | null>
}

interface OpenStateType {
  [key: string]: boolean
}
export const useCategoryState = () => {
  const setState = useSetRecoilState(recoilDropdownState)
  const [isOpen, setIsOpen] = useState(false)

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

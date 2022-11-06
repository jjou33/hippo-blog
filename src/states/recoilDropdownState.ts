import { atom } from 'recoil'
import { recoilPersist } from 'recoil-persist'

const sessionStorage =
  typeof window !== 'undefined' ? window.sessionStorage : undefined

const { persistAtom } = recoilPersist()

export const recoilDropdownState = atom({
  key: 'recoilDropdownState',
  default: {},
  effects_UNSTABLE: [persistAtom],
})

import { atom } from 'recoil'
import { recoilPersist } from 'recoil-persist'

const sessionStorage =
  typeof window !== 'undefined' ? window.sessionStorage : undefined

const { persistAtom } = recoilPersist({
  key: '내맘대로 정하는 키 이름',
  storage: sessionStorage,
})

export const recoilDropdownState = atom({
  key: 'recoilDropdownState',
  default: [],
  effects_UNSTABLE: [persistAtom],
})

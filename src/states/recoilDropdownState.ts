import { atom } from 'recoil'
import { recoilPersist } from 'recoil-persist'

const { persistAtom } = recoilPersist()

export const recoilDropdownState = atom({
  key: 'recoilDropdownState',
  default: {},
  effects_UNSTABLE: [persistAtom],
})

import { atom } from 'recoil'
import { recoilPersist } from 'recoil-persist'

const { persistAtom } = recoilPersist()

export const templateMountState = atom({
  key: 'templateMountState',
  default: false,
  effects_UNSTABLE: [persistAtom],
})

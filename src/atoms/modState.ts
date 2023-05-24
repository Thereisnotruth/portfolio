import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist();

export const modState = atom({
  key: 'mod',
  default: 'light',
  effects_UNSTABLE: [persistAtom],
});

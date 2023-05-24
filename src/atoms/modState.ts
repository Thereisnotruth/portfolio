import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist();

export const modState = atom({
  key: 'mod',
  default: 0, // 0 - 라이트모드, 1 - 다크모드
  effects_UNSTABLE: [persistAtom],
});

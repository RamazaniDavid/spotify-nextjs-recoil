import { atom } from 'recoil';

export const playlistIdState = atom({
  key: 'playlistIdState',
  default: '',
});
export const playlistState = atom({
  key: 'playlistState',
  default: null,
});

export const myPlaylistsState = atom({
  key: 'myPlaylistsState',
  default: [{}],
  effects_UNSTABLE: [
    ({ onSet }) => {
      onSet((state) => {
        console.log('myPlaylistsState', state);

        return state;
      });
    },
  ],
});

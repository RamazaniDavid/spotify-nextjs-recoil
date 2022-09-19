import {
  playlistIdState,
  myPlaylistsState,
  playlistState,
} from './lib/atoms/playlistAtoms';

export const StoreAtoms = {
  playlists: {
    selectedPlaylist: { id: playlistIdState, data: playlistState },
    myPlaylists: myPlaylistsState,
  },
};

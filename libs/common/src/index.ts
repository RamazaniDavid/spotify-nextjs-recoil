import useSpotifyPlayList from './lib/hooks/useSpotifyPlayList';

import { LOGIN_URL, spotifyApi } from './lib/utils/spotify'; // <--- this is the named export

export const spotifyUtils = {
  useSpotifyPlayList,
  LOGIN_URL,
  spotifyApi,
};

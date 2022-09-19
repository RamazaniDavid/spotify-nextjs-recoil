import React from 'react';
import useSpotify from './useSpotify';

function useSpotifyPlayList(user?: string) {
  const spotifyApi = useSpotify();
  const [playlists, setPlaylists] = React.useState<any[]>([]);

  React.useEffect(() => {
    if (spotifyApi.getAccessToken()) {
      (user ? spotifyApi.getUserPlaylists(user) : spotifyApi.getUserPlaylists())
        .then((data) => {
          setPlaylists(data.body.items);
        })
        .catch((err) => {
          console.error(err);
        });
    }
  }, [spotifyApi]);

  return playlists;
}

export default useSpotifyPlayList;

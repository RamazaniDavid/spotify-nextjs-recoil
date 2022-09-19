import { signIn, useSession } from 'next-auth/react';
import React, { useEffect, useState } from 'react';
import SpotifyWebApi from 'spotify-web-api-node';

function useSpotify(): SpotifyWebApi {
  const spotifyApi = new SpotifyWebApi({
    clientId: process.env['SPOTIFY_CLIENT_ID'],
    clientSecret: process.env['SPOTIFY_CLIENT_SECRET'],
  });

  const { data: session, status } = useSession();

  useEffect(() => {
    if (session) {
      // if refresh token attempt fails, sign in
      if (session['error'] === 'RefreshAccessTokenError') {
        signIn();
      }

      // if
      const token: string = (session?.user as any).accessToken;

      spotifyApi.setAccessToken(token);
    }
  }, [session]);

  return spotifyApi;
}

export default useSpotify;

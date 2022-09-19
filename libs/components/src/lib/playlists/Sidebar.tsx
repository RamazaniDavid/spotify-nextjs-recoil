import { spotifyUtils } from '@spotify-nx-nextjs-recoil/common';
import { StoreAtoms } from '@spotify-nx-nextjs-recoil/store';
import { shuffle } from 'lodash';
import React, { useEffect } from 'react'
import { useRecoilState } from 'recoil';
import { Misc } from '../misc';

function SidebarPlaylist() {



    const playlists = spotifyUtils.useSpotifyPlayList()
    const [selectedPlaylistId, setSelectedPlaylistId] = useRecoilState<string>(StoreAtoms.playlists.selectedPlaylist.id);

    useEffect(() => {
        playlists.length > 0 && setSelectedPlaylistId(shuffle(playlists)[0].id);
    }, [playlists, setSelectedPlaylistId])


    return (
        <>
            {playlists.map((playlist, i) => <Misc.Buttons.Normal key={i} onClick={() => {
                setSelectedPlaylistId(playlist.id)
            }} className={selectedPlaylistId === playlist.id ? 'text-white font-bold' : ''}>
                {playlist.name}
            </Misc.Buttons.Normal>)}
        </>
    )
}

export default SidebarPlaylist
import React from 'react';
import { FaSignOutAlt, FaHeart, FaHome, FaLandmark, FaPlusCircle, FaRss, FaSearch } from 'react-icons/fa';
import { signOut } from 'next-auth/react';
import { spotifyUtils } from '@spotify-nx-nextjs-recoil/common';
import { useRecoilState } from 'recoil';
import { StoreAtoms } from '@spotify-nx-nextjs-recoil/store';
import { Misc, Playlists } from '@spotify-nx-nextjs-recoil/components';



const Sidebar: React.FC = () => {



    const BreakLine = () => <hr className='border-t-[0.1px] border-gray-900' />

    const Button = ({ children, icon, className, onClick = () => { return } }: {
        children: React.ReactNode,
        icon?: React.ReactNode,
        className?: string,
        onClick?: () => void,
    }) => {

        return (
            <button className={`flex items-center space-x-2
             hover:text-white ${className}`}
                onClick={() => onClick()}>
                {icon}
                <p> {children}</p>
            </button >
        )
    }


    return (
        <div className='h-screen p-5 overflow-y-scroll 
        text-sm text-gray-500 border-r
         border-gray-900 scrollbar-hide
         w-48'>
            <div className='space-y-4'>
                <Button icon={<FaSignOutAlt />} onClick={() => {
                    signOut()
                }}>Log Out</Button>
                <Misc.Buttons.Normal icon={<FaHome />}>Home</Misc.Buttons.Normal>
                <Misc.Buttons.Normal icon={<FaSearch />}>Search</Misc.Buttons.Normal>
                <Misc.Buttons.Normal icon={<FaLandmark />}>Your Library</Misc.Buttons.Normal>
                <BreakLine />
                <Misc.Buttons.Normal icon={<FaHeart />}>Liked Songs</Misc.Buttons.Normal>
                <Misc.Buttons.Normal icon={<FaPlusCircle />}>Create Playlist</Misc.Buttons.Normal>
                <Misc.Buttons.Normal icon={<FaRss />}>Your Episodes</Misc.Buttons.Normal>
                <BreakLine />
                {/* todo: fetch playlists */}
                <Playlists.Sidebar />
            </div>
        </div>
    )
}



export default Sidebar
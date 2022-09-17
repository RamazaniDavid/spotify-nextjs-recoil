import React from 'react';
import { FaSignOutAlt, FaHeart, FaHome, FaLandmark, FaPlusCircle, FaRss, FaSearch } from 'react-icons/fa';

export interface IProps {
    signOut: () => void
}

const Sidebar: React.FC<IProps> = ({ signOut }) => {
    return (
        <div className='text-gray-500 p-5 text-sm border-r border-gray-900 min-h-screen'>
            <div className='space-y-4'>
                <Button icon={<FaSignOutAlt />} onClick={() => {
                    signOut()
                }}>Log Out</Button>
                <Button icon={<FaHome />}>Home</Button>
                <Button icon={<FaSearch />}>Search</Button>
                <Button icon={<FaLandmark />}>Your Library</Button>
                <BreakLine />
                <Button icon={<FaHeart />}>Liked Songs</Button>
                <Button icon={<FaPlusCircle />}>Create Playlist</Button>
                <Button icon={<FaRss />}>Your Episodes</Button>
                <BreakLine />
                {/* todo: fetch playlists */}
                {[...Array(10)].map((_, i) => <Button key={i}>Playlist {i}</Button>)}
            </div>
        </div>
    )
}


const BreakLine = () => <hr className='border-t-[0.1px] border-gray-900' />

const Button = ({ children, icon, onClick = () => { return } }: {
    children: React.ReactNode,
    icon?: React.ReactNode,
    onClick?: () => void,
}) => {

    return (
        <button className="flex items-center space-x-2 hover:text-white"
            onClick={() => onClick()}>
            {icon}
            <p>{children}</p>
        </button>
    )
}


export default Sidebar
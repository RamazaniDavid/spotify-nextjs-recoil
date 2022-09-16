import React from 'react';
import { FaHeart, FaHome, FaLandmark, FaPlusCircle, FaRss, FaSearch } from 'react-icons/fa';

import Footer from './Footer';
import Header from './Header';
import Main from './Main';

function SmartLayout() {
    return (
        <div className='bg-black h-screen overflow-hidden'>
            <Header></Header>
            <Main leftSidebar={(<div className='space-y-4'>
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
            </div>)}>
            </Main>
            <Footer>
                <div>player</div>
            </Footer>
        </div >
    )
}

const BreakLine = () => <hr className='border-t-[0.1px] border-gray-900' />

const Button = ({ children, icon }: { children: React.ReactNode, icon?: React.ReactNode }) => {
    return (
        <button className="flex items-center space-x-2 hover:text-white">
            {icon}
            <p>{children}</p>
        </button>
    )
}


export default SmartLayout
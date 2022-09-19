import React from 'react';
import { signOut, useSession } from 'next-auth/react';

import Footer from './Footer';
import Header from './Header';
import Main from './Main';


const SmartLayout: React.FC = () => {

    const { data: session, status } = useSession();




    return (
        <div className='h-screen overflow-hidden text-gray-300 bg-black'>
            <Header></Header>
            <Main />
            <Footer>
                <div>player</div>
            </Footer>
        </div >
    )
}


export default SmartLayout
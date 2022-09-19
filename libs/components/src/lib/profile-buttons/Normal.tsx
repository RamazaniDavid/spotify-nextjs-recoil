import React from 'react'
import { signOut, useSession } from 'next-auth/react';
import { FaChevronDown, FaUserAlt } from 'react-icons/fa';

function Normal() {
    const { data: session, status } = useSession();
    return (
        <div className='flex items-center p-1 pr-2 space-x-3 bg-black rounded-full cursor-pointer opacity-90 hover:opacity-80'>
            {session?.user?.image && session?.user?.name ?
                <img src={session?.user?.image} alt={session?.user?.name}
                    className="w-10 h-10 rounded-full" /> : <FaUserAlt />}
            <h2>{session?.user?.name} </h2>
            <FaChevronDown />
        </div>
    )
}

export default Normal
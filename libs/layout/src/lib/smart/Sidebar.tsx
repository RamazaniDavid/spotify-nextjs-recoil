import React from 'react';

export interface IProps {
    children: React.ReactNode
}

const Sidebar: React.FC<IProps> = ({ children }) => {
    return (
        <div className='text-gray-500 p-5 text-sm border-r border-gray-900 min-h-screen'>
            {children}
        </div>
    )
}

export default Sidebar
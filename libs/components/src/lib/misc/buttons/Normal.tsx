import React from 'react'

const Normal: React.FC<{
    children: React.ReactNode,
    icon?: React.ReactNode,
    className?: string,
    onClick?: () => void,
}> = ({ children, icon, className, onClick = () => { return } }) => {

    return (
        <button className={`flex items-center space-x-2
             hover:text-white ${className}`}
            onClick={() => onClick()}>
            {icon}
            <p> {children}</p>
        </button >
    )
}

export default Normal
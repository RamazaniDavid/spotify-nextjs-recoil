import React from 'react'

export interface IProps {
    children: React.ReactNode
}

const Footer: React.FC<IProps> = ({ children }) => {
    return (
        <footer>
            {children}
        </footer>
    )
}

export default Footer
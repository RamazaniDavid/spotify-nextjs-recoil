import React from 'react';

import Sidebar from './Sidebar';

export interface IProps {
  leftSidebar?: React.ReactNode
  children?: React.ReactNode
  rightSidebar?: React.ReactNode
}



const Main: React.FC<IProps> = ({ leftSidebar, children, rightSidebar }) => {
  return (
    <main className='flex'>
      {leftSidebar ? <div className="flex"><Sidebar>{leftSidebar}</Sidebar></div> : null}
      {children ? <div className="flex">{children}</div> : null}
      {rightSidebar ? <div className="flex"><Sidebar>{rightSidebar}</Sidebar></div> : null}
    </main>
  )
}

export default Main
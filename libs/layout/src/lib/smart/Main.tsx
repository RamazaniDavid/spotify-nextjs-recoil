import React from 'react';
import Center from './Center';

import Sidebar from './Sidebar';

export interface IProps {
  signOut: () => void
}



const Main: React.FC<IProps> = ({ signOut }) => {
  return (
    <main className='flex'>
      <Sidebar signOut={signOut }/>
      <Center />
    </main>
  )
}

export default Main
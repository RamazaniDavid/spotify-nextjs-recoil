import React from 'react';
import Center from './Center';

import Sidebar from './Sidebar';




const Main: React.FC = () => {
  return (
    <main className='flex'>
      <Sidebar  />
      <Center />
    </main>
  )
}

export default Main
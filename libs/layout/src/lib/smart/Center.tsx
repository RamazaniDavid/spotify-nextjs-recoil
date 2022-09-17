import { ProfileButtons } from '@my-spotify-recoil/components'
import React from 'react'


export interface IProps {
  children?: React.ReactNode
  className?: string
}

function Center(props: IProps) {
  return (
    <div className="flex flex-col w-full m-5">
      <div className=' flex w-full place-content-end'>
        <ProfileButtons.Normal />
      </div>
      <div className=' flex '></div>
    </div>
  )
}

export default Center
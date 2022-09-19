import { ProfileButtons } from '@spotify-nx-nextjs-recoil/components'
import React, { useEffect, useState } from 'react'
import { shuffle } from 'lodash'
import { useRecoilValue, useRecoilState } from 'recoil'
import { StoreAtoms } from '@spotify-nx-nextjs-recoil/store'

const colors = [
  "from-green-500",
  "from-blue-500",
  "from-red-500",
  "from-yellow-500",
  "from-pink-500",
  "from-purple-500",
  "from-indigo-500",

]


function Center() {

  const [color, setColor] = useState<string>("")
  const selectedPlaylistId = useRecoilValue(StoreAtoms.playlists.selectedPlaylist.id)
  const [playlist, setPlaylist] = useRecoilState(StoreAtoms.playlists.selectedPlaylist.data)


  useEffect(() => {
    setColor(shuffle(colors)[0])
  }, [selectedPlaylistId])



  return (
    <div className={`flex flex-col flex-grow w-full bg-gradient-to-b to-black ${color}`}>
      <header className={`flex w-full p-4 place-content-end `}>
        <ProfileButtons.Normal />
      </header>
      <section className={`flex items-end text-white space-x-7   h-80`}>
        {selectedPlaylistId}
      </section>
    </div>
  )
}

export default Center
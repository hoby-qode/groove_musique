import React from 'react'
import { useRecoilState } from 'recoil'
import { allSongsState } from '../../atoms/player.atom'
import TrackItem from '@/src/components/TrackItem/TrackItem'
import Headerpage from '@/src/components/Headerpage/Headerpage'
const albums = ({ searchResults }: { searchResults: any }) => {
  const [Songs, setSongs] = useRecoilState(allSongsState)
  return (
    <>
      <Headerpage />
      <ul className="allSongs">
        {searchResults
          ? searchResults.map((item, key) => {
              return <TrackItem item={item} key={key} />
            })
          : Songs.map((item, key) => {
              return <TrackItem item={item} key={key} />
            })}
      </ul>
    </>
  )
}

export default albums

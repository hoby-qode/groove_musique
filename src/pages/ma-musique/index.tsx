import React from 'react'
import { useRecoilState, useRecoilValue } from 'recoil'
import { allSongsState, searchResultsState } from '../../atoms/player.atom'
import TrackItem from '@/src/components/TrackItem/TrackItem'
import Headerpage from '@/src/components/Headerpage/Headerpage'
const index = () => {
  const [Songs, setSongs] = useRecoilState(allSongsState)
  const searchResults = useRecoilValue(searchResultsState)
  console.log(searchResults)

  return (
    <>
      <Headerpage />
      <ul className="allSongs">
        {searchResults.length > 0
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

export default index

import React from 'react'
import { useRecoilState, useRecoilValue } from 'recoil'
import { allSongsState, searchResultsState } from '../../atoms/player.atom'
import TrackItem from '@/src/components/TrackItem/TrackItem'
import Headerpage from '@/src/components/Headerpage/Headerpage'
const Index = () => {
  const [Songs, setSongs] = useRecoilState(allSongsState)
  const searchResults = useRecoilValue(searchResultsState)
  return (
    <>
      <Headerpage />
      <ul className="allSongs">
        {searchResults.length > 0
          ? searchResults.map((item, key) => {
              return <TrackItem item={item} key={key} cle={item.id} />
            })
          : Songs.map((item, key) => {
              return <TrackItem item={item} key={key} cle={item.id} />
            })}
      </ul>
    </>
  )
}

export default Index

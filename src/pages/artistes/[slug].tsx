import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import { useRecoilValue } from 'recoil'
import { allSongsState, searchResultsState } from '@/src/atoms/player.atom'
import useGenerateSlug from '@/src/hooks/useGenerateSlug'
import Headerpage from '@/src/components/Headerpage/Headerpage'
import TrackItem from '@/src/components/TrackItem/TrackItem'
const Artiste = () => {
  const router = useRouter()
  const Songs = useRecoilValue(allSongsState)
  const searchResults = useRecoilValue(searchResultsState)
  const filterSongs = router.query.slug
    ? Songs.filter((song) =>
        useGenerateSlug(song.artist).includes(
          useGenerateSlug(router.query.slug),
        ),
      )
    : []
  return (
    <>
      <Headerpage subtitle={'Artiste : '} />
      <ul className="allSongs">
        {filterSongs.map((item, key) => {
          return <TrackItem item={item} key={key} cle={item.id} />
        })}
      </ul>
    </>
  )
}

export default Artiste

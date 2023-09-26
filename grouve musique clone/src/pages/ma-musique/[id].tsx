import React from 'react'
import { useRecoilState } from 'recoil'
import {
  allSongsState,
  currentlyPlayingTrackState,
} from '../../atoms/player.atom'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
const index = () => {
  const router = useRouter()
  const [playingTrack, setPlayingTrack] = useRecoilState(
    currentlyPlayingTrackState,
  )
  const [Songs, setSongs] = useRecoilState(allSongsState)

  // if (parseInt(router.query.id as string, 10) != playingTrack.id) {
  //   setPlayingTrack(Songs[parseInt(router.query.id as string, 10)])
  // }

  useEffect(() => {
    if (parseInt(router.query.id as string, 10) != playingTrack.id) {
      // setPlayingTrack(Songs[parseInt(router.query.id as string, 10)])
      setPlayingTrack(Songs[parseInt(router.query.id as string, 10)])
    }
  }, [router.query.id])

  return (
    <ul className="allSongs">
      <h2>Musique numero {router.query.id}</h2>
      {Songs.map((item, key) => {
        return (
          <li
            key={key}
            className={`d-flex py-3 ${
              key % 2 == 0 ? 'bg-white' : 'bg-light-gray'
            }`}
          >
            <input type="checkbox" />
            <div className="row w-100">
              <Link href={`/ma-musique/${item.id}`} className="title col-md-4">
                {item.title}
              </Link>
              <div className="artist col-md-3">{item.artist}</div>
              <div className="genre col-md-3">{item.genre}</div>
              <div className="duration col-2">{item.duration}</div>
            </div>
          </li>
        )
      })}
    </ul>
  )
}

export default index

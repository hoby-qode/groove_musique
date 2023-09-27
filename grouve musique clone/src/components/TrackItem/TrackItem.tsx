import React, { useLayoutEffect } from 'react'
import { Song } from '@/src/types/SongType'
import styles from './TrackItem.module.css'
import {
  currentlyPlayingTrackState,
  allSongsState,
  playState,
} from '@/src/atoms/player.atom'
import { useRecoilState, useRecoilValue } from 'recoil'
const TrackItem = ({ item }: { item: Song }) => {
  const allSongs = useRecoilValue(allSongsState)
  const [isPlay, setIsPlay] = useRecoilState(playState)
  const handleChooseTrack = (id: number): void => {
    setPlayingTrack(allSongs[id])
    setIsPlay(!isPlay)
  }

  const [playingTrack, setPlayingTrack] = useRecoilState(
    currentlyPlayingTrackState,
  )

  return (
    <li className={styles.track}>
      <input type="checkbox" />
      <div className="row w-100">
        <div
          className={`${styles.track_title} col-md-4 ${
            playingTrack == item ? styles.track_title_active : ''
          }`}
          onClick={() => handleChooseTrack(item.id)}
        >
          {item.title}
        </div>
        <div className={`${styles.track_artist} col-md-3`}>{item.artist}</div>
        <div className={`${styles.track_genre} col-md-3`}>{item.genre}</div>
        <div className={`${styles.track_duration} col-md-2`}>
          {item.duration}
        </div>
      </div>
    </li>
  )
}

export default TrackItem

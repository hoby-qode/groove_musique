import React, { useState, SyntheticEvent, useEffect } from 'react'
import useRandomIntFromInterval from '@/src/hooks/useRadomIntFromInterval'
import useFormattedTime from '@/src/hooks/useFormatedTime'
import {
  currentlyPlayingTrackState,
  allSongsState,
} from '@/src/atoms/player.atom'
import { useRecoilState, useRecoilValue } from 'recoil'

import styles from './Controls.module.css'
import {
  TbPlayerSkipBack,
  TbPlayerSkipForward,
  TbPlayerPlay,
  TbArrowsShuffle,
  TbReload,
  TbPlayerPause,
} from 'react-icons/tb'
const Controls = (props: { isMuted: Boolean; volume: number }) => {
  const ref = React.createRef<HTMLAudioElement | null>()
  const [isPlaying, setIsPlaying] = useState<boolean>(false)
  const allTracks = useRecoilValue(allSongsState)
  const [timeSongInfos, setTimeSongInfos] = useState<{
    currentTime: number
    duration: number
  }>({
    currentTime: 0,
    duration: 0,
  })
  const [playingTrack, setPlayingTrack] = useRecoilState(
    currentlyPlayingTrackState,
  )

  const getTrackById = (id: number) => {
    return allTracks[id]
  }
  /**
   * @ChangeLog (Marcel) <houbby22@gmail.com> Gestion de pause | play sur l'audio
   */
  const TogglePause = () => {
    if (isPlaying) {
      setIsPlaying(false)
    } else {
      setIsPlaying(true)
    }
  }

  /**
   * @ChangeLog (Marcel) <houbby22@gmail.com> Gestion de next | prev sur l'audio
   */
  const HandlePrevOrNext = (args: string) => {
    let totalSong = allTracks.length - 1
    if (args === 'prev') {
      if (playingTrack!.id == 0) {
        setPlayingTrack(getTrackById(totalSong))
      } else {
        setPlayingTrack(getTrackById(playingTrack!.id - 1))
      }
    }
    if (args === 'next') {
      if (playingTrack!.id == totalSong) {
        setPlayingTrack(getTrackById(0))
      } else {
        setPlayingTrack(getTrackById(playingTrack!.id + 1))
      }
    }
  }

  /**
   * @ChangeLog (Marcel) <houbby22@gmail.com> Gestion de randomnisation de son
   */
  const HandleRandom = () => {
    setPlayingTrack(
      getTrackById(useRandomIntFromInterval(0, allTracks.length - 1)),
    )
  }

  /**
   * @ChangeLog (Marcel) <houbby22@gmail.com> Remis à zero du piste de track
   */
  const handleReload = () => {
    if (ref.current) {
      ref.current.currentTime = 0
    }
    setTimeSongInfos({
      currentTime: 0,
      duration: 0,
    })
  }

  /**
   * @ChangeLog (Marcel) <houbby22@gmail.com> Mise à jour du piste de tracking au drag sur le range
   */
  const handleDragging = (e: SyntheticEvent<EventTarget>): void => {
    if (ref.current) {
      ref.current.currentTime = parseInt((e.target as HTMLInputElement).value)
    }
  }

  /**
   * @ChangeLog (Marcel) <houbby22@gmail.com> Mise à jour des changements sur le balise audio
   */
  const handleTimeupdate = (e: SyntheticEvent<EventTarget>): void => {
    const current = (e.target as HTMLMediaElement).currentTime
    const duration = (e.target as HTMLMediaElement).duration

    if (current == duration) {
      HandlePrevOrNext('next')
    } else {
      setTimeSongInfos({
        currentTime: current,
        duration: duration,
      })
    }
  }
  const formattedCurrentTime = useFormattedTime(timeSongInfos.currentTime);
  const formattedDuration = useFormattedTime(timeSongInfos.duration);
  useEffect(() => {
    if (ref.current) {
      if (isPlaying) {
        ref.current.play()
      } else {
        ref.current.pause()
      }

      if (props.isMuted) {
        ref.current.volume = 0
      } else {
        ref.current.volume = props.volume
      }
    }
  }, [isPlaying, props.isMuted, props.volume, ref])
  return (
    <div className={styles.controls}>
      <div>
        <div className="d-flex justify-content-center gap-15 align-items-center">
          <button
            onClick={() => HandleRandom()}
            className={styles.controlsButton}
          >
            <TbArrowsShuffle />
          </button>
          <button
            onClick={() => HandlePrevOrNext('prev')}
            className={styles.controlsButton}
          >
            <TbPlayerSkipBack />
          </button>
          <button
            onClick={() => TogglePause()}
            className={`${styles.controlsButton} ${styles.controlsButtonPlay}`}
          >
            {isPlaying ? <TbPlayerPlay /> : <TbPlayerPause />}
          </button>
          <button
            onClick={() => HandlePrevOrNext('next')}
            className={styles.controlsButton}
          >
            <TbPlayerSkipForward />
          </button>
          <button
            onClick={() => handleReload()}
            className={styles.controlsButton}
          >
            <TbReload />
          </button>
        </div>
      </div>
      <audio
        src={playingTrack.src}
        controls
        ref={ref}
        onTimeUpdate={handleTimeupdate}
        onLoadedMetadata={handleTimeupdate}
        className="d-none"
      />
      <div className={styles.range__container}>
        <div className={styles.rangeTime}>{formattedCurrentTime}</div>
        <input
          type="range"
          min={0}
          max={timeSongInfos.duration}
          onChange={(e) => handleDragging(e)}
          value={timeSongInfos.currentTime}
          className={styles.range}
        />
        <div className={styles.rangeTime}>{formattedDuration}</div>
      </div>
    </div>
  )
}
export default Controls

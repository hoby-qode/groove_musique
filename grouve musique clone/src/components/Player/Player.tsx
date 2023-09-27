import Controls from '@/src/components/Controls/Controls'
import Volume from '@/src/components/Volume/Volume'
import styles from './Player.module.css'
import Image from 'next/image'
import { SyntheticEvent, useState } from 'react'
import { useRecoilValue } from 'recoil'
import { currentlyPlayingTrackState } from '@/src/atoms/player.atom'

const Player = () => {
  const [isMuted, setIsMuted] = useState<boolean>(false)
  const [volume, setVolume] = useState<number>(1.0)
  const playingTrack = useRecoilValue(currentlyPlayingTrackState)

  const handleMuted = () => {
    if (!isMuted) {
      setIsMuted(true)
      setVolume(0)
    } else {
      setIsMuted(false)
    }
  }
  const handleVolume = (e: SyntheticEvent<EventTarget>) => {
    setVolume(parseFloat((e.target as HTMLInputElement).value))
  }

  return (
    <>
      <section className={`${styles.player} row`}>
        <div className={`${styles.player_infos} col-md-3 d-flex`}>
          <div className={styles.player_infos_picture}>
            {playingTrack ? (
              <Image
                src={playingTrack.cover}
                alt={playingTrack.title}
                width={130}
                height={120}
                priority
                quality={50}
              />
            ) : (
              ''
            )}
          </div>
          {playingTrack ? (
            <div className={styles.player_infos_title}>
              <h2>
                {playingTrack?.title} - {playingTrack?.id}
              </h2>
              <div className={styles.player_infos_artiste}>
                <strong>{playingTrack?.artist}</strong>
              </div>
            </div>
          ) : (
            ''
          )}
        </div>
        <div className={`${styles.player_controls} col-md-6`}>
          <Controls isMuted={isMuted} volume={volume} />
        </div>
        <div className={`${styles.player_volume} col-md-3`}>
          <Volume handleMuted={handleMuted} handleVolume={handleVolume} />
        </div>
      </section>
    </>
  )
}
export default Player

import { useRecoilValue } from 'recoil'
import { currentlyPlayingTrackState } from '@/src/atoms/player.atom'
import React from 'react'

const useCurrentlyPlayingTrack = () => {
  return useRecoilValue(currentlyPlayingTrackState)
}

export default useCurrentlyPlayingTrack

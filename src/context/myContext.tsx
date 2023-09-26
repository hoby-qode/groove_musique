import React from 'react'
import { Song } from '@/src/components/Audio/SongType'

export const AudioContext = React.createContext<Song | null>(null)

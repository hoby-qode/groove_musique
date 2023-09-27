import React from 'react'
import { Song } from '@/src/types/SongType'

export const AudioContext = React.createContext<Song | null>(null)

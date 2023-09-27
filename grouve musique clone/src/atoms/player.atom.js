import { atom, selector } from "recoil";
import SONGS from '@/src/songs'

export const playState = atom({
  key: "playState",
  default: false,
});

const sortedSongsData = SONGS.sort((a, b) => a.title > b.title ? 1 : -1)
export const currentlyPlayingTrackState = atom({
  key: "currentlyPlayingTrack",
  default: sortedSongsData[0],
});
export const allSongsState = atom({
  key: "allSongsState",
  default: sortedSongsData,
});

export const searchResultsState = atom({
  key: "searchResultsState",
  default: sortedSongsData
})

export const artistsState = atom({
  key: 'artistsState',
  default: selector({
    key: 'artitsState/default',
    get: ({get}) => {
      const songs = get(allSongsState)
      //utilisez un ensemble (Set) pour éliminer les duplications
      const artistsSet = new Set()
      songs.forEach((song) =>{
        artistsSet.add(song.artist)
      })
      const artists = Array.from(artistsSet)
      return artists
    }
  })
})

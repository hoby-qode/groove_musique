import { atom } from "recoil";
import Songs from '@/src/songs'

export const playState = atom({
  key: "isPlayState",
  default: false,
});

export const currentlyPlayingTrackState = atom({
  key: "currentlyPlayingTrack",
  default: Songs[0],
});

export const allSongsState = atom({
  key: "allsongs",
  default: Songs,
});

export const searchResultsState = atom({
  key: "searchResults",
  default: Songs
})


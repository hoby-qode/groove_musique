import { atom } from "recoil";
import Songs from '@/src/songs'
export const playState = atom({
  key: "playState",
  default: false,
});

export const currentlyPlayingTrackState = atom({
  key: "currentlyPlayingTrackState",
  default: Songs[0],
});

export const allSongsState = atom({
  key: "allsongs",
  default: Songs,
});

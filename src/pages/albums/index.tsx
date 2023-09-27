import React from 'react';
import { useRecoilState } from 'recoil';
import { allSongsState } from '../../atoms/player.atom';
import TrackItem from '@/src/components/TrackItem/TrackItem';
import Headerpage from '@/src/components/Headerpage/Headerpage';

const Albums = ({ searchResults }: { searchResults: any[] }) => { // Spécifiez le type explicite pour searchResults
  const [Songs, setSongs] = useRecoilState(allSongsState);
  return (
    <>
      <Headerpage subtitle={'Album'} />
      <ul className="allSongs">
        {searchResults
          ? searchResults.map((item: any, key: number) => { // Spécifiez le type explicite pour item et key
              return <TrackItem item={item} key={key} cle={key} />;
            })
          : Songs.map((item: any, key: number) => { // Spécifiez le type explicite pour item et key
              return <TrackItem item={item} key={key} cle={key} />;
            })}
      </ul>
    </>
  );
};

export default Albums;

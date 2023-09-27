import React, { SyntheticEvent } from 'react'
import styles from './SearchBar.module.css'
import { TbSearch } from 'react-icons/tb'
import { useState } from 'react'
import { allSongsState, searchResultsState } from '@/src/atoms/player.atom'
import { useRecoilState, useRecoilValue } from 'recoil'
const SearchBar = () => {
  const [search, setSearch] = useState<string>(''); // Spécifiez le type string ici
  const [searchResults, setSearchResults] = useRecoilState(searchResultsState);
  const allSongs = useRecoilValue(allSongsState);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const searchText = e.target.value.toLowerCase();
    setSearch(searchText);

    if (searchText !== '') {
      const filterSongs = allSongs.filter((song) =>
        song.title.toLowerCase().includes(searchText)
      );
      setSearchResults(filterSongs);
    } else {
      setSearchResults(allSongs);
    }
  };
  return (
    <div className={styles.inputGroup}>
      <input
        type="search"
        placeholder="Rechercher"
        value={search}
        onChange={(e) => handleChange(e)}
      />
      <TbSearch />
    </div>
  )
}

export default SearchBar

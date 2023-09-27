import React, { SyntheticEvent } from 'react'
import styles from './SearchBar.module.css'
import { TbSearch } from 'react-icons/tb'
import { useState } from 'react'
import { allSongsState, searchResultsState } from '@/src/atoms/player.atom'
import { useRecoilState, useRecoilValue } from 'recoil'
const SearchBar = () => {
  const [search, setSearch] = useState()
  const [searchResults, setSearchResults] = useRecoilState(searchResultsState)
  const allSongs = useRecoilValue(allSongsState)
  const handleChange = (e: any) => {
    setSearch(e.target.value)
    if (search && search != '') {
      const filterSongs =
        search != ''
          ? allSongs.filter((song) =>
              song.title.toLowerCase().includes(search.toLowerCase()),
            )
          : []
      setSearchResults(filterSongs)
    } else {
      setSearchResults(allSongs)
    }
  }
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

import React from 'react'
import styles from './SearchBar.module.css'
import { TbSearch } from 'react-icons/tb'
const SearchBar = () => {
  return (
    <div className={styles.inputGroup}>
      <input type="search" placeholder="Rechercher" />
      <TbSearch />
    </div>
  )
}

export default SearchBar

import React from 'react'
import styles from './Sidebar.module.css'
import SearchBar from '@/src/components/SearchBar/SearchBar'
import Navigation from '@/src/components/Navigation/Navigation'
const Sidebar = () => {
  return (
    <section className={styles.sidebar}>
      <SearchBar />
      <Navigation />
    </section>
  )
}

export default Sidebar

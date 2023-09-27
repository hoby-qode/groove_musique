import React from 'react'
import styles from './Sidebar.module.css'
import SearchBar from '@/src/components/SearchBar/SearchBar'
import Navigation from '@/src/components/Navigation/Navigation'
import HamburgerMenu from '@/src/components/HamburgerMenu/HamburgerMenu'
const Sidebar = ({
  setIsFullSidebar,
  isFullSidebar,
}: {
  setIsFullSidebar: Function
  isFullSidebar: boolean
}) => {
  console.log(isFullSidebar)

  return (
    <section
      className={`${styles.sidebar} ${isFullSidebar ? 'isFullSidebar' : ''}`}
    >
      <div className="logo">Groove Musique Clone</div>
      <HamburgerMenu
        setIsFullSidebar={setIsFullSidebar}
        isFullSidebar={isFullSidebar}
      />
      <SearchBar />
      <Navigation />
    </section>
  )
}

export default Sidebar

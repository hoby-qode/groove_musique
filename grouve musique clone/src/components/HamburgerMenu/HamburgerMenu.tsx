import React from 'react'
import styles from './HamburgerMenu.module.css'

const HamburgerMenu = ({
  setIsFullSidebar,
  isFullSidebar,
}: {
  setIsFullSidebar: Function
  isFullSidebar: boolean
}) => {
  const handleSizeSidebar = () => {
    setIsFullSidebar(!isFullSidebar)
  }
  return (
    <button className={styles.hamburger} onClick={() => handleSizeSidebar()}>
      <span></span>
    </button>
  )
}

export default HamburgerMenu

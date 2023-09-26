import Player from '@/src/components/Player/Player'
import Sidebar from '@/src/components/Sidebar/Sidebar'
import styles from './layout.module.css'
import UploadFile from '@/src/components/UploadFile/UploadFile'
import { useState } from 'react'
const Layout = ({ children }: { children: React.ReactNode }) => {
  const [isFullSidebar, setIsFullSidebar] = useState(false)
  return (
    <>
      <main className={styles.content}>
        <Sidebar
          setIsFullSidebar={setIsFullSidebar}
          isFullSidebar={isFullSidebar}
        />
        <div className={styles.children}>{children}</div>
      </main>
      <Player />
      <UploadFile />
    </>
  )
}

export default Layout

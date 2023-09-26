import Player from '@/src/components/Player/Player'
import Sidebar from '@/src/components/Sidebar/Sidebar'
import styles from './layout.module.css'
const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <main className={styles.content}>
        <div className={styles.sidebar}>
          <Sidebar />
        </div>
        <div className={styles.children}>{children}</div>
      </main>
      <Player />
    </>
  )
}

export default Layout

import React from 'react'
import { useRouter } from 'next/router'
import { usePathname } from 'next/navigation'
import styles from './Headerpage.module.css'
const Headerpage = () => {
  const router = useRouter()
  const pathname = usePathname()
  let title = router.route.substring(1, router.route.length) // suppression du premier slash
  title = title.replace('-', ' ') // remplacement du tiret en espace

  const navLinks = [
    {
      name: 'Morceaux',
      href: '/ma-musique',
    },
    {
      name: 'Artistes',
      href: '/ma-musique/artistes',
    },
    {
      name: 'Albums',
      href: '/ma-musique/albums',
    },
  ]
  return (
    <>
      <h1>{title}</h1>
      <ul className={styles.navLinks__container}>
        {navLinks.map((link, key) => {
          const isActive = pathname === link.href
          return (
            <li key={key}>
              <button
                className={isActive ? styles.navItem__active : styles.navItem}
                onClick={() => router.push(link.href)}
              >
                {link.name}
              </button>
            </li>
          )
        })}
      </ul>
    </>
  )
}

export default Headerpage

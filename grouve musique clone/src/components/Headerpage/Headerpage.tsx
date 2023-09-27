import React from 'react'
import { useRouter } from 'next/router'
import { usePathname } from 'next/navigation'
import styles from './Headerpage.module.css'
const Headerpage = ({ subtitle }: { subtitle: string | null }) => {
  const router = useRouter()
  console.log(router.query.slug)

  const pathname = usePathname()
  let title = subtitle ? subtitle : ''
  if (!router.query.slug) {
    title = title + ''
  } else {
    title = title + router.query.slug
  }
  title = title?.replace('-', ' ') // remplacement du tiret en espace
  console.log(router.query.slug)

  const navLinks = [
    {
      name: 'Morceaux',
      href: '/ma-musique',
    },
    {
      name: 'Artistes',
      href: '/artistes',
    },
    {
      name: 'Albums',
      href: '/albums',
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

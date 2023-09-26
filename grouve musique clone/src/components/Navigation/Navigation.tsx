import React from 'react'
import { usePathname } from 'next/navigation'
import { useRouter } from 'next/router'
import { TbAlbum, TbMusic } from 'react-icons/tb'
import styles from './Navigation.module.css'
const navLinks = [
  {
    name: 'Ma musique',
    href: '/ma-musique',
    icon: <TbMusic />,
  },
  {
    name: 'Albums',
    href: '/albums',
    icon: <TbAlbum />,
  },
  {
    name: 'Artistes',
    href: '/artistes',
    icon: <TbMusic />,
  },
  {
    name: 'Morceaux',
    href: '/morceaux',
    icon: <TbMusic />,
  },
]
const Navigation = () => {
  const pathname = usePathname()
  const router = useRouter()
  return (
    <>
      {navLinks.map((link, key) => {
        const isActive = pathname === link.href

        return (
          <button
            className={isActive ? styles.navItem__active : styles.navItem}
            onClick={() => router.push(link.href)}
            key={key}
          >
            {link.icon}
            {link.name}
          </button>
        )
      })}
    </>
  )
}

export default Navigation

import React from 'react'
import { useRecoilValue } from 'recoil'
import { artistsState } from '@/src/atoms/player.atom'
import Headerpage from '@/src/components/Headerpage/Headerpage'
import Link from 'next/link'
import useGenerateSlug from '@/src/hooks/useGenerateSlug'
const Artistes = () => {
  const artists = useRecoilValue(artistsState)
  const slugs = artists.map(item => useGenerateSlug(item)) 
  return (
    <>
      <Headerpage subtitle={'Artistes'} />
      <ul className="allSongs">
        {artists.map((item, key) => {
          const slug = slugs[key] // Utiliser le slug correspondant
          return (
            <Link href={`/artistes/${slug}`} key={key}>
              {item}
            </Link>
          )
        })}
      </ul>
    </>
  )
}

export default Artistes

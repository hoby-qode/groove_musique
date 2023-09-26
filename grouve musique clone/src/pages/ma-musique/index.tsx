import React from 'react'
import { useRecoilState } from 'recoil'
import { allSongsState } from '../../atoms/player.atom'
import Link from 'next/link'
const index = () => {
  const [Songs, setSongs] = useRecoilState(allSongsState)
  return (
    <ul className="allSongs">
      {Songs.map((item, key) => {
        return (
          <li
            key={key}
            className={`d-flex py-3 ${
              key % 2 == 0 ? 'bg-white' : 'bg-light-gray'
            }`}
          >
            <input type="checkbox" />
            <div className="row w-100">
              <Link href={`/ma-musique/${item.id}`} className="title col-md-4">
                {item.title}
              </Link>
              <div className="artist col-md-3">{item.artist}</div>
              <div className="genre col-md-3">{item.genre}</div>
              <div className="duration col-2">{item.duration}</div>
            </div>
          </li>
        )
      })}
    </ul>
  )
}

export default index

import React from 'react'
import Head from 'next/head'
import Player from '@/src/components/Player/Player'
import type { NextPage } from 'next'
import Sidebar from '@/src/components/Sidebar/Sidebar'
import { useEffect } from 'react'
const Home = () => {
  return (
    <>
      <Head>
        <title>Clone spotify</title>
        <meta name="description" content="Clone Spotify" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>{/* <Player /> */}</main>
    </>
  )
}

export default Home

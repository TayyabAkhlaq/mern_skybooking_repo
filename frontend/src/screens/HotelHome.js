import React from 'react'
import Navbar from '../components/Navbar'
import Hotellayout from '../components/Hotellayout'
import Carousal from '../components/Carousal'

export default function Home() {
  return (
    <div>
      <Navbar/>
      <Hotellayout/>
      <Carousal/>
    </div>
  )
}

import React from 'react'
import Navbar from '../components/Navbar'
import Flightlayout from '../components/Flightlayout'
import Carousal from '../components/Carousal'

export default function Home() {
  return (
    <div>
      <Navbar/>
      <Flightlayout/>
      <Carousal/>
    </div>
  )
}

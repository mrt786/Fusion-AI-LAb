import React from 'react'
import Navbar from '../Navbar/Navbar'
import logo from '/logo.png'

export default function Header() {
  return (
    <div className='max-h-28 flex  bg-deepCharcoal  p-6 w-full justify-between lg:justify-evenly'>
        <div className = ''>
            <img className=' mx-10  w-[140px] h-[60px] cursor-pointer' src = {logo} alt="Logo lies here" />
        </div>
        <Navbar />
    </div>
  )
}

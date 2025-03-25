import { Link } from 'react-router-dom'

import React from 'react'
import logo from "../logo.png"

const Navbar = () => {
  return (
    <div className='font-mono font-bold flex border space-x-8 items-center pl-3 py-4'>
        <img src={logo} alt="" className='w-[27px]' />     

        <Link to="/" className='text-blue-700'>Movie</Link> 
        <Link to="/watchlist" className='text-blue-700'>Watchlist</Link>  
    </div>
  )
}

export default Navbar

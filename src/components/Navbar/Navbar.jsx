import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import Searchbar from '../Searchbar/Searchbar'

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-10 border-b border-gray-200 bg-opacity-30 backdrop-filter backdrop-blur-lg">
        <div className="max-w-5xl mx-auto px-4">
            <div className="flex items-center justify-between h-16">
            <NavLink to={'/'}>
            <span className="text-2xl  font-semibold">Makise</span>
            </NavLink>
            <div className="flex space-x-4 ">
                <p>Top</p>
                <Link to = {'/movies/1'}>
                  <p>Movies</p>
                </Link>
                <p>Genres</p>
                <p>Top Airing</p>
            </div>
                <Searchbar />
            </div>
        </div>
    </nav> 
  )
}

export default Navbar
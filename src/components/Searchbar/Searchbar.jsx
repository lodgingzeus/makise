import React from 'react'
import { AiOutlineSearch } from 'react-icons/ai'

const Searchbar = () => {
  return (
    <div className='bg-slate-500 flex p-1 w-[250px] justify-around rounded-full'>
        <input type="text" className='text-white placeholder-white outline-none rounded-lg bg-slate-500 p-1 justify-center' placeholder='search for anime' />
        <AiOutlineSearch className='content-center flex mt-2 text-white' />
    </div>
  )
}

export default Searchbar
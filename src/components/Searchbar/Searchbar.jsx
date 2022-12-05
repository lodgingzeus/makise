import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { AiOutlineSearch } from 'react-icons/ai'

const Searchbar = () => {

  const [ searchItem, setSearchItem ] = useState()

  const navigate = useNavigate()

  const handleSearchChange = (e) => { 
    setSearchItem(e.target.value)
  }

  const handleSearchSubmit = (e) => {
    e.preventDefault()
    navigate(`/search/${searchItem}`)
  }

  return (
    <form className='bg-slate-500 flex p-1 w-[250px] justify-around rounded-full' onSubmit={handleSearchSubmit}>
        <input onChange={handleSearchChange} type="text" className='text-white placeholder-white outline-none rounded-lg bg-slate-500 p-1 justify-center' placeholder='search for anime' />
        <AiOutlineSearch className='content-center flex mt-2 text-white cursor-pointer' onClick={handleSearchSubmit} />
    </form>
  )
}

export default Searchbar
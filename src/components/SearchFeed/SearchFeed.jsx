import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { fetchFromAPI } from '../../utils/fetchFromAPI'
import AnimeCard from '../AnimeCard/AnimeCard'
import Loader from '../Loader/Loader'

const SearchFeed = () => {

    const { id } = useParams()

    const [ isLoading, setIsLoading ] = useState(true)
    const [ anime, setAnime ] = useState([])

    useEffect(() => {
        fetchFromAPI(`search?keyw=${id}`)
        .then(data =>{
            setAnime(data)
            setIsLoading(false)
        })
    }, [id])

  return (
    <>
        {isLoading && ( <Loader /> )}
        {!isLoading && (
        <div className='flex flex-wrap flex-row gap-2'>
            <h1>Search Results for: {id}</h1>
                <div className='flex flex-wrap'>
                {anime.map(anime => (
                <AnimeCard key={anime.animeId} anime = {anime} width = {`150px`} />
                ))}
            </div>
        </div>
        )}
    </>
  )
}

export default SearchFeed
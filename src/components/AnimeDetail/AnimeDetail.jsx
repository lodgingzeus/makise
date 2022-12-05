import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { fetchFromAPI } from '../../utils/fetchFromAPI'
import EpisodeList from '../Episode/EpisodeList'
import GenreCard from '../Genre/GenreCard'
import Loader from '../Loader/Loader'

const AnimeDetail = () => {

    const [ animeDetail, setAnimeDetail ] = useState({})
    const [ isLoading, setIsLoading ] = useState(true)

    const { id } = useParams()

    useEffect(() => {
        fetchFromAPI(`anime-details/${id}`)
        .then(data => { 
            setAnimeDetail(data)
            setIsLoading(false)
          })
    }, [id])

  return (
    <>
      {isLoading && ( <Loader /> )}
      {!isLoading && (
        <div className=''>
          <div className='flex h-[60vh] w-screen'>
            <div className='ml-2 m-2 h-auto w-screen bg-cover' style={{backgroundImage: `url(${animeDetail.animeImg})`}}>
              {/* <img src={animeDetail.animeImg} alt=""  /> */}
            </div>

              <div className='m-2'>
                <h1 className='text-4xl'>
                  {id.replaceAll('-', ' ')}
                </h1>
                <div>
                  {animeDetail.otherNames}
                </div>
                <div className='flex'>
                  {animeDetail.genres.map(genre => (
                    <GenreCard key={genre} genre = {genre}/>
                  ))}
                </div>
                <p>
                Synopsis: {animeDetail.synopsis}
                </p>
                <div>
                  Episodes: {animeDetail.totalEpisodes}
                </div>
                <div>
                  Status: {animeDetail.status}
                </div>
                <div>
                  Type: {animeDetail.type}
                </div>
                <div>
                  Released: {animeDetail.releasedDate}
                </div>
              </div>
            </div>

          <div>
            <EpisodeList episodeList = {animeDetail.episodesList}/>
          </div>
      </div>
      )}
    </>
  )
}

export default AnimeDetail
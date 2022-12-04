import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { fetchFromAPI } from '../../utils/fetchFromAPI'
import EpisodeList from '../Episode/EpisodeList'

const AnimeDetail = () => {

    const [ animeDetail, setAnimeDetail ] = useState({})
    const { id } = useParams()

    useEffect(() => {
        fetchFromAPI(`anime-details/${id}`)
        .then(data => { 
            setAnimeDetail(data)
            console.log(data)}
            )

            console.log(animeDetail)
    }, [id])

  return (
    <div>
        <img src={animeDetail.animeImg} alt="" />
        {id}
        <div>Synopsis: {animeDetail.synopsis}</div>
        <EpisodeList episodeList = {animeDetail.episodesList}/>
    </div>
  )
}

export default AnimeDetail
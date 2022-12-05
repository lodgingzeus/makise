import TopAiring from '../TopAiring/TopAiring'
import { useEffect, useState } from 'react'
import { Popular, RecentReleased } from '../sections'
import Loader from '../Loader/Loader'
import { fetchFromAPI } from '../../utils/fetchFromAPI'

const Home = () => {

    const [ isLoading, setIsLoading ] = useState(true)
    const [ topAiring, setTopAiring ] = useState([])
    const [ popular, setPopular ] = useState([])
    const [ recentRelease, setRecentRelease ] = useState([])

    useEffect(() => {

      fetchFromAPI(`top-airing`)
          .then(data => setTopAiring(data))

      fetchFromAPI(`popular`)
        .then(data => setPopular(data))

        fetchFromAPI(`recent-release`)
        .then(data => {
          setRecentRelease(data)
          setIsLoading(false)
        })

    })

  return (
    <>
      {isLoading && (<Loader />)}
      {!isLoading && (
        <div>
          <TopAiring topAiring = {topAiring}/>
          <Popular popular = {popular}/>
          <RecentReleased recentRelease = {recentRelease}/>
        </div>
      )}
    </>
  )
}

export default Home
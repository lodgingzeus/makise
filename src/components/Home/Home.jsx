import TopAiring from '../TopAiring/TopAiring'


const Home = () => {

    // useEffect(() => {
    //     fetchFromAPI('search?keyw=naruto')
    //     .then(data => console.log(data))
    // })

  return (
    <div>
      <TopAiring />
    </div>
  )
}

export default Home
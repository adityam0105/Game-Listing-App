import { useEffect, useState } from "react"
import GenreList from "../Components/GenreList"
import GlobalApi from "../Services/GlobalApi";
import Banner from "../Components/Banner";
import TrendingGames from "../Components/TrendingGames";
import GamesbyGenresId from "../Components/GamesbyGenresId";

const Home = () => {
  const [allGameList,setAllGamesList]=useState();
  const [gameListByGenres,setGameListByGenres]=useState([]);
  useEffect(()=>{
    getAllGamesList();
    getGameListByGenresId();
  },[])

  const getAllGamesList =()=>{
    GlobalApi.getAllGames.then((res)=>{
      setAllGamesList(res.data.results);
      
    })
  }
  const getGameListByGenresId = (id)=>{
    GlobalApi.getGameListByGenreId(4).then((res)=>{
      setGameListByGenres(res.data.results);
    })
  }
  return (
    <div className="grid grid-cols-4 px-8">
      <div className="hidden md:block">
        <GenreList />
      </div>
      { allGameList?.length>0 && gameListByGenres.length>0?
      <div className="md:col-span-3 col-span-4 px-3">
        <Banner gameBanner={allGameList[0] } />
        <TrendingGames gameList={allGameList}/>
        <GamesbyGenresId gameListing={gameListByGenres}/>
      </div>:null}
    </div>
  )
}

export default Home
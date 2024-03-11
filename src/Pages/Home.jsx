import { useEffect, useState } from "react"
import GenreList from "../Components/GenreList"
import GlobalApi from "../Services/GlobalApi";
import Banner from "../Components/Banner";
import TrendingGames from "../Components/TrendingGames";
import GamesbyGenereId from "../Components/GamesbyGenereId";

const Home = () => {
  const [allGameList,setAllGamesList]=useState();
  const [gameListbyGenres,setGameListByGenres]=useState([])
  useEffect(()=>{
    getAllGamesList();
    getGamesListByGeneresId();
  },[]) 
  const getAllGamesList =()=>{
    GlobalApi.getAllGames.then((res)=>{
      setAllGamesList(res.data.results);
      setGameListByGenres(res.data.results);
    })
  }
  const getGamesListByGeneresId= (id)=>{
    GlobalApi.getGameListByGenreId(4).then((res)=>{
      console.log("Inside getGames by genre",res.data.results)
    })
  }
  return (
    <div className="grid grid-cols-4 px-8">
      <div className="hidden md:block">
        <GenreList />
      </div>
      { allGameList?.length>0?
      <div className="md:col-span-3 col-span-4 px-3">
        <Banner gameBanner={allGameList[0] } />
        <TrendingGames gameList={allGameList}/>
        <GamesbyGenereId gameList={getGamesListByGeneresId}/>
      </div>: null}
    </div>
  )
}

export default Home
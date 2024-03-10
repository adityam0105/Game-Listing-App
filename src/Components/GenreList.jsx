import { useEffect } from 'react'
import GlobalApi from '../Services/GlobalApi'

const GenreList = () => {
  useEffect(()=>{
    const fetchData = async ()=>{
        const res =await GlobalApi.getGenreList;
        console.log(res)
    }
    fetchData();
  },[])
  
}

export default GenreList
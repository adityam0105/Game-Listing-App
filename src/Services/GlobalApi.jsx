import axios from 'axios'
const axiosCreate=axios.create({
    baseURL : 'https://api.rawg.io/api'
})
const API_KEY='494b131630014e44a8da15b718c346b0';
if (!API_KEY) {
    throw new Error('API_KEY is not provided in the environment variables');
}
const getGenreList =axiosCreate.get('/genres?key='+API_KEY);
const getAllGames=axiosCreate.get('/games?key='+API_KEY);
const getGameListByGenreId= (id)=>axiosCreate.get('/games?key='+ API_KEY +'&genres='+id)
export default{
    getGenreList,
    getAllGames,
    getGameListByGenreId
}
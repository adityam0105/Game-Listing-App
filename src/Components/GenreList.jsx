import { useEffect, useState } from "react";
import GlobalApi from "../Services/GlobalApi";

const GenreList = () => {
  const [genreList, setGenreList] = useState([]);
  const [activeIndex,setActiveIndex]=useState(0);
  useEffect(() => {
    getGenreList();
  }, []);
  const getGenreList = () => {
    GlobalApi.getGenreList.then((res) => {
      console.log(res.data.results);
      setGenreList(res.data.results);
    });
  };
  return (
    <div >
      <h2 className="mt-6 mb-2 ml-1 text-[40px] font-bold dark:text-white">Genre</h2>
      {genreList.map((item,index) => (
        <div 
        onClick={()=>setActiveIndex(index)}
        className={`flex gap-2 items-center mb-2 cursor-pointer hover:bg-gray-300 dark:hover:bg-gray-600 p-2 rounded-lg group
        ${activeIndex==index?"bg-gray-300 dark:bg-gray-600" : null}`}>
          <img
            src={item.image_background}
            className={`h-[80px] w-[80px] object-cover rounded-lg group-hover:scale-105 transition-all ease-out duration-200
            ${activeIndex==index?"scale-105" : null}`}
          />
          <h3 className={`hover:dark:text-black dark:text-white hover:text-gray-700 text-[18px] group-hover:font-bold transition-all ease-out duration-200
             ${activeIndex==index?"font-bold" : null}
          `}>
            {item.name}
          </h3>
        </div>
      ))}
    </div>
  );
};

export default GenreList;

import { useEffect, useState } from "react";
import GlobalApi from "../Services/GlobalApi";

const GenreList = () => {
  const [genreList, setGenreList] = useState([]);
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
    <div>
      <h2 className="text-[30px] font-bold dark:text-white">Genre</h2>
      {genreList.map((item) => (
        <div className="flex gap-2 items-center mb-2 cursor-pointer hover:bg-gray-300 p-2 rounded-lg group">
          <img
            src={item.image_background}
            className="h-[60px] w-[60px] object-cover rounded-lg group-hover:scale-105 transition-all ease-out duration-200"
          />
          <h3 className="hover:dark:text-black dark:text-white hover:text-gray-700 text-[18px] group-hover:font-bold transition-all ease-out duration-200">
            {item.name}
          </h3>
        </div>
      ))}
    </div>
  );
};

export default GenreList;

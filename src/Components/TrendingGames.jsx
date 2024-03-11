import { useEffect } from "react";

const TrendingGames = ({ gameList }) => {
  useEffect(() => {
    console.log("gameList", gameList);
  }, []);
  return (
    <div className="hidden md:block pt-5">
        <div className="fold-bold text-[40px] dark:text-white pt-1">Trending Games</div>
      <div className=" mt-5 md:grid md:grid-cols-3 lg:grid-cols-4 gap-4 pl-1">
        {gameList.map(
          (item, index) =>
            index < 4 && (
              <div className="dark:bg-[#c1d3fe] bg-[#e2eafc] rounded-lg cursor-pointer group hover:scale-110 transition-all duration-150 ease">
                <img 
                src={item.background_image} 
                className=" h-[340px] object-cover"
                />
                <h2 className="pt-1 text-center text-[18px] font-bold">{item.name}</h2>
              </div>
            )
        )}
      </div>
    </div>
  );
};

export default TrendingGames;

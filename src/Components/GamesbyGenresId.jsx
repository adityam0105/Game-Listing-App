import { useEffect } from "react"

const GamesbyGenresId = ({gameListing}) => {
  return (
    <div>
      <h2 className="font-bold text-[30px] dark:text-white mt-5">Popular Games</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-5">
      {gameListing.map((item)=>
        (<div className="bg-gray-400 dark:bg-gray-600 p-3 rounded-lg pb-12 h-full">
          <img src={item.background_image} className="w-[100%] h-[70%] rounded-xl object-cover" />
          <h2 className="dark:text-white text-[26px] font-bold pt-2">{item.name}<span className="p-2 rounded-sm ml-2 text-[10px] bg-green-100 text-green-700 font-semibold">{item.metacritic}</span></h2>
          <h2 className="text-gray-100 text-[16px]"> ⭐️ {item.rating} 💬 {item.reviews_count}  🔥 {item.suggestions_count}</h2>
        </div>)
      )}
    </div>
    </div>
    
  )
}

export default GamesbyGenresId
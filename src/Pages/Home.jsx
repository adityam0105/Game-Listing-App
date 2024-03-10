import GenreList from "../Components/GenreList"

const Home = () => {
  return (

    <div className="grid grid-cols-4">
      <div className="h-full hidden md:block px-5">
        <GenreList />
      </div>
      <div className=" bg-blue-500 col pt-3 col-span-4 md:col-span-3 dark:text-white">Game List</div>
    </div>
    

  )
}

export default Home
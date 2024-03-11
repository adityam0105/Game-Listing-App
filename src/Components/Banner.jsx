import { useEffect } from "react";

const Banner = ({ gameBanner }) => {
  useEffect(() => {
    console.log("gameBanner", gameBanner);
  }, []);
  return (
    <div className="relative " >
      <div className="absolute space-y-2 bottom-0 p-5 bg-gradient-to-t from-slate-900 to-transparent w-full">
        <h2 className="text-[26px] text-white font-bold">
          {gameBanner.name}
        </h2>
        <button type="button" className="h-12 w-18 items-center text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-500 dark:focus:ring-teal-800 font-bold rounded-lg text-sm px-5 py-2 text-center me-2 mb-2">Get Now</button>
      </div>

      <img
        src={gameBanner.background_image}
        className="object-cover rounded-2xl max-h-dvh w-full pt-8"
      />
    </div>
  );
};

export default Banner;

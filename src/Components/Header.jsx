import { useContext, useState } from "react";
import logo from "./../assets/images/image.png";
import { HiOutlineMagnifyingGlass, HiMoon, HiSun } from "react-icons/hi2";
import { ThemeContext } from "../Context/ThemeContext";
const Header = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  return (
    <div className="flex items-center p-3">
      <img src={logo} height={60} width={60} />
      <div className="flex bg-slate-200 p-2 w-full items-center mx-5 rounded-full">
        <HiOutlineMagnifyingGlass />
        <input
          type="text"
          placeholder="Search Games"
          className="px-2 bg-transparent outline-none"
        />
      </div>
      <div>
        {theme == "light" ? (
          <HiMoon
            onClick={() => {
              setTheme("dark");
              localStorage.setItem("theme", "dark");
            }}
            className="text-[35px] bg-slate-200 text-black p-1 rounded-full cursor-pointer items-center"
          />
        ) : (
          <HiSun
            onClick={() => {
              setTheme("light");
              localStorage.setItem("theme", "light");
            }}
            className="text-[35px] bg-slate-200 text-black p-1 rounded-full cursor-pointer items-center"
          />
        )}
      </div>
    </div>
  );
};

export default Header;

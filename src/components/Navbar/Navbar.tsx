import Menu from "./Menu";
import { useState } from "react";
import SearchBar from "./SearchBar";
import { Link } from "react-router-dom";
import { PiListBold } from "react-icons/pi";
import { LuSearch, LuUser } from "react-icons/lu";

export default function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  const [showSearchBar, setShowSearchBar] = useState(false);

  const handleSearchMouseOver = (isShow: boolean) => {
    setShowSearchBar(isShow);
  };
  const handleMenuMouseOver = (isShow: boolean) => {
    setShowMenu(isShow);
  };
  return (
    <>
      <header className="hidden md:flex justify-between items-center px-5 py-3 sticky top-0 shadow-sm shadow-white backdrop-blur-sm text-white z-50">
        <Link to={"/"} className="flex items-center gap-2">
          <img src="./Logo.png" className="w-8 h-8 cursor-pointer" />
          <span>Anime</span>
        </Link>
        <nav className="relative bg-slate-800 p-1 rounded-lg shadow-sm shadow-white text-sm">
          <article className="flex items-center gap-1 *:px-4 *:py-2 *:rounded-lg *:cursor-pointer hover:*:bg-white/10 *:transition-all *:duration-200">
            <p onMouseOver={() => handleMenuMouseOver(true)}>Anime</p>
            <Link to={"/dcma"}>DMCA</Link>
            <Link to={"/premium"}>Premium</Link>
            <Link to={"/questions"}>Questions</Link>
          </article>
          <section
            className={`absolute right-1/2 w-screen translate-x-1/2 max-w-screen-xl transition-all duration-200 ${
              showMenu
                ? "translate-y-0 top-16 opacity-100"
                : "-translate-y-full -top-20 opacity-0"
            }`}
          >
            <Menu handleMenuMouseOver={handleMenuMouseOver} />
          </section>
        </nav>
        <article className="flex items-center gap-5 *:size-6 *:cursor-pointer relative">
          <LuSearch onMouseOver={() => handleSearchMouseOver(true)} />
          <LuUser />
          <section
            className={`absolute top-16 min-w-72 transition-all duration-200 z-10 ${
              showSearchBar
                ? "right-10 translate-x-0 opacity-100"
                : "-right-10 translate-x-full opacity-0"
            }`}
          >
            <SearchBar handleSearchMouseOver={handleSearchMouseOver} />
          </section>
        </article>
      </header>
      <header className="flex md:hidden justify-center items-center p-5 sticky top-0 text-white">
        <nav className="relative bg-slate-800 p-1 rounded-lg shadow-sm shadow-white text-sm w-full flex justify-between items-center gap-1 *:px-4 *:py-2 *:rounded-lg *:cursor-pointer hover:*:bg-white/10 *:transition-all *:duration-200">
          <article className="flex items-center gap-5 *:size-6 *:cursor-pointer relative">
            <LuSearch onMouseOver={() => handleSearchMouseOver(true)} />
            <section className="absolute top-16 min-w-72 px-4 py-8 bg-black rounded-lg">
              <SearchBar handleSearchMouseOver={handleSearchMouseOver} />
            </section>
          </article>
          <Link to={"/"} className="flex items-center gap-2">
            <img src="./Logo.png" className="w-8 h-8 cursor-pointer" />
          </Link>
          <p onMouseOver={() => handleMenuMouseOver(true)}>
            <PiListBold className="size-6" />
          </p>
        </nav>
        <section className="absolute top-16 w-screen right-1/2 translate-x-1/2">
          <Menu handleMenuMouseOver={handleMenuMouseOver} />
        </section>
      </header>
    </>
  );
}

import { CiSearch } from "react-icons/ci";
import { FaCaretDown } from "react-icons/fa";
import { TbBrandNetflix } from "react-icons/tb";
import NavDropList from "./NavDropList";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

interface DesktopNavType {
  scroll: any;
  searchWidth: any;
  handleSearchBarWidth: any;
}

export default function DesktopNav({
  scroll,
  searchWidth,
  handleSearchBarWidth,
}: DesktopNavType) {
  const [navId, setNavId] = useState(0);

  useEffect(() => {
    document.documentElement.classList.remove("overflow-hidden");
  }, []);
  return (
    <div
      className={`flex justify-between fixed z-50 left-0 right-0 top-0 px-10 transition-all duration-500 py-5 ${
        scroll > 20 && "mybg-desktop-nav backdrop-blur-sm"
      }`}
    >
      <div className="flex gap-x-2">
        {/* header Logo */}
        <Link to={"/"}>
          <TbBrandNetflix className="text-white text-4xl hover:text-stone-400 cursor-pointer transition-all duration-700" />
        </Link>
        {/* header search bar */}
        <label className="flex">
          <input
            type="text"
            style={{
              width: `${searchWidth}%`,
              visibility: `${searchWidth == "0" ? "hidden" : "visible"}`,
              opacity: `${searchWidth == "0" ? 0.2 : 1}`,
              padding: `${searchWidth == "0" ? "0" : "0 1rem"}`,
            }}
            className={`rounded-l-full bg-transparent border-2 border-white/50 transition-all duration-700 text-white`}
          />
          <CiSearch
            className={`text-4xl text-black stroke-1 transition-all duration-700 p-1 bg-white/50 ${
              searchWidth == "0" ? "rounded-full" : "rounded-r-full"
            }`}
            onClick={handleSearchBarWidth}
          />
        </label>
      </div>

      {/* header Links */}
      <ul className="text-white flex group gap-x-5 items-center font-semibold hover:*:text-stone-400 *:cursor-pointer *:transition-all *:duration-300">
        <Link to={"/category"}>
          <li
            className="flex gap-x-1 items-center"
            onMouseOver={() => setNavId(0)}
          >
            Collection
            <FaCaretDown />
          </li>
        </Link>
        <Link to={"/category"}>
          <li
            className="flex gap-x-1 items-center"
            onMouseOver={() => setNavId(1)}
          >
            Anime
            <FaCaretDown />
          </li>
        </Link>
        <Link to={"/category"}>
          <li
            className="flex gap-x-1 items-center"
            onMouseOver={() => setNavId(2)}
          >
            Serie
            <FaCaretDown />
          </li>
        </Link>
        <Link to={"/category"}>
          <li
            className="flex gap-x-1 items-center"
            onMouseOver={() => setNavId(3)}
          >
            Movie
            <FaCaretDown />
          </li>
        </Link>
        {/* header Sub navbar */}
        <section className="absolute mt-20 invisible group-hover:visible pe-12 top-0 right-0 left-0 w-screen">
          <NavDropList id={navId} />
        </section>
      </ul>
    </div>
  );
}

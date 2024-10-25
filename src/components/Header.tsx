import { useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";
import { IoMenuSharp } from "react-icons/io5";
import { TbBrandNetflix } from "react-icons/tb";
import { useDispatch, useSelector } from "react-redux";
import { setWidth, setScroll } from "../redux/stateSlice";
import { CgProfile } from "react-icons/cg";
import { FaCaretDown } from "react-icons/fa";
import NavDropList from "./NavDropList";

export default function Header() {
  const [searchWidth, setSearchWidth] = useState("0");
  const [subNav, setSubNav] = useState(false);
  //connect to redux store
  const { width, scroll } = useSelector<any, any>(
    (state) => state.stateManager
  );
  const dispatch = useDispatch();

  //handle md:search bar width
  const handleSearchBarWidth = () => {
    setSearchWidth(searchWidth == "0" ? "100" : "0");
  };

  //show sub nav after click on nav btns
  const shoeSubNav = () => {
    setSubNav(true);
  };

  //hide sub nav after click on screen
  const hideSubNav = () => {
    setSubNav(false);
  };

  //handle scroll and resizing changes
  useEffect(() => {
    const handleWinSize = () => {
      dispatch(setWidth(window.innerWidth));
    };
    const handleWinScroll = () => {
      dispatch(setScroll(window.scrollY));
    };
    window.addEventListener("resize", handleWinSize);
    window.addEventListener("scroll", handleWinScroll);
    return () => {
      window.removeEventListener("resize", handleWinSize);
      window.removeEventListener("scroll", handleWinScroll);
    };
  }, []);

  if (width > 768) {
    return (
      <div
        onMouseLeave={hideSubNav}
        className={`flex justify-between fixed z-50 left-0 right-0 top-0 px-10 py-5 ${
          scroll > 20 && "bg-black/60 backdrop-blur-sm"
        }`}
      >
        <div className="flex gap-x-2">
          <TbBrandNetflix className="text-white text-4xl hover:text-stone-400 cursor-pointer transition-all duration-700" />
          <label className="flex">
            <input
              type="text"
              style={{
                width: `${searchWidth}%`,
                visibility: `${searchWidth == "0" ? "hidden" : "visible"}`,
                opacity: `${searchWidth == "0" ? 0.2 : 1}`,
              }}
              className={`rounded-l-full bg-transparent border-2 border-white/50 transition-all duration-700`}
            />
            <CiSearch
              className={`text-4xl text-black stroke-1 transition-all duration-700 p-1 bg-white/50 ${
                searchWidth == "0" ? "rounded-full" : "rounded-r-full"
              }`}
              onClick={handleSearchBarWidth}
            />
          </label>
        </div>
        <ul className="relative text-white flex gap-x-5 items-center font-semibold hover:*:text-stone-400 *:cursor-pointer *:transition-all *:duration-300">
          <li className="flex gap-x-1 items-center" onMouseOver={shoeSubNav}>
            Collection
            <FaCaretDown />
          </li>
          <li className="flex gap-x-1 items-center" onMouseOver={shoeSubNav}>
            Anime
            <FaCaretDown />
          </li>
          <li className="flex gap-x-1 items-center" onMouseOver={shoeSubNav}>
            Serie
            <FaCaretDown />
          </li>
          <li className="flex gap-x-1 items-center" onMouseOver={shoeSubNav}>
            Movie
            <FaCaretDown />
          </li>
        </ul>
        <section
          className={`absolute mt-20 pe-12 top-0 right-0 left-0 w-screen ${
            !subNav && "hidden"
          }`}
        >
          <NavDropList />
        </section>
      </div>
    );
  } else {
    return (
      <div className="w-2/3 mx-auto mb-3 fixed z-50 left-0 right-0 bottom-0 hover:*:text-stone-400 *:cursor-pointer *:transition-all *:duration-300">
        <ul className="flex justify-between w-full rounded-full bg-white px-5 py-2">
          <CgProfile className="text-black text-4xl" />
          <CiSearch className="text-black text-4xl" />
          <TbBrandNetflix className="text-black text-4xl" />
          <IoMenuSharp className="text-black text-4xl" />
        </ul>
      </div>
    );
  }
}

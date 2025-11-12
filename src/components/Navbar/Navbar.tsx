import Menu from "./Menu";
import { useState } from "react";
import NavMobile from "./NavMobile";
import SearchBar from "./SearchBar";
import NavDesktop from "./NavDesktop";

export default function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  const [showSearchBar, setShowSearchBar] = useState(false);

  const handleSearchMouseOver = (isShow: boolean | "toggle") => {
    if (isShow === "toggle") {
      setShowMenu(false);
      setShowSearchBar((prev) => !prev);
      return;
    }
    setShowMenu(false);
    setShowSearchBar(isShow);
  };
  const handleMenuMouseOver = (isShow: boolean | "toggle") => {
    if (isShow === "toggle") {
      setShowSearchBar(false);
      setShowMenu((prev) => !prev);
      return;
    }
    setShowSearchBar(false);
    setShowMenu(isShow);
  };
  return (
    <>
      <NavDesktop
        handleSearchMouseOver={handleSearchMouseOver}
        showSearchBar={showSearchBar}
        handleMenuMouseOver={handleMenuMouseOver}
      />
      <NavMobile
        handleSearchMouseOver={handleSearchMouseOver}
        showSearchBar={showSearchBar}
        handleMenuMouseOver={handleMenuMouseOver}
        showMenu={showMenu}
      />
      {/* Search Bar */}
      <section
        className={`text-white fixed top-24 md:min-w-72 inset-x-5 md:inset-x-auto transition-all duration-200 z-50 ${
          showSearchBar
            ? "translate-x-0 opacity-100 md:right-16"
            : "translate-x-full opacity-0 md:-right-10"
        }`}
      >
        <SearchBar handleSearchMouseOver={handleSearchMouseOver} />
      </section>
      {/* Menu List */}
      <section
        className={`text-white fixed md:top-0 bottom-0 md:bottom-5 md:right-1/2 w-screen md:translate-x-1/2 md:max-w-screen-xl rounded-t-xl md:rounded-xl transition-all duration-200 z-50 overflow-hidden ${
          showMenu
            ? "translate-y-0 md:top-24 opacity-100"
            : "translate-y-full md:top-full opacity-0"
        }`}
      >
        <Menu handleMenuMouseOver={handleMenuMouseOver} />
      </section>
    </>
  );
}

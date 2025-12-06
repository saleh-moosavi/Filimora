import Menu from "./Menu";
import { useState } from "react";
import SearchBar from "./SearchBar";
import NavBarContent from "./NavBarContent";

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
      {/* NavBarContent */}
      <NavBarContent
        handleMenuMouseOver={handleMenuMouseOver}
        handleSearchMouseOver={handleSearchMouseOver}
      />
      {/* Search Bar Section */}
      <SearchBar
        showSearchBar={showSearchBar}
        handleSearchMouseOver={handleSearchMouseOver}
      />
      {/* Menu List Drop */}
      <section
        className={`text-my-white-max fixed md:top-0 bottom-0 md:bottom-5 md:right-1/2 w-screen md:translate-x-1/2 md:max-w-screen-xl rounded-t-xl md:rounded-xl transition-all duration-200 z-50 overflow-hidden ${
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

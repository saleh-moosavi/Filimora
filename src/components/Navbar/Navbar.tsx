import Menu from "./Menu";
import { useState } from "react";
import SearchBar from "./SearchBar";
import NavBarContent from "./NavBarContent";

export default function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  const [showSearchBar, setShowSearchBar] = useState(false);
  const [showCategories, setShowCategories] = useState(false);

  const handleShowCategory = () => {
    setShowCategories((prev) => !prev);
  };

  const handleOverlayToggle = (
    type: "search" | "menu",
    isShow: boolean | "toggle"
  ) => {
    const isToggle = isShow === "toggle";

    // Close the other overlay
    if (type === "search") {
      setShowMenu(false);
      setShowSearchBar(isToggle ? (prev) => !prev : isShow);
    } else {
      setShowSearchBar(false);
      setShowMenu(isToggle ? (prev) => !prev : isShow);
    }
  };

  return (
    <>
      {/* NavBarContent */}
      <NavBarContent
        showMenu={showMenu}
        handleOverlayToggle={handleOverlayToggle}
      />
      {/* Search Bar Section */}
      <SearchBar
        showSearchBar={showSearchBar}
        handleOverlayToggle={handleOverlayToggle}
      />
      {/* Menu List Drop */}

      <Menu
        showMenu={showMenu}
        showCategories={showCategories}
        handleShowCategory={handleShowCategory}
        handleOverlayToggle={handleOverlayToggle}
      />
    </>
  );
}

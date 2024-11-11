import { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { IoMenuSharp } from "react-icons/io5";
import { TbBrandNetflix } from "react-icons/tb";
import { Link } from "react-router-dom";
import MobileMenu from "./MobileMenu";
import MobileSearchModal from "./MobileSearchModal";

export default function MobileNav() {
  const [mobileMenu, setMobileMenu] = useState<boolean>(false);
  const [mobileSearch, setMobileSearch] = useState<boolean>(false);

  const toggleMenu = () => {
    setMobileMenu(!mobileMenu);
    document.documentElement.classList.toggle("overflow-hidden");
  };

  const toggleSearch = () => {
    setMobileSearch(!mobileSearch);
    document.documentElement.classList.toggle("overflow-hidden");
  };

  return (
    <div className="w-2/3 mx-auto mb-3 fixed z-50 left-0 right-0 bottom-0">
      <ul className="flex justify-between w-full rounded-full mybg-mobile-nav px-5 py-2 border-b-white/50 border-r-white/50 border-b-2 border-r-2">
        <Link to={"/"}>
          <TbBrandNetflix className="color-white text-2xl sm:text-4xl" />
        </Link>
        <CiSearch
          className="color-white text-2xl sm:text-4xl cursor-pointer"
          onClick={toggleSearch}
        />
        <IoMenuSharp
          className="color-white text-2xl sm:text-4xl cursor-pointer"
          onClick={toggleMenu}
        />
      </ul>
      {mobileMenu && (
        <div className="fixed top-0 bottom-0 left-0 right-0 bg-black/40 backdrop-blur-sm">
          <MobileMenu toggleMenu={toggleMenu} />
        </div>
      )}
      {mobileSearch && (
        <div className="fixed top-0 bottom-0 left-0 right-0 bg-black/40 backdrop-blur-sm">
          <MobileSearchModal toggleSearch={toggleSearch} />
        </div>
      )}
    </div>
  );
}

import { NavLinks } from "../../constants";
import { PiListBold } from "react-icons/pi";
import { IoIosArrowDown } from "react-icons/io";
import { LuSearch, LuUser } from "react-icons/lu";
import { Link, useLocation } from "react-router-dom";
import { INavBarContent } from "../../types/PropTypes";

export default function NavBarContent({
  showMenu,
  handleOverlayToggle,
}: INavBarContent) {
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path && "bg-my-green-low/20 text-my-green-low";
  };
  return (
    <>
      <header className="sticky top-0 z-50 text-my-white-max overflow-hidden md:shadow-sm md:shadow-my-white-max md:backdrop-blur-sm">
        <section className="p-5 md:px-5 md:py-3">
          <nav className="flex justify-between items-center gap-1 bg-my-black-med md:bg-inherit p-3 md:p-0 rounded-lg shadow-sm md:shadow-none shadow-my-white-min text-sm w-full *:rounded-lg *:cursor-pointer">
            {/* Search in Mobile */}
            <article className="flex items-center gap-5 *:size-6 *:cursor-pointer md:hidden">
              <LuSearch
                onClick={() => handleOverlayToggle("search", "toggle")}
              />
            </article>
            {/* Logo Image */}
            <Link to={"/"} className="flex items-center gap-2">
              <img src="./Logo.png" className="w-8 h-8 cursor-pointer" />
            </Link>
            {/* Menu In Mobile */}
            <p
              onClick={() => handleOverlayToggle("menu", "toggle")}
              className="md:hidden"
            >
              <PiListBold className="size-6" />
            </p>
            {/* Navigation Link In Desktop */}
            <nav className="bg-my-black-med p-1 rounded-lg shadow-sm shadow-my-white-min text-sm hidden md:block">
              <article className="flex items-center gap-1 *:px-4 *:py-2 *:rounded-lg *:cursor-pointer hover:*:bg-my-white-max/20 *:transition-all *:duration-200">
                <p
                  onClick={() => handleOverlayToggle("menu", "toggle")}
                  className="flex items-end gap-1"
                >
                  Category{" "}
                  <IoIosArrowDown
                    className={`size-4 transition-all duration-200 ${
                      showMenu ? "rotate-180" : "rotate-0"
                    }`}
                  />
                </p>
                {NavLinks.map((link) => (
                  <Link
                    key={link.id}
                    to={link.href}
                    className={`${isActive(`/${link.href}`)}`}
                  >
                    {link.title}
                  </Link>
                ))}
              </article>
            </nav>
            {/* Search And Profile In Desktop */}
            <article className="hidden md:flex items-center gap-5 *:size-6 *:cursor-pointer">
              <LuSearch
                onClick={() => handleOverlayToggle("search", "toggle")}
              />
              <Link to="/profile">
                <LuUser className="size-6" />
              </Link>
            </article>
          </nav>
        </section>
      </header>
    </>
  );
}

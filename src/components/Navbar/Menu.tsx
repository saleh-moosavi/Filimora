import MenuGenres from "./MenuGenres";
import { Link } from "react-router-dom";
import { NavLinks } from "../../constants";
import { IMenu } from "../../types/PropTypes";
import { IoIosArrowDown } from "react-icons/io";

export default function Menu({
  showMenu,
  showCategories,
  handleShowCategory,
  handleOverlayToggle,
}: IMenu) {
  const handleCloseMenu = () => {
    handleOverlayToggle("menu", false);
  };

  return (
    <section
      className={`text-my-white-max fixed md:top-0 bottom-0 md:bottom-5 md:right-1/2 w-screen md:translate-x-1/2 md:max-w-screen-xl rounded-t-xl md:rounded-xl transition-all duration-200 z-50 overflow-hidden ${
        showMenu
          ? "translate-y-0 md:top-24 opacity-100"
          : "translate-y-full md:top-full opacity-0"
      }`}
    >
      <article
        onMouseLeave={handleCloseMenu}
        className="bg-my-black-med md:mx-5 p-5 pt-0 md:pt-5 md:rounded-xl overflow-y-scroll overscroll-contain md:overflow-y-auto md:overscroll-auto h-[80vh] md:max-h-[70vh]"
      >
        <MenuGenres classes="hidden md:grid grid-cols-4 *:col-span-1 gap-2 font-bold bg-my-black-med p-2 rounded-lg" />
        {/* Mobile Menu List */}
        <div
          className="sticky top-0 w-full pb-10 bg-my-black-med md:hidden"
          onClick={handleCloseMenu}
        >
          <span className="block w-1/2 bg-my-white-max rounded-b-md h-2 mx-auto"></span>
        </div>
        <ul className="grid md:hidden gap-2 font-bold *:w-full *:bg-my-black-min *:p-2 *:rounded-lg">
          {NavLinks.map((link) => (
            <Link
              onClick={handleCloseMenu}
              to={link.href}
              key={link.href + link.id}
            >
              {link.title}
            </Link>
          ))}
          <Link onClick={handleCloseMenu} to="/profile">
            Profile
          </Link>
          <li className="space-y-5">
            <p
              className="flex items-end justify-between"
              onClick={handleShowCategory}
            >
              <span>Categories</span>
              <span>
                <IoIosArrowDown
                  className={`size-4 transition-all duration-200 ${
                    showCategories ? "rotate-180" : "rotate-0"
                  }`}
                />
              </span>
            </p>
            {showCategories && (
              <MenuGenres classes="grid grid-cols-2 md:grid-cols-4 col-span-1 gap-2 font-bold bg-my-black-med p-2 rounded-lg" />
            )}
          </li>
        </ul>
      </article>
    </section>
  );
}

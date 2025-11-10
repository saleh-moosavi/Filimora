import { useState } from "react";
import { Link } from "react-router-dom";
import { IoCloseSharp } from "react-icons/io5";
import { IGenre } from "../../types/apiResponse";

export default function MobileMenu({
  toggleMenu,
  headerData,
}: {
  toggleMenu: () => void;
  headerData: IGenre[];
}) {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleSubMenu = () => {
    setIsOpen((prev) => !prev);
  };
  return (
    <div className="color-white flex justify-center items-center w-10/12 mx-auto h-full cursor-auto">
      <ul className="bg-mobile-menu backdrop-blur-md rounded-xl flex flex-col w-96 h-3/4 cursor-auto overflow-y-auto pb-5 *:cursor-pointer border-b-white/50 border-r-white/50 border-b-[3px] border-r-[3px]">
        <li
          className="hover:text-red-500 p-5 self-end text-3xl"
          onClick={toggleMenu}
        >
          <IoCloseSharp />
        </li>

        <li
          className="color-white font-semibold text-lg bg-two-hover p-5 hover:shadow-[inset_3px_0_0_#fff] hover:ps-8 transition-all duration-500"
          onClick={() => toggleSubMenu()}
        >
          Categories
        </li>
        <ul
          className={`ps-5 grid grid-cols-2 hover:cursor-auto bg-mobile-menu py-2 ${
            isOpen ? "h-full" : "h-0 hidden"
          }`}
        >
          {headerData.map((item) => {
            return (
              <Link to="/category">
                <li
                  className="w-fit cursor-pointer hover:text-teal-300"
                  key={item.mal_id}
                >
                  {item.name}
                </li>
              </Link>
            );
          })}
        </ul>
      </ul>
    </div>
  );
}

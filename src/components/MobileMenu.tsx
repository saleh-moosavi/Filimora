import { useState } from "react";
import { IoCloseSharp } from "react-icons/io5";
import MobileSubMenu from "./MobileSubMenu";
import { Link } from "react-router-dom";

export default function MobileMenu(props: any) {
  const [isOpen, setIsOpen] = useState(Array(4).fill(false));

  const toggleSubMenu = (id: any) => {
    const allMenu = [...isOpen];
    const current = allMenu[id];
    allMenu.fill(false);
    allMenu[id] = current ? false : true;
    setIsOpen(allMenu);
  };
  return (
    <div className="color-white flex justify-center items-center w-10/12 mx-auto h-full cursor-auto">
      <ul className="bg-mobile-menu backdrop-blur-md rounded-xl flex flex-col w-96 h-3/4 cursor-auto overflow-y-auto pb-5 *:cursor-pointer border-b-white/50 border-r-white/50 border-b-[3px] border-r-[3px]">
        <li
          className="hover:text-red-500 p-5 self-end text-3xl"
          onClick={props.toggleMenu}
        >
          <IoCloseSharp />
        </li>
        <Link to={"/category"}>
          <li
            className="color-white font-semibold text-lg bg-two-hover p-5 hover:shadow-[inset_3px_0_0_#fff] hover:ps-8 transition-all duration-500"
            onClick={() => toggleSubMenu(0)}
          >
            Movie
          </li>
        </Link>
        <MobileSubMenu id={0} isOpen={isOpen[0]} />
        <Link to={"/category"}>
          <li
            className="color-white font-semibold text-lg bg-two-hover p-5 hover:shadow-[inset_3px_0_0_#fff] hover:ps-8 transition-all duration-500"
            onClick={() => toggleSubMenu(1)}
          >
            Serie
          </li>
        </Link>
        <MobileSubMenu id={1} isOpen={isOpen[1]} />
        <Link to={"/category"}>
          <li
            className="color-white font-semibold text-lg bg-two-hover p-5 hover:shadow-[inset_3px_0_0_#fff] hover:ps-8 transition-all duration-500"
            onClick={() => toggleSubMenu(2)}
          >
            Anime
          </li>
        </Link>
        <MobileSubMenu id={2} isOpen={isOpen[2]} />
        <Link to={"/category"}>
          <li
            className="color-white font-semibold text-lg bg-two-hover p-5 hover:shadow-[inset_3px_0_0_#fff] hover:ps-8 transition-all duration-500"
            onClick={() => toggleSubMenu(3)}
          >
            Collection
          </li>
        </Link>
        <MobileSubMenu id={3} isOpen={isOpen[3]} />
        <li className="self-center bg-two px-10 py-2 mt-auto rounded-full">
          Sign In
        </li>
      </ul>
    </div>
  );
}

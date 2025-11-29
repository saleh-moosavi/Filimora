import { Link } from "react-router-dom";
import { LuSearch } from "react-icons/lu";
import { PiListBold } from "react-icons/pi";

export default function NavMobile({
  handleSearchMouseOver,
  handleMenuMouseOver,
}: any) {
  return (
    <>
      <header className="flex md:hidden justify-center items-center p-5 sticky top-0 z-50 text-my-white-max overflow-hidden">
        <nav className="bg-my-black-med p-1 rounded-lg shadow-sm shadow-my-white-min text-sm w-full flex justify-between items-center gap-1 *:px-4 *:py-2 *:rounded-lg *:cursor-pointer hover:*:bg-my-white-max/10 *:transition-all *:duration-200">
          <article className="flex items-center gap-5 *:size-6 *:cursor-pointer">
            <LuSearch onClick={() => handleSearchMouseOver("toggle")} />
          </article>
          <Link to={"/"} className="flex items-center gap-2">
            <img src="./Logo.png" className="w-8 h-8 cursor-pointer" />
          </Link>
          <p onClick={() => handleMenuMouseOver("toggle")}>
            <PiListBold className="size-6" />
          </p>
        </nav>
      </header>
    </>
  );
}

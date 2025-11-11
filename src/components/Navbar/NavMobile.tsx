import { Link } from "react-router-dom";
import { LuSearch } from "react-icons/lu";
import { PiListBold } from "react-icons/pi";

export default function NavMobile({
  handleSearchMouseOver,
  handleMenuMouseOver,
}: any) {
  return (
    <>
      <header className="flex md:hidden justify-center items-center p-5 sticky top-0 z-50 text-white overflow-hidden">
        <nav className="bg-slate-800 p-1 rounded-lg shadow-sm shadow-white text-sm w-full flex justify-between items-center gap-1 *:px-4 *:py-2 *:rounded-lg *:cursor-pointer hover:*:bg-white/10 *:transition-all *:duration-200">
          <article className="flex items-center gap-5 *:size-6 *:cursor-pointer">
            <LuSearch onMouseOver={() => handleSearchMouseOver(true)} />
          </article>
          <Link to={"/"} className="flex items-center gap-2">
            <img src="./Logo.png" className="w-8 h-8 cursor-pointer" />
          </Link>
          <p onMouseOver={() => handleMenuMouseOver(true)}>
            <PiListBold className="size-6" />
          </p>
        </nav>
      </header>
    </>
  );
}

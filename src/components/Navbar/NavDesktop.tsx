import { Link } from "react-router-dom";
import { LuSearch, LuUser } from "react-icons/lu";

export default function NavDesktop({
  handleSearchMouseOver,
  handleMenuMouseOver,
}: any) {
  return (
    <>
      <header className="hidden md:flex justify-between items-center px-5 py-3 sticky top-0 shadow-sm shadow-my-white-max backdrop-blur-sm text-my-white-max z-50 overflow-hidden">
        <Link to={"/"} className="flex items-center gap-2">
          <img src="./Logo.png" className="w-8 h-8 cursor-pointer" />
          <span>Anime</span>
        </Link>
        <nav className="bg-my-black-med p-1 rounded-lg shadow-sm shadow-my-white-min text-sm">
          <article className="flex items-center gap-1 *:px-4 *:py-2 *:rounded-lg *:cursor-pointer hover:*:bg-my-white-max/20 *:transition-all *:duration-200">
            <p onClick={() => handleMenuMouseOver("toggle")}>Category</p>
            <Link to={"/dcma"}>DMCA</Link>
            <Link to={"/premium"}>Premium</Link>
            <Link to={"/faq"}>FAQ</Link>
          </article>
        </nav>
        <article className="flex items-center gap-5 *:size-6 *:cursor-pointer">
          <LuSearch onClick={() => handleSearchMouseOver("toggle")} />
          <LuUser />
        </article>
      </header>
    </>
  );
}

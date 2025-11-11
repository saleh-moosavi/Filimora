import { Link } from "react-router-dom";
import { LuSearch, LuUser } from "react-icons/lu";

export default function NavDesktop({
  handleSearchMouseOver,
  handleMenuMouseOver,
}: any) {
  return (
    <>
      <header className="hidden md:flex justify-between items-center px-5 py-3 sticky top-0 shadow-sm shadow-white backdrop-blur-sm text-white z-50 overflow-hidden">
        <Link to={"/"} className="flex items-center gap-2">
          <img src="./Logo.png" className="w-8 h-8 cursor-pointer" />
          <span>Anime</span>
        </Link>
        <nav className="bg-slate-800 p-1 rounded-lg shadow-sm shadow-white text-sm">
          <article className="flex items-center gap-1 *:px-4 *:py-2 *:rounded-lg *:cursor-pointer hover:*:bg-white/10 *:transition-all *:duration-200">
            <p onMouseOver={() => handleMenuMouseOver(true)}>Anime</p>
            <Link to={"/dcma"}>DMCA</Link>
            <Link to={"/premium"}>Premium</Link>
            <Link to={"/questions"}>Questions</Link>
          </article>
        </nav>
        <article className="flex items-center gap-5 *:size-6 *:cursor-pointer">
          <LuSearch onMouseOver={() => handleSearchMouseOver(true)} />
          <LuUser />
        </article>
      </header>
    </>
  );
}

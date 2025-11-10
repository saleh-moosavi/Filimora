import { Link } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import { FaCaretDown } from "react-icons/fa";
import { IGenre } from "../../types/apiResponse";

export default function DesktopNav({
  headerData,
  scroll,
}: {
  headerData: IGenre[];
  scroll: number;
}) {
  return (
    <section className="relative w-screen">
      <div
        className={`flex justify-between fixed z-50 left-0 right-0 top-0 px-10 transition-all duration-500 py-5 ${
          scroll > 20 && "mybg-desktop-nav backdrop-blur-sm"
        }`}
      >
        <div className="flex gap-x-2 items-center">
          {/* header Logo */}
          <Link to={"/"}>
            <img src="./Logo.png" className="w-8 h-8 cursor-pointer" />
          </Link>
          {/* header search bar */}
          <label className="flex">
            <input
              type="text"
              className={`rounded-l-full bg-transparent border-2 border-white/50 transition-all duration-700 text-white`}
            />
            <CiSearch
              className={`text-4xl text-black stroke-1 transition-all duration-700 p-1 bg-white/50 rounded-r-full`}
            />
          </label>
        </div>

        {/* header Links */}
        <ul className="text-white flex group gap-x-5 items-center font-semibold *:transition-all *:duration-300">
          <li className="flex gap-x-1 items-center hover:text-stone-400 cursor-pointer">
            Category
            <FaCaretDown />
          </li>
          {/* header Sub navbar */}
          <section className="absolute inset-x-0 max-h-[30rem] top-0 m-20 rounded-xl p-10 invisible group-hover:visible bg-black overflow-hidden overflow-y-scroll overscroll-y-contain">
            <ul className="grid grid-cols-5 col-span-1 gap-2 font-bold">
              {headerData.map((item) => {
                return (
                  <Link to={`/category/${item.mal_id}`} key={item.mal_id}>
                    <li key={item.mal_id} className="hover:text-stone-400">
                      {item.name}
                    </li>
                  </Link>
                );
              })}
            </ul>
          </section>
        </ul>
      </div>
    </section>
  );
}

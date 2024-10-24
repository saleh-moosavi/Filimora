import { useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";
import { IoMenuSharp } from "react-icons/io5";
import { TbBrandNetflix } from "react-icons/tb";

export default function Header() {
  const [winSize, setWinSize] = useState(window.innerWidth);
  const [winScroll, setWinScroll] = useState(window.scrollY);

  useEffect(() => {
    const handleWinSize = () => {
      setWinSize(window.innerWidth);
    };
    const handleWinScroll = () => {
      setWinScroll(window.scrollY);
    };
    window.addEventListener("resize", handleWinSize);
    window.addEventListener("scroll", handleWinScroll);
    return () => {
      window.removeEventListener("resize", handleWinSize);
      window.removeEventListener("scroll", handleWinScroll);
    };
  }, []);

  if (winSize > 769) {
    return (
      <div
        className={`flex justify-between fixed z-50 left-0 right-0 top-0 px-10 py-5 hover:*:text-stone-400 *:cursor-pointer *:transition-all *:duration-300 transition-all duration-300 ${
          winScroll > 20 && "bg-black/60 backdrop-blur-sm"
        }`}
      >
        <div className="flex gap-x-2">
          <TbBrandNetflix className="text-white text-4xl" />
        </div>
        <IoMenuSharp className="text-white text-4xl" />
      </div>
    );
  } else {
    return (
      <div className="flex bg-white justify-between fixed z-50 left-0 right-0 bottom-0 px-10 py-5 hover:*:text-stone-400 *:cursor-pointer *:transition-all *:duration-300 rounded-t-2xl">
        <CiSearch className="text-black text-4xl" />
        <TbBrandNetflix className="text-black text-4xl" />
        <IoMenuSharp className="text-black text-4xl" />
      </div>
    );
  }
}

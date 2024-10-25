import { useEffect } from "react";
import { CiSearch } from "react-icons/ci";
import { IoMenuSharp } from "react-icons/io5";
import { TbBrandNetflix } from "react-icons/tb";
import { useDispatch, useSelector } from "react-redux";
import { setWidth, setScroll } from "../redux/stateSlice";

export default function Header() {
  const { width, scroll } = useSelector<any, any>(
    (state) => state.stateManager
  );
  const dispatch = useDispatch();

  useEffect(() => {
    const handleWinSize = () => {
      dispatch(setWidth(window.innerWidth));
    };
    const handleWinScroll = () => {
      dispatch(setScroll(window.scrollY));
    };
    window.addEventListener("resize", handleWinSize);
    window.addEventListener("scroll", handleWinScroll);
    return () => {
      window.removeEventListener("resize", handleWinSize);
      window.removeEventListener("scroll", handleWinScroll);
    };
  }, []);

  if (width > 768) {
    return (
      <div
        className={`flex justify-between fixed z-50 left-0 right-0 top-0 px-10 py-5 hover:*:text-stone-400 *:cursor-pointer *:transition-all *:duration-300 transition-all duration-700 ${
          scroll > 20 && "bg-black/60 backdrop-blur-sm"
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
      <div className="flex bg-stone-100 justify-between fixed z-50 left-0 right-0 bottom-0 px-10 py-2 hover:*:text-stone-400 *:cursor-pointer *:transition-all *:duration-300 rounded-t-2xl">
        <CiSearch className="text-black text-4xl" />
        <TbBrandNetflix className="text-black text-4xl" />
        <IoMenuSharp className="text-black text-4xl" />
      </div>
    );
  }
}

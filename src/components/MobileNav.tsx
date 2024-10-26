import { CgProfile } from "react-icons/cg";
import { CiSearch } from "react-icons/ci";
import { IoMenuSharp } from "react-icons/io5";
import { TbBrandNetflix } from "react-icons/tb";

export default function MobileNav() {
  return (
    <div className="w-2/3 mx-auto mb-3 fixed z-50 left-0 right-0 bottom-0 hover:*:text-stone-400 *:cursor-pointer *:transition-all *:duration-300">
      <ul className="flex justify-between w-full rounded-full bg-white px-5 py-2">
        <CgProfile className="text-black text-2xl sm:text-4xl" />
        <CiSearch className="text-black text-2xl sm:text-4xl" />
        <TbBrandNetflix className="text-black text-2xl sm:text-4xl" />
        <IoMenuSharp className="text-black text-2xl sm:text-4xl" />
      </ul>
    </div>
  );
}

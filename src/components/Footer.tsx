import { FaTelegramPlane } from "react-icons/fa";
import { AiOutlineYoutube } from "react-icons/ai";
import { FaInstagram, FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <div className="pb-2 pt-10 md:px-20 footer-gradient mt-auto space-y-5">
      <div className="flex justify-center items-center gap-x-5 *:size-7 *:cursor-pointer color-white *:transition-all *:duration-300">
        <FaTelegramPlane className="hover:text-sky-400" />
        <FaInstagram className="hover:text-red-600" />
        <FaXTwitter className="hover:text-stone-400" />
        <AiOutlineYoutube className="hover:text-rose-600 !size-8" />
      </div>
      <h2 className="text-center text-sm font-semibold color-white">
        Copyright © 2024 Filimora Inc. All rights reserved
      </h2>
    </div>
  );
}

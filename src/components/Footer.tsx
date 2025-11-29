import { FaTelegramPlane } from "react-icons/fa";
import { AiOutlineYoutube } from "react-icons/ai";
import { FaInstagram, FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <div className="pb-2 pt-10 md:px-20 bg-gradient-to-t from-my-green-max mt-auto space-y-5">
      <div className="flex justify-center items-center gap-x-5 *:size-7 *:cursor-pointer text-my-white-max *:transition-all *:duration-300">
        <FaTelegramPlane className="hover:text-my-info" />
        <FaInstagram className="hover:text-my-error" />
        <FaXTwitter className="hover:text-my-white-min" />
        <AiOutlineYoutube className="hover:text-my-error !size-8" />
      </div>
      <h2 className="text-center text-sm font-semibold text-my-white-max">
        Copyright © 2024 Filimora Inc. All rights reserved
      </h2>
    </div>
  );
}

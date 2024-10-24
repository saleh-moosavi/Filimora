import { AiOutlineYoutube } from "react-icons/ai";
import { FaTelegramPlane } from "react-icons/fa";
import { FaInstagram, FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <div className="pb-20 md:pb-0 pt-5 md:px-20 text-white bg-gradient-to-t from-gray-950 from-30%">
      <article className="grid justify-items-center items-center gap-y-5 md:grid-cols-2 p-5">
        <div className="flex gap-x-5 *:text-2xl lg:*:text-3xl *:cursor-pointer md:justify-self-start">
          <FaTelegramPlane className="hover:text-sky-400" />
          <FaInstagram className="hover:text-red-600" />
          <FaXTwitter className="hover:text-stone-400" />
          <AiOutlineYoutube className="hover:text-rose-600 scale-125" />
        </div>
        <div className="flex gap-x-5 *:cursor-pointer md:*:text-lg lg:*:text-xl *:font-semibold md:justify-self-end">
          <h2>DMCA</h2>
          <h2>Premium</h2>
          <h2>Questions</h2>
        </div>
      </article>
      <section className="py-3">
        <h2 className="text-center font-semibold text-stone-300">Copyright © 2024 Netflix Inc. All rights reserved.</h2>
      </section>
    </div>
  );
}

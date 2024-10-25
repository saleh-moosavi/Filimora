import { GrChannel } from "react-icons/gr";
import { IoPerson } from "react-icons/io5";
import { LiaImdb } from "react-icons/lia";
import { MdAccessTime, MdOutlineSubtitles } from "react-icons/md";

export default function MovieItem() {
  return (
    <div className="w-screen flex flex-col items-center md:grid grid-cols-3 md:pt-20">
        <article className="mt-5">
            <img className="rounded-3xl w-[19rem] lg:max-w-96 md:w-10/12 object-cover mx-auto" src="https://aiofilm3.ir/wp-content/uploads/2024/07/image_2024-07-08_103145804.jpg" alt="" />
        </article>
        <article className="col-span-2 md:flex md:flex-col md:justify-start text-white md:h-full md:ps-10">
            <h3 className="md:text-xl font-bold text-white mt-5 mb-2 text-center md:text-left">Tsue to Tsurugi no Wistoria</h3>
            <p className="text-white text-xs font-semibold md:text-base md:font-normal text-center md:text-left">Wistoria: Wand and Sword</p>
            <section className="flex justify-center gap-x-5 py-5 md:justify-start">
                <p className="flex flex-col items-center gap-y-2 font-semibold text-sm md:text-base"><GrChannel className="text-lg md:text-3xl"/>Actas</p>
                <p className="flex flex-col items-center gap-y-2 font-semibold text-sm md:text-base"><MdOutlineSubtitles className="text-lg md:text-3xl"/>Yes</p>
                <p className="flex flex-col items-center gap-y-2 font-semibold text-sm md:text-base"><IoPerson className="text-lg md:text-3xl"/> +13</p>
                <p className="flex flex-col items-center gap-y-2 font-semibold text-sm md:text-base"><LiaImdb className="text-lg md:text-3xl"/> 10/7.92</p>
                <p className="flex flex-col items-center gap-y-2 font-semibold text-sm md:text-base"><MdAccessTime className="text-lg md:text-3xl"/> 23 Min</p>
            </section>
            <section className="flex justify-center gap-x-5 md:justify-start">
                <p>Cuntry: Japan</p>
                <p>Quality: Web-DL</p>
                <p>Type: Series</p>
            </section>
            <p className="mt-5 text-white text-center md:text-left">Genres: Action Fantasy Adventure</p>
            <p className="text-white text-center my-5 md:text-left">Season 1 - Episode 12 - added</p>
            <p className="line-clamp-3 text-white md:my-5 hidden lg:block">About: Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim, alias. Ut, fugiat sed iure veniam deleniti neque sapiente? Ab, culpa?</p>
        </article>
        <p className="line-clamp-2 text-white px-10 text-center md:col-span-3 md:text-left md:my-5 lg:hidden">About: Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim, alias. Ut, fugiat sed iure veniam deleniti neque sapiente? Ab, culpa?</p>
    </div>
  )
}
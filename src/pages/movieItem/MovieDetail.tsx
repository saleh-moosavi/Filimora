import { GrChannel } from "react-icons/gr";
import { IoPerson } from "react-icons/io5";
import { LiaImdb } from "react-icons/lia";
import { MdAccessTime, MdOutlineSubtitles } from "react-icons/md";
import data from "../../dataJson/movies.json";
import { useParams } from "react-router-dom";

export default function MovieDetail() {
  const params = useParams();
  const currentMovie = data[Number(params.id)];
  return (
    <div className="bg-three">
      <div className="w-screen flex flex-col items-center md:grid grid-cols-3 md:pt-20 pb-10 xl:max-w-[85rem] xl:mx-auto px-6">
        <article className="mt-5">
          <img
            className="rounded-3xl w-[19rem] mx-auto lg:max-w-96 md:w-10/12 object-cover md:mx-5"
            src={currentMovie.img}
          />
        </article>
        <article className="col-span-2 md:flex md:flex-col md:justify-start color-white md:h-full md:ps-10">
          <h3 className="md:text-xl lg:text-4xl font-bold color-white mt-5 mb-2 text-center md:text-left">
            {currentMovie.title}
          </h3>
          <p className="color-white text-xs lg:text-xl font-semibold md:text-base md:font-normal text-center md:text-left">
            {currentMovie.translatedTitle}
          </p>
          <section className="flex justify-center gap-x-5 py-5 md:justify-start lg:mt-5">
            <p className="flex flex-col items-center gap-y-2 font-semibold text-sm md:text-base">
              <GrChannel className="text-lg md:text-3xl" />
              {currentMovie.channel}
            </p>
            <p className="flex flex-col items-center gap-y-2 font-semibold text-sm md:text-base">
              <MdOutlineSubtitles className="text-lg md:text-3xl" />
              {currentMovie.subtitle}
            </p>
            <p className="flex flex-col items-center gap-y-2 font-semibold text-sm md:text-base">
              <IoPerson className="text-lg md:text-3xl" /> {currentMovie.age}
            </p>
            <p className="flex flex-col items-center gap-y-2 font-semibold text-sm md:text-base">
              <LiaImdb className="text-lg md:text-3xl" /> 10/
              {currentMovie.imdbRate}
            </p>
            <p className="flex flex-col items-center gap-y-2 font-semibold text-sm md:text-base">
              <MdAccessTime className="text-lg md:text-3xl" /> {currentMovie.time}
            </p>
          </section>
          <section className="flex justify-center gap-x-5 md:justify-start xl:text-lg xl:mt-5">
            <p>Cuntry: {currentMovie.country}</p>
            <p>Status: {currentMovie.status}</p>
            <p>Year: {currentMovie.year}</p>
          </section>
          <p className="flex gap-x-1 mt-5 color-white text-center md:text-left xl:text-lg">
            Genres:
            <ul className="flex gap-x-2">
              {currentMovie.genres?.map((item: any, index: any) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </p>
          <p className="color-black font-medium text-center my-5 md:text-left xl:text-lg detail-gradient md:w-fit px-4 py-1 rounded-full">
            Season {currentMovie.season} - Episode {currentMovie.episode} - added
          </p>
          <p className="line-clamp-3 color-white md:my-5 hidden lg:block xl:text-lg">
            {currentMovie.desc}
          </p>
        </article>
        <p className="line-clamp-2 color-white px-5 text-center md:col-span-3 md:text-left md:my-5 lg:hidden">
          {currentMovie.desc}
        </p>
      </div>
    </div>
  );
}

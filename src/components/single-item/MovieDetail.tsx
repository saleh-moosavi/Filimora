import { LiaImdb } from "react-icons/lia";
import { Anime } from "../../types/apiResponse";

export default function MovieDetail({ data }: { data: Anime }) {
  return (
    <div className="bg-three">
      <div className="grid items-center content-center grid-cols-2 *:col-span-1 max-w-7xl mx-auto min-h-screen pt-20">
        <article className="mt-5">
          <img
            className="rounded-3xl w-[19rem] mx-auto lg:max-w-96 md:w-10/12 object-cover md:mx-5"
            src={data.images?.webp?.large_image_url}
            alt={data.title_english || data.title}
          />
        </article>
        <article className="flex flex-col h-full text-white text-sm font-semibold">
          <section className="space-y-5">
            <h3 className="md:text-xl font-bold color-white mt-5 mb-2 text-center md:text-left">
              {data.title_english || data.title}
            </h3>
            {data.title_japanese && (
              <p className="color-white lg:text-xl font-semibold md:text-base md:font-normal text-center md:text-left">
                {data.title_japanese}
              </p>
            )}
          </section>
          <section className="flex justify-start items-center gap-x-10 py-5">
            {data.score && (
              <p className="flex items-center gap-2">
                <LiaImdb className="size-10 text-yellow-500" />
                <span>{data.score} / 10</span>
              </p>
            )}
            <p className="flex gap-x-1 color-white text-center shrink-0">
              {data.genres?.map((genre, index) => (
                <span key={genre.mal_id}>
                  {index !== 0 && ", "}
                  {genre.name}
                </span>
              ))}
            </p>
            {data.duration && <p>Time : {data.duration}</p>}
          </section>
          <section className="space-y-5 h-full">
            {data.year && <p>Year: {data.year}</p>}
            {data.type && <p>Type : {data.type}</p>}
            {data.studios?.[0]?.name && (
              <p>Studio : {data.studios?.[0]?.name}</p>
            )}
            {data.status && <p>Status: {data.status}</p>}

            {data.season && <p>Season: {data.season}</p>}
            {data.episodes && <p>Total Episodes: {data.episodes}</p>}
          </section>
          <p className="text-start line-clamp-5">{data.synopsis}</p>
        </article>
      </div>
    </div>
  );
}

import ImageCard from "../ImageCard";
import { LiaImdb } from "react-icons/lia";
import { Anime } from "../../types/apiResponse";

export default function MovieDetail({ data }: { data: Anime }) {
  console.log(data);
  return (
    <div className="grid items-center content-start md:grid-cols-2 min-h-[80vh]">
      {/* Image Section */}
      <article className="self-start col-span-1 h-full">
        <section className="rounded-xl w-[19rem] md:w-10/12 md:max-w-80 mx-auto md:mx-0 h-full overflow-hidden">
          <ImageCard>
            <img
              className="object-cover rounded-xl w-full h-full"
              src={data.images?.webp?.large_image_url}
              alt={data.title_english || data.title}
            />
          </ImageCard>
        </section>
      </article>
      {/* Details Section */}
      <article className="flex flex-col h-full text-my-white-max text-sm font-semibold self-start col-span-1">
        {/* Anime Title */}
        <section className="space-y-2 mb-2">
          <h3 className="text-xl font-bold text-my-white-max mb-2 text-center md:text-left">
            {data.title_english || data.title}
          </h3>
          {data.title_japanese && (
            <p className="text-my-white-max text-xl font-semibold md:text-base md:font-normal text-center md:text-left">
              {data.title_japanese}
            </p>
          )}
        </section>
        {/* Details */}
        <section className="grid grid-cols-2 md:grid-cols-1 *:col-span-1 items-start *:w-fit gap-5 mt-5">
          {data.score && (
            <p className="flex items-center gap-2">
              <LiaImdb className="size-10 text-my-warning" />
              <span>{data.score} / 10</span>
            </p>
          )}
          <p className="inline-block text-my-white-max">
            {data.genres?.map((genre, index) => (
              <span key={`anime-item-genre-${genre.mal_id}`}>
                {index !== 0 && " , "}
                {genre.name}
              </span>
            ))}
          </p>
          {data.rating && <p>Age Rating : {data.rating}</p>}
          {data.duration && <p>Time : {data.duration}</p>}
          {data.year && <p>Year: {data.year}</p>}
          {data.type && <p>Type : {data.type}</p>}
          {data.status && <p>Status: {data.status}</p>}

          {data.season && <p>Season: {data.season}</p>}
          {data.episodes && <p>Total Episodes: {data.episodes}</p>}
          {data.broadcast && data.status !== "Finished Airing" && (
            <p>Release Days : {data.broadcast.day}</p>
          )}
          {!data.score && (
            <p>
              Start Airing at : {data.aired.prop.from.month}
              {" / "}
              {data.aired.prop.from.year}
            </p>
          )}
        </section>
        {/* Description */}
        <p className="text-center line-clamp-5 md:invisible md:hidden mt-5">
          {data.synopsis}
        </p>
      </article>
      <p className="text-sm font-semibold text-justify text-my-white-max md:col-span-2 mt-5 hidden md:block">
        {data.synopsis}
      </p>
    </div>
  );
}

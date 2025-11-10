import { LiaImdb } from "react-icons/lia";
import { GrChannel } from "react-icons/gr";
import { IoPerson } from "react-icons/io5";
import { Anime } from "../../types/apiResponse";
import { MdAccessTime, MdOutlineSubtitles } from "react-icons/md";

export default function MovieDetail({ data }: { data: Anime }) {
  // ✅ FIX: Map component props to actual Anime interface properties
  const imageUrl = data.images?.webp?.large_image_url ?? "/placeholder.jpg";
  const englishTitle = data.title_english || data.title;
  const japaneseTitle = data.title_japanese; // Replaces 'translatedTitle'
  const type = data.type; // Replaces 'subtitle'
  const ageRating = data.rating; // Replaces 'age'
  const score = data.score; // Replaces 'imdbRate'
  const runtime = data.duration; // Replaces 'time'
  const synopsis = data.synopsis; // Replaces 'desc'
  const studioName = data.studios?.[0]?.name; // Replaces 'channel' (using the first studio name)
  const releaseYear = data.year;
  const animeStatus = data.status;
  const numEpisodes = data.episodes;
  const currentSeason = data.season;

  // Map genres objects to an array of names for display
  const genreNames = data.genres?.map((genre) => genre.name) || [];

  return (
    <div className="bg-three">
      <div className="w-screen flex flex-col items-center md:grid grid-cols-3 md:pt-20 pb-10 xl:max-w-[85rem] xl:mx-auto px-6">
        <article className="mt-5">
          <img
            className="rounded-3xl w-[19rem] mx-auto lg:max-w-96 md:w-10/12 object-cover md:mx-5"
            src={imageUrl} // Updated property
            alt={englishTitle}
          />
        </article>
        <article className="col-span-2 md:flex md:flex-col md:justify-start color-white md:h-full md:ps-10">
          <h3 className="md:text-xl lg:text-4xl font-bold color-white mt-5 mb-2 text-center md:text-left">
            {englishTitle}
          </h3>
          {/* Using title_japanese instead of translatedTitle */}
          {japaneseTitle && (
            <p className="color-white text-xs lg:text-xl font-semibold md:text-base md:font-normal text-center md:text-left">
              {japaneseTitle}
            </p>
          )}
          <section className="flex justify-center gap-x-5 py-5 md:justify-start lg:mt-5">
            {/* Using first studio name instead of channel */}
            {studioName && (
              <p className="flex flex-col items-center gap-y-2 font-semibold text-sm md:text-base">
                <GrChannel className="text-lg md:text-3xl" />
                {studioName}
              </p>
            )}
            {/* Using type instead of subtitle */}
            {type && (
              <p className="flex flex-col items-center gap-y-2 font-semibold text-sm md:text-base">
                <MdOutlineSubtitles className="text-lg md:text-3xl" />
                {type}
              </p>
            )}
            {/* Using rating instead of age */}
            {ageRating && (
              <p className="flex flex-col items-center gap-y-2 font-semibold text-sm md:text-base">
                <IoPerson className="text-lg md:text-3xl" /> {ageRating}
              </p>
            )}
            {/* Using score instead of imdbRate */}
            {score && (
              <p className="flex flex-col items-center gap-y-2 font-semibold text-sm md:text-base">
                <LiaImdb className="text-lg md:text-3xl" /> {score}/10
              </p>
            )}
            {/* Using duration instead of time */}
            {runtime && (
              <p className="flex flex-col items-center gap-y-2 font-semibold text-sm md:text-base">
                <MdAccessTime className="text-lg md:text-3xl" /> {runtime}
              </p>
            )}
          </section>
          <section className="flex justify-center gap-x-5 md:justify-start xl:text-lg xl:mt-5">
            {/* Removed 'country' as it's not a root property of the Anime type */}
            {animeStatus && <p>Status: {animeStatus}</p>}
            {releaseYear && <p>Year: {releaseYear}</p>}
          </section>
          <p className="flex gap-x-1 mt-5 color-white text-center md:text-left xl:text-lg">
            Genres:
            <ul className="flex gap-x-2">
              {/* Using mapped genreNames array */}
              {genreNames.map((item: string, index: number) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </p>
          {/* Simplified season/episode logic to use Anime properties */}
          {currentSeason && numEpisodes && (
            <p className="color-black font-medium text-center mt-5 md:text-left xl:text-lg detail-gradient md:w-fit px-4 py-1 rounded-full">
              Season: {currentSeason} - Total Episodes: {numEpisodes}
            </p>
          )}
          {/* Using synopsis instead of desc */}
          <p className="line-clamp-3 color-white md:my-5 hidden lg:block xl:text-lg">
            {synopsis}
          </p>
        </article>
        {/* Using synopsis instead of desc */}
        <p className="line-clamp-2 color-white px-5 text-center md:col-span-3 md:text-left my-5 lg:hidden">
          {synopsis}
        </p>
      </div>
    </div>
  );
}

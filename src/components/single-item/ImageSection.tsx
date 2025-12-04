import ImageCard from "../ImageCard";
import { Anime } from "../../types/apiResponse";
import { BsFillBookmarkPlusFill, BsBookmarkCheckFill } from "react-icons/bs";

export default function ImageSection({
  data,
  isLiked,
  onToggle,
  addToList,
  removeFromList,
}: {
  data: Anime;
  isLiked: boolean;
  onToggle?: () => void;
  addToList: (anime: Anime) => Promise<void>;
  removeFromList: (id: number) => Promise<void>;
}) {
  const handleToggleAdd = async () => {
    try {
      if (isLiked) {
        await removeFromList(data.mal_id);
      } else {
        await addToList(data);
      }
      onToggle?.();
    } catch (error) {
      console.error("Error toggling bookmark:", error);
    }
  };

  return (
    <article className="self-start col-span-1 h-full relative">
      <section className="rounded-xl w-[19rem] md:w-10/12 md:max-w-80 mx-auto md:mx-0 h-full overflow-hidden">
        <ImageCard>
          <img
            className="object-cover rounded-xl w-full h-full bg-my-black-min"
            src={data.images?.webp?.large_image_url}
            alt={data.title_english || data.title}
          />
          <div
            className={`absolute top-1 right-1 w-12 aspect-square flex justify-center items-center rounded-tr-xl rounded-bl-xl z-20 p-1 cursor-pointer bg-my-black-max/70 hover:bg-my-black-max/50 transition-all ${
              isLiked ? "text-my-warning" : "text-my-white-med"
            }`}
            onClick={handleToggleAdd}
            title={isLiked ? "Remove from favorites" : "Add to favorites"}
          >
            {isLiked ? (
              <BsBookmarkCheckFill className="size-6" />
            ) : (
              <BsFillBookmarkPlusFill className="size-6" />
            )}
          </div>
        </ImageCard>
      </section>
    </article>
  );
}

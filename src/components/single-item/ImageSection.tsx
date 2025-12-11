import ImageCard from "../ImageCard";
import { useDispatch } from "react-redux";
import { setToast } from "../../redux/ToastSlice";
import { IimageSection } from "../../types/PropTypes";
import useLocalStorage from "../../hooks/useLocalStorage";
import { BsFillBookmarkPlusFill, BsBookmarkCheckFill } from "react-icons/bs";

export default function ImageSection({
  data,
  isLiked,
  onToggle,
}: IimageSection) {
  const { addLikedAnime, removeLikedAnime } = useLocalStorage();
  const dispatch = useDispatch();

  const handleToggleAdd = async () => {
    try {
      if (isLiked) {
        await removeLikedAnime(data.mal_id);
        dispatch(
          setToast({
            isVisible: true,
            mode: "WARNING",
            text: "Anime Removerd From Your List",
          })
        );
      } else {
        await addLikedAnime(data);
        dispatch(
          setToast({
            isVisible: true,
            mode: "SUCCESS",
            text: "Anime Added To Your List",
          })
        );
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
            className="object-cover rounded-xl w-full h-full bg-gradient-to-tr from-my-black-min to-my-black-max text-my-white-max text-center"
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

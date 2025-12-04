import MainDetails from "./MainDetails";
import ImageSection from "./ImageSection";
import { Anime } from "../../types/apiResponse";
import { useLayoutEffect, useState } from "react";
import useLocalStorage from "../../hooks/useLocalStorage";

export default function MovieDetail({ data }: { data: Anime }) {
  const { getData, addLikedAnime, removeLikedAnime } = useLocalStorage();
  const [isSaved, setIsSaved] = useState(false);

  const getLocalStorageData = async () => {
    const savedData = await getData();
    const likedAnime =
      savedData?.likedList?.filter?.((anime) => anime.mal_id === data.mal_id) ||
      [];
    setIsSaved(likedAnime.length > 0);
  };

  useLayoutEffect(() => {
    getLocalStorageData();
  }, [data.mal_id]);

  return (
    <div className="grid items-center content-start md:grid-cols-2 min-h-[80vh]">
      {/* Image Section */}
      <ImageSection
        data={data}
        isLiked={isSaved}
        addToList={addLikedAnime}
        removeFromList={removeLikedAnime}
        onToggle={() => setIsSaved(!isSaved)}
      />
      {/* Details Section */}
      <MainDetails data={data} />
    </div>
  );
}

import { useEffect } from "react";
import Slider from "../components/Slider";
import { useParams } from "react-router-dom";
import Reviews from "../components/single-item/Reviews";
import MovieDetail from "../components/single-item/MovieDetail";
import MovieDownloadLink from "../components/single-item/MovieDownloadLink";

export default function MovieItem() {
  const movieId = useParams();

  useEffect(() => {
    window.scrollY > 1 && window.scrollTo(0, 0);
  }, [movieId.id]);

  return (
    <div>
      <MovieDetail />
      <MovieDownloadLink />
      <Reviews />
      <div className="px-7 md:px-12 xl:max-w-[85rem] xl:mx-auto">
        {/* <Slider title="Related" data={data} /> */}
      </div>
    </div>
  );
}

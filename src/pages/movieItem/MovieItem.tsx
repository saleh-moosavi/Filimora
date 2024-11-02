import MovieDetail from "./MovieDetail";
import MovieDownloadLink from "./MovieDownloadLink";
import Reviews from "./Reviews";
import Slider from "../../components/Slider";
import data from "../../dataJson/movies.json";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

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
        <Slider sliderTitle="Related" data={data} />
      </div>
    </div>
  );
}

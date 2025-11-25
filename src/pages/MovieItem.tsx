import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Observer from "../components/Observer";
import Slider from "../components/slider/Slider";
import { Anime, IReview } from "../types/apiResponse";
import Reviews from "../components/single-item/Reviews";
import MovieDetail from "../components/single-item/MovieDetail";
import SliderSkeleton from "../components/slider/SliderSkeleton";
import { getAnimeReviews, getSingleAnime } from "../libs/getAllData";
import ReviewsSkeleton from "../components/single-item/ReviewsSkeleton";
import MovieDetailSkeleton from "../components/single-item/MovieDetailSkeleton";

export default function MovieItem() {
  const { id } = useParams();
  const [genres, setGenres] = useState<string>("");
  const [data, setData] = useState<Anime | null>(null);
  const [reviews, setReviews] = useState<IReview[]>([]);

  useEffect(() => {
    window.scrollY > 1 && window.scrollTo(0, 0);
    if (id === undefined) return;

    getSingleAnime(id).then((result) => {
      if (result?.data) {
        setData(result.data);
      }
      const resGenres = result?.data.genres.map((g) => g.mal_id).join(",");
      setGenres(resGenres || "");
    });

    getAnimeReviews(id).then((result) => {
      if (result?.data) {
        setReviews(result.data);
      }
    });
  }, [id]);

  return (
    <div className="space-y-10">
      <>
        {data ? <MovieDetail data={data} /> : <MovieDetailSkeleton />}
        {reviews.length > 0 ? <Reviews data={reviews} /> : <ReviewsSkeleton />}
      </>
      <Observer skeleton={<SliderSkeleton />}>
        <Slider title="Related" path={`anime?genres=${genres}`} />
      </Observer>
    </div>
  );
}

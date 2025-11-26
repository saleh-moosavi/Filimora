import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Observer from "../components/Observer";
import Slider from "../components/slider/Slider";
import { useQuery } from "@tanstack/react-query";
import { Anime, IReview } from "../types/apiResponse";
import Reviews from "../components/single-item/Reviews";
import MovieDetail from "../components/single-item/MovieDetail";
import SliderSkeleton from "../components/slider/SliderSkeleton";
import { getAnimeReviews, getSingleAnime } from "../libs/getAllData";
import ReviewsSkeleton from "../components/single-item/ReviewsSkeleton";
import MovieDetailSkeleton from "../components/single-item/MovieDetailSkeleton";

export default function MovieItem() {
  const { id } = useParams();
  if (id === undefined) return;
  const [genres, setGenres] = useState<string>("");

  const { data, isLoading } = useQuery({
    queryKey: [`anime-item-${id}`],
    queryFn: async (): Promise<Anime> => {
      const result = await getSingleAnime(id);
      const resGenres = result?.genres.map((g) => g.mal_id).join(",");
      setGenres(resGenres || "");
      return result;
    },
  });
  const { data: reviewData, isLoading: reviewIsLoading } = useQuery({
    queryKey: [`review-anime-item-${id}`],
    queryFn: async (): Promise<IReview[]> => {
      const result = await getAnimeReviews(id);
      return result;
    },
  });

  useEffect(() => {
    window.scrollY > 1 && window.scrollTo(0, 0);
    if (id === undefined) return;
  }, [id]);

  return (
    <div className="space-y-10">
      <>
        {isLoading ? (
          <MovieDetailSkeleton />
        ) : data ? (
          <MovieDetail data={data} />
        ) : (
          <div>Error loading movie details</div>
        )}

        {reviewIsLoading ? (
          <ReviewsSkeleton />
        ) : reviewData ? (
          <Reviews data={reviewData} />
        ) : (
          <div>Error loading reviews</div>
        )}
      </>
      <Observer skeleton={<SliderSkeleton />}>
        <Slider title="Related" path={`anime?genres=${genres}`} />
      </Observer>
    </div>
  );
}

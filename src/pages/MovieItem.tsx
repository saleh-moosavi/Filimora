import { useParams } from "react-router-dom";
import Observer from "../components/Observer";
import useGetAnime from "../hooks/useGetAnime";
import Slider from "../components/slider/Slider";
import Reviews from "../components/single-item/Reviews";
import Trailer from "../components/single-item/Trailer";
import MovieDetail from "../components/single-item/MovieDetail";
import SliderSkeleton from "../components/slider/SliderSkeleton";
import ExtraDetails from "../components/single-item/ExtraDetails";
import ReviewsSkeleton from "../components/single-item/ReviewsSkeleton";
import MovieDetailSkeleton from "../components/single-item/MovieDetailSkeleton";

export default function MovieItem() {
  const { id } = useParams();
  if (id === undefined) return;
  const { data, isLoading, reviewData, reviewIsLoading, genres } = useGetAnime({
    id,
  });

  return (
    <div className="space-y-10">
      <>
        {isLoading ? (
          <MovieDetailSkeleton />
        ) : data ? (
          <>
            <MovieDetail data={data} />
            <ExtraDetails data={data} />
            <Trailer src={data.trailer.embed_url} />
          </>
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

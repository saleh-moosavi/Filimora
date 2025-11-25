import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Anime } from "../types/apiResponse";
import Slider from "../components/slider/Slider";
import { getSingleAnime } from "../libs/getAllData";
import Reviews from "../components/single-item/Reviews";
import MovieDetail from "../components/single-item/MovieDetail";
import MovieDownloadLink from "../components/single-item/MovieDownloadLink";
import MovieDetailSkeleton from "../components/single-item/MovieDetailSkeleton";
import Observer from "../components/Observer";
import SliderSkeleton from "../components/slider/SliderSkeleton";

export default function MovieItem() {
  const { id } = useParams();
  const [data, setData] = useState<Anime | null>(null);
  const [genres, setGenres] = useState<string>("");

  useEffect(() => {
    window.scrollY > 1 && window.scrollTo(0, 0);
    getSingleAnime(id).then((result) => {
      if (result?.data) {
        setData(result.data);
      }
      const resGenres = result?.data.genres.map((g) => g.mal_id).join(",");
      setGenres(resGenres || "");
    });
  }, [id]);

  return (
    <div className="space-y-10">
      <>
        {data ? <MovieDetail data={data} /> : <MovieDetailSkeleton />}
        <MovieDownloadLink />
        <Reviews />
      </>
      <Observer skeleton={<SliderSkeleton />}>
        <Slider title="Related" path={`anime?genres=${genres}`} />
      </Observer>
    </div>
  );
}

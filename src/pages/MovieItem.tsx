import { useEffect, useState } from "react";
// import Slider from "../components/slider/Slider";
import { useParams } from "react-router-dom";
import Reviews from "../components/single-item/Reviews";
import MovieDetail from "../components/single-item/MovieDetail";
import MovieDownloadLink from "../components/single-item/MovieDownloadLink";
import { getSingleAnime } from "../libs/getAllData";
import { Anime } from "../types/apiResponse";

export default function MovieItem() {
  const { id } = useParams();
  const [data, setData] = useState<Anime | null>(null);

  useEffect(() => {
    window.scrollY > 1 && window.scrollTo(0, 0);
    getSingleAnime(id).then((result) => {
      if (result?.data) {
        setData(result.data);
      }
    });
  }, []);

  return (
    <div>
      {data && (
        <>
          <MovieDetail data={data} />
          <MovieDownloadLink />
          <Reviews />
        </>
      )}
      <div className="px-7 md:px-12 xl:max-w-[85rem] xl:mx-auto">
        {/* <Slider title="Related" data={data} /> */}
      </div>
    </div>
  );
}

import MovieDetail from "./MovieDetail";
import MovieDownloadLink from "./MovieDownloadLink";
import Reviews from "./Reviews";
import Slider from '../../components/Slider'
import data from "../../dataJson/movies.json";

export default function MovieItem() {
  return (
    <div>
        <MovieDetail/>
        <MovieDownloadLink/>
        <Reviews/>
        <div className="px-12">
          <Slider sliderTitle="Related" data={data}/>
        </div>
    </div>
  )
}
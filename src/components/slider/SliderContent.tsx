import ImageCard from "../ImageCard";
import { Link } from "react-router-dom";
import { ISliderContent } from "../../types/PropTypes";

export default function SliderContent({
  id,
  img,
  rate,
  desc,
  title,
}: ISliderContent) {
  return (
    <Link to={`/${id}`}>
      <div className="relative rounded-lg overflow-hidden group">
        <ImageCard>
          <img
            className="rounded-lg h-[24rem] w-full object-cover"
            src={img}
            alt={title}
          />
        </ImageCard>
        <p className="absolute top-0 left-0 text-my-white-max m-2 p-2 text-xs font-semibold bg-my-black-max border-[3px] border-my-warning rounded-xl group-hover:scale-0 transition-all duration-300">
          {rate == "N/A" ? "N/A" : rate + " / 10"}
        </p>
        <div className="absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-t from-my-black-max flex justify-center items-end py-3 px-2 opacity-0 translate-y-full group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
          <p className="text-my-white-min font-medium text-sm text-justify line-clamp-4">
            {desc}
          </p>
        </div>
      </div>
      <h3 className="text-my-white-max font-semibold text-center py-5">
        {title}
      </h3>
    </Link>
  );
}

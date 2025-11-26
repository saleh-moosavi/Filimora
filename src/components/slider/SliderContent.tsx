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
        <img
          className="rounded-lg h-[24rem] w-full object-cover"
          src={img}
          alt={title}
        />
        <p className="absolute top-0 left-0 color-white m-2 p-2 text-xs font-semibold bg-one border-[3px] myborder-seven rounded-full group-hover:scale-0 transition-all duration-300">
          {rate}
        </p>
        <div className="absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-t from-black flex justify-center items-end py-3 px-2 opacity-0 group-hover:opacity-100 transition-all duration-300">
          <p className="color-white font-medium text-sm text-justify line-clamp-4">
            {desc}
          </p>
        </div>
      </div>
      <h3 className="color-white font-semibold text-center py-5">{title}</h3>
    </Link>
  );
}

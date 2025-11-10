import { Link } from "react-router-dom";

export interface SlideItemProps {
  id: number;
  img: string;
  title: string;
  rate: number | string;
  desc: string;
}

export default function SlideItem(props: SlideItemProps) {
  return (
    <Link to={`/${props.id}`}>
      <div className="relative rounded-lg overflow-hidden group">
        <img
          className="rounded-lg h-[20rem] md:h-80 lg:h-96 xl:h-[30rem] w-full object-cover"
          src={props.img}
          alt={props.title}
        />
        <p className="absolute top-0 left-0 color-white m-2 p-2 text-xs font-semibold bg-one border-[3px] myborder-seven rounded-full group-hover:scale-0 transition-all duration-300">
          {props.rate}
        </p>
        <div className="absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-t from-black flex justify-center items-end py-3 px-2 opacity-0 group-hover:opacity-100 transition-all duration-300">
          <p className="color-white font-medium text-sm text-justify line-clamp-4">
            {props.desc}
          </p>
        </div>
      </div>
      <h3 className="color-white font-semibold text-center py-5">
        {props.title}
      </h3>
    </Link>
  );
}

import { Link } from "react-router-dom";

type CategoryItemType = {
  img: string;
  title: string;
  desc: string;
  rate: string;
  translatedTitle: string;
  channel: string;
  subtitle: string;
  age: string;
  imdbRate: string;
  time: string;
  country: string;
  status: string;
  year: string;
  genres: string[];
  season: number;
  episode: number;
};

export default function CategoryItem({item,index}: {item: CategoryItemType;index: number;}) {
  return (
    <Link to={`/${index}`}>
      <div className="relative rounded-lg overflow-hidden group cursor-pointer">
        <img
          className="rounded-lg h-[30rem] md:h-80 lg:h-96 xl:h-[30rem] w-full object-cover"
          src={item.img}
          alt={item.title}
        />
        <p className="absolute top-0 left-0 color-white m-2 p-2 text-xs font-semibold bg-one border-[3px] myborder-seven rounded-full group-hover:scale-0 transition-all duration-300">
          {item.rate}
        </p>
        <div className="absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-t from-black flex flex-col justify-end items-center py-3 px-2 opacity-0 group-hover:opacity-100 transition-all duration-300">
          <p className="color-white font-medium text-sm text-justify line-clamp-4">
            {item.desc}
          </p>
          <ul className="color-white font-medium text-sm text-justify flex gap-x-2 pt-2 line-clamp-4">
            {item.genres.map((gen: string, index: number): React.ReactNode => {
              return <li key={index}>{gen}</li>;
            })}
          </ul>
        </div>
      </div>
      <h3 className="color-white font-semibold text-center py-5 cursor-pointer">
        {item.title}
      </h3>
    </Link>
  );
}

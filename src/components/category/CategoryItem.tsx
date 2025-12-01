import ImageCard from "../ImageCard";
import { Link } from "react-router-dom";
import { Anime } from "../../types/apiResponse";

export default function CategoryItem({ item }: { item: Anime }) {
  return (
    <Link to={`/${item.mal_id}`}>
      <div className="relative rounded-lg overflow-hidden group cursor-pointer">
        <ImageCard>
          <img
            className="rounded-lg h-[30rem] md:h-80 lg:h-96 xl:h-[30rem] w-full object-cover"
            src={item.images.webp.large_image_url}
            alt={item.title}
          />
        </ImageCard>
        <p className="absolute top-0 left-0 text-my-white-max m-2 p-2 text-xs font-semibold bg-my-black-max border-[3px] border-my-warning rounded-lg group-hover:scale-0 transition-all duration-300">
          {item.rating}
        </p>
        <div className="absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-t from-my-black-max/80 from-30% flex flex-col justify-end items-center py-3 px-2 opacity-0 group-hover:opacity-100 transition-all duration-300">
          <p className="text-my-white-max font-medium text-sm text-justify line-clamp-5 mb-2">
            {item.synopsis}
          </p>
          <ul className="text-my-white-min font-medium text-sm text-justify flex gap-x-2 pt-1 line-clamp-4 border-t">
            {item.genres.map((genre) => {
              return <li key={genre.mal_id}>{genre.name}</li>;
            })}
          </ul>
        </div>
      </div>
      <h3 className="text-my-white-max font-semibold text-center py-5 cursor-pointer">
        {item.title}
      </h3>
    </Link>
  );
}

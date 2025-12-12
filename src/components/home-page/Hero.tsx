import { Link } from "react-router-dom";
import HeroWrapper from "./HeroWrapper";
import useHeroData from "../../hooks/useHeroData";

export default function Hero() {
  const { data, isLoading } = useHeroData();
  if (isLoading) {
    return (
      <div className="w-full mb-20 h-[80vh] md:h-[85vh] rounded-xl overflow-hidden md:shadow-md md:shadow-my-white-min md:bg-my-black-min">
        <div className="w-full h-full flex items-center justify-center text-my-white-max space-x-5">
          <p className="flex items-center gap-5">
            <span>Loading ...</span>
            <span className="inline-block w-8 aspect-square rounded-full border-x-4 animate-spin"></span>
          </p>
        </div>
      </div>
    );
  }

  return (
    <HeroWrapper>
      {data?.map((item, index) => (
        <div
          key={"Hero-item-" + item.mal_id}
          className="keen-slider__slide w-full h-full flex items-start md:items-center justify-center text-my-white-max"
        >
          <img
            className="absolute inset-0 w-full h-full object-cover rounded-xl blur-md z-10 invisible md:visible"
            src={item.images.webp.small_image_url}
            alt={item.title}
          />
          <div className="h-full w-full absolute inset-0 bg-my-black-max/30 invisible md:visible z-20"></div>

          <div className="z-30 flex flex-col space-y-5 text-center">
            <Link to={`/${item.mal_id}`} className="row-span-9 w-72 mx-auto">
              <img
                src={item.images.webp.large_image_url}
                className="h-full object-cover rounded-xl shadow-lg shadow-my-white-max"
                alt={item.title}
                loading={index < 2 ? "eager" : "lazy"}
              />
            </Link>

            <h2 className="text-xl font-bold row-span-3">{item.title}</h2>
          </div>
        </div>
      ))}
    </HeroWrapper>
  );
}

import HeroWrapper from "./HeroWrapper";
import { Link } from "react-router-dom";
import { SwiperSlide } from "swiper/react";
import useHeroData from "../../hooks/useHeroData";

export default function Hero() {
  const { data, isLoading } = useHeroData();

  return (
    <div className="w-full mb-20 h-[80vh] md:h-[85vh] flex relative rounded-xl overflow-hidden md:shadow-md md:shadow-my-white-min md:bg-my-black-min">
      <HeroWrapper>
        {isLoading ? (
          <SwiperSlide>
            <div className="w-full h-full flex items-center justify-center text-my-white-max space-x-5">
              <span>Loading ...</span>
              <span className="inline-block w-8 aspect-square rounded-full border-x-4 animate-spin"></span>
            </div>
          </SwiperSlide>
        ) : (
          data?.map((item, index) => (
            <SwiperSlide key={item.mal_id}>
              <img
                className="absolute inset-0 w-full h-full object-cover rounded-xl blur-md -z-10 invisible md:visible"
                src={item.images.webp.small_image_url}
                alt={item.title}
              />
              <div className="h-full w-full absolute inset-0 bg-my-black-max/30 invisible md:visible"></div>
              <div className="absolute inset-0 grid grid-rows-12 m-auto md:mt-8 w-64 md:w-80 text-center z-20 text-my-white-max space-y-2 md:space-y-10">
                <Link to={`/${item.mal_id}`} className="row-span-9">
                  <img
                    src={item.images.webp.large_image_url}
                    className="object-cover rounded-xl shadow-lg shadow-my-white-max"
                    alt={item.title}
                    loading={index < 2 ? "eager" : "lazy"}
                  />
                </Link>
                <h2 className="text-xl font-bold row-span-3">{item.title}</h2>
              </div>
            </SwiperSlide>
          ))
        )}
      </HeroWrapper>
    </div>
  );
}

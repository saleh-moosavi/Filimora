import HeroWrapper from "./HeroWrapper";
import { Link } from "react-router-dom";
import { SwiperSlide } from "swiper/react";
import { useEffect, useState } from "react";
import { Anime } from "../../types/apiResponse";
import fakeData from "../../dataJson/movies.json";
import { getAllData } from "../../libs/getAllData";

export default function Hero() {
  const [HeroData, setHeroData] = useState<Anime[]>([]);

  useEffect(() => {
    getAllData("seasons/now?limit=10").then((res) => {
      if (res.data) {
        setHeroData(res.data);
      } else {
        setHeroData(fakeData as unknown as Anime[]);
      }
    });
  }, []);

  return (
    <div className="w-full mb-20 h-[80vh] md:h-[85vh] flex relative rounded-xl overflow-hidden md:shadow-md md:shadow-white md:bg-white/20">
      <HeroWrapper>
        {HeroData && HeroData.length > 0 ? (
          HeroData.slice(0, 5).map((item) => (
            <SwiperSlide key={item.mal_id}>
              <img
                className="absolute inset-0 w-full h-full object-cover rounded-xl blur-md -z-10 invisible md:visible"
                src={item.images.webp.large_image_url}
                alt={item.title}
              />
              <div className="h-full w-full absolute inset-0 bg-black/30 invisible md:visible"></div>
              <div className="absolute inset-0 grid grid-rows-12 m-auto md:mt-8 w-64 md:w-80 text-center z-20 text-white space-y-2 md:space-y-10">
                <Link to={`/${item.mal_id}`} className="row-span-9">
                  <img
                    src={item.images.webp.large_image_url}
                    className="object-cover rounded-xl shadow-lg shadow-white"
                    alt={item.title}
                    loading="eager"
                  />
                </Link>
                <h2 className="text-xl font-bold row-span-3">{item.title}</h2>
              </div>
            </SwiperSlide>
          ))
        ) : (
          <SwiperSlide>
            <div className="w-full h-full flex items-center justify-center text-white space-x-5">
              <span>Loading ...</span>
              <span className="inline-block w-8 aspect-square rounded-full border-x-4 animate-spin"></span>
            </div>
          </SwiperSlide>
        )}
      </HeroWrapper>
    </div>
  );
}

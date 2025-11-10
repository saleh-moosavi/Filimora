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
    <HeroWrapper>
      {HeroData &&
        HeroData.slice(0, 10).map((item) => {
          return (
            <SwiperSlide key={item.mal_id}>
              <div className="w-screen h-screen relative flex justify-center items-center">
                <img
                  className="absolute w-full h-full object-cover -z-10 blur-sm"
                  src={item.images.webp.large_image_url}
                />
                <div className="w-80 z-20 text-center text-white space-y-10">
                  <Link to={`/${item.mal_id}`}>
                    <img
                      src={item.images.webp.large_image_url}
                      className="h-full mx-auto rounded-xl shadow-lg shadow-white"
                    />
                  </Link>
                  <h2 className="text-xl font-bold">{item.title}</h2>
                </div>
                <div className="h-full w-full absolute inset-0 z-10 bg-black/50"></div>
              </div>
            </SwiperSlide>
          );
        })}
    </HeroWrapper>
  );
}

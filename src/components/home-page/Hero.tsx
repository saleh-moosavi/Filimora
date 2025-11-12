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
    console.log("first")
  }, []);

  return (
    <div className="w-full h-[75vh] md:h-[85vh] flex relative rounded-xl overflow-hidden shadow-md shadow-white bg-white/20">
      <HeroWrapper>
        {HeroData &&
          HeroData.slice(0, 4).map((item) => {
            return (
              <SwiperSlide key={item.mal_id}>
                
                <img
                  className="absolute inset-0 w-full h-full object-cover rounded-xl blur-md -z-10 invisible md:visible"
                  src={item.images.webp.large_image_url}
                />
                <div className="h-full w-full absolute inset-0 bg-gradient-to-t from-white/40 to-black/40 to-40% invisible md:visible"></div>
                <div className="absolute inset-0 grid grid-rows-12 m-auto md:mt-8 w-64 md:w-80 text-center z-20 text-white space-y-10">
                  <Link to={`/${item.mal_id}`} className="row-span-9">
                    <img
                      src={item.images.webp.large_image_url}
                      className="object-cover rounded-xl shadow-lg shadow-white"
                    />
                  </Link>
                  <h2 className="text-xl font-bold row-span-3">{item.title}</h2>
                </div>
              </SwiperSlide>
            );
          })}
      </HeroWrapper>
    </div>
  );
}

import { IoIosArrowDroprightCircle } from "react-icons/io";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import SlideItem from "./SlideItem";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Anime } from "../types/apiResponse";

export default function Slider({
  title,
  data,
}: {
  title: string;
  data: Anime[] | null;
}) {
  const { width } = useSelector<any, any>((state) => state.stateManager);
  return (
    <div className="mt-5">
      {/* Header of Slider */}
      <article className="flex justify-between px-5 rounded-lg color-white bg-one py-5 font-semibold">
        <p>{title}</p>
        <Link to={"/category"}>
          <p className="flex items-center gap-x-3 cursor-pointer">
            See More <IoIosArrowDroprightCircle />
          </p>
        </Link>
      </article>
      {/* The Slider */}
      <section className="py-5 select-none">
        <Swiper
          slidesPerView={
            width > 1375 ? 4.5 : width > 992 ? 3.5 : width > 768 ? 2.5 : 1.5
          }
          centeredSlides={false}
          spaceBetween={30}
          grabCursor={true}
          modules={[Pagination]}
        >
          {data !== null &&
            data.map((anime: Anime, index: number) => {
              return (
                <SwiperSlide className="cursor-pointer" key={index}>
                  <SlideItem
                    img={
                      anime.images?.webp?.large_image_url ?? "/placeholder.jpg"
                    }
                    index={index}
                    title={anime.title_english || anime.title}
                    rate={anime.score ?? "N/A"}
                    desc={anime.synopsis ?? "No description available."}
                  />
                </SwiperSlide>
              );
            })}
        </Swiper>
      </section>
    </div>
  );
}

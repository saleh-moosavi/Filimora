import { IoIosArrowDroprightCircle } from "react-icons/io";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import SlideItem from "./SlideItem";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

type SliderType = {
  sliderTitle: string;
  data: {
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
  }[];
};

export default function Slider(props: SliderType) {
  const { width } = useSelector<any,any>((state) => state.stateManager);
  return (
    <div className="mt-5">
      {/* Header of Slider */}
      <article className="flex justify-between px-5 rounded-lg color-white bg-one py-5 font-semibold">
        <p>{props.sliderTitle}</p>
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
          {props.data.map((item, index:number) => {
            return (
              <SwiperSlide className="cursor-pointer" key={index}>
                <SlideItem
                  img={item.img}
                  index={index}
                  title={item.title}
                  rate={item.rate}
                  desc={item.desc}
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </section>
    </div>
  );
}

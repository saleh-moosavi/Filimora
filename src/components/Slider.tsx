import { IoIosArrowDroprightCircle } from "react-icons/io";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import SlideItem from "./SlideItem";

export default function Trends(props: any) {
  return (
    <div className="mt-5">
      {/* Header of Slider */}
      <article className="flex justify-between px-5 mx-5 rounded-lg text-white bg-gray-900 py-5 font-semibold">
        <p>{props.sliderTitle}</p>
        <p className="flex items-center gap-x-3 cursor-pointer">
          See More <IoIosArrowDroprightCircle />
        </p>
      </article>
      {/* The Slider */}
      <section className="py-5 px-5 select-none">
        <Swiper
          slidesPerView={4.5}
          centeredSlides={false}
          spaceBetween={30}
          grabCursor={true}
          modules={[Pagination]}
        >
          {props.data.map((item: any, index: any) => {
            return (
              <SwiperSlide className="cursor-pointer" key={index}>
                <SlideItem img={item.img} title={item.title} rate={item.rate} desc={item.desc} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </section>
    </div>
  );
}

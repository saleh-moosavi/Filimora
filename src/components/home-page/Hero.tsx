import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import data from "../../dataJson/heroSlides.json";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

export default function Hero() {
  return (
    <div>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        loop={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {data.map((item, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="w-screen h-screen relative">
                <img
                  className="w-full h-full object-cover -z-10"
                  src={item.img}
                />
                <div className="absolute bottom-0 left-0 right-0 flex flex-col items-center z-20">
                  <img src={item.subImg} className="w-72" />
                  <button className="bg-two color-white mb-20 font-semibold px-7 py-2 rounded-lg">
                    Let`s Watch
                  </button>
                </div>
                <div className="h-full w-full absolute bottom-0 z-10 bg-gradient-to-t from-black"></div>
                <div className="h-full w-full absolute top-0 z-10 bg-gradient-to-b from-black/50 to-5%"></div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}

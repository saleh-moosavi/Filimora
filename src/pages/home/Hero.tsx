import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import data from "../../dataJson/heroSlides.json";

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

{
  /* <div className="h-screen w-screen relative z-10 flex flex-col justify-center items-center bg-cover bg-center bg-[url('https://www.moojo.ir/wp-content/uploads/2023/12/The-Lord-of-the-Rings-The-Rings-of-Power.jpg')]">
  <img
    className="mt-auto w-2/3 md:w-1/3"
    src="https://www.moojo.ir/wp-content/uploads/2023/12/2uDS3VQIDlNnwq3Mp8BsC7igftU.png"
    alt="Ring Of Powers"
  />
  <button className="bg-two color-white mb-20 font-semibold px-7 py-2 rounded-lg">
    Let`s Watch
  </button>
  <div className="h-full w-full absolute bottom-0 -z-10 bg-gradient-to-t from-black"></div>
  <div className="h-full w-full absolute top-0 -z-10 bg-gradient-to-b from-black/50 to-5%"></div>
</div>; */
}

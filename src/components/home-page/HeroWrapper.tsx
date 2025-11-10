import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { ReactNode } from "react";
import { Swiper } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

export default function HeroWrapper({ children }: { children: ReactNode }) {
  return (
    <div>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        loop={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {children}
      </Swiper>
    </div>
  );
}

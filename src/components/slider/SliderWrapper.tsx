import "swiper/css";
import "swiper/css/pagination";
import { ReactNode } from "react";
import { Swiper } from "swiper/react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { Pagination } from "swiper/modules";
import { IoIosArrowDroprightCircle } from "react-icons/io";

export default function SliderWrapper({
  children,
  title,
}: {
  children: ReactNode;
  title: string;
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
          {children}
        </Swiper>
      </section>
    </div>
  );
}

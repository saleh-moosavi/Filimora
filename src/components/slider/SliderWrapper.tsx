import "swiper/css";
import "swiper/css/pagination";
import { ReactNode } from "react";
import { Swiper } from "swiper/react";
import { Link } from "react-router-dom";
import { Pagination } from "swiper/modules";
import { IPath } from "../../libs/getAllData";
import { IoIosArrowDroprightCircle } from "react-icons/io";

export default function SliderWrapper({
  children,
  title,
  path,
}: {
  path: IPath;
  children: ReactNode;
  title: string;
}) {
  return (
    <div>
      {/* Header of Slider */}
      <article className="flex justify-between px-5 rounded-lg color-white bg-one py-5 font-semibold">
        <p>{title}</p>
        <Link to={`/category?link=${path}`}>
          <p className="flex items-center gap-x-3 cursor-pointer">
            See More <IoIosArrowDroprightCircle />
          </p>
        </Link>
      </article>
      {/* The Slider */}
      <section className="py-5 select-none">
        <Swiper
          slidesPerView={1.25}
          spaceBetween={30}
          grabCursor={true}
          modules={[Pagination]}
          breakpoints={{
            550: {
              slidesPerView: 2.25,
              spaceBetween: 30,
            },
            820: {
              slidesPerView: 3.25,
              spaceBetween: 30,
            },
            1375: {
              slidesPerView: 4.5,
              spaceBetween: 30,
            },
          }}
        >
          {children}
        </Swiper>
      </section>
    </div>
  );
}

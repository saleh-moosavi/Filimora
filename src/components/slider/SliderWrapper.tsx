import { Link } from "react-router-dom";
import { useKeenSlider } from "keen-slider/react";
import { ISliderWrapper } from "../../types/PropTypes";
import { IoIosArrowDroprightCircle } from "react-icons/io";

export default function SliderWrapper({
  children,
  title,
  path,
}: ISliderWrapper) {
  //Create a Slider Config
  const [sliderRef] = useKeenSlider<HTMLDivElement>({
    loop: false,
    slides: {
      perView: 1.25,
      spacing: 20,
    },
    breakpoints: {
      "(min-width: 640px)": {
        slides: { perView: 2.25, spacing: 10 },
      },
      "(min-width: 820px)": {
        slides: { perView: 3.25, spacing: 10 },
      },
      "(min-width: 1280px)": {
        slides: { perView: 4.5, spacing: 10 },
      },
    },
  });

  return (
    <div>
      {/* Header of Slider */}
      <article className="flex justify-between px-5 rounded-lg text-my-white-max bg-my-black-med py-5 font-semibold">
        <p>{title}</p>
        <Link to={`/category?link=${path}`}>
          <p className="flex items-center gap-x-3 cursor-pointer">
            See More <IoIosArrowDroprightCircle />
          </p>
        </Link>
      </article>
      {/* The Slider */}
      <section ref={sliderRef} className="py-5 select-none keen-slider">
        {children}
      </section>
    </div>
  );
}

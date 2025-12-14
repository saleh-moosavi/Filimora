import { KeenSliderHooks, KeenSliderInstance } from "keen-slider";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

export default function HeroIndicators({
  slider,
  currentSlide,
}: {
  slider: React.MutableRefObject<KeenSliderInstance<
    {},
    {},
    KeenSliderHooks
  > | null>;
  currentSlide: number;
}) {
  return (
    <>
      <IoIosArrowBack
        className="text-my-white-max size-10 absolute left-2 bottom-5 md:bottom-1/2 translate-y-1/2 cursor-pointer bg-my-black-max p-1 rounded-full hover:scale-110 transition-all duration-200"
        onClick={() => slider.current?.prev()}
      />

      <IoIosArrowForward
        className="text-my-white-max size-10 absolute right-2 bottom-5 md:bottom-1/2 translate-y-1/2 cursor-pointer bg-my-black-max p-1 rounded-full hover:scale-110 transition-all duration-200"
        onClick={() => slider.current?.next()}
      />
      {slider.current && (
        <div className="flex items-center gap-2 absolute right-1/2 translate-x-1/2 bottom-1 md:bottom-2 cursor-pointer">
          {[...Array(slider.current.track.details.slides.length).keys()].map(
            (idx) => {
              return (
                <button
                  key={idx}
                  onClick={() => {
                    slider.current?.moveToIdx(idx);
                  }}
                  className={`w-2 aspect-square rounded-full ${
                    currentSlide === idx ? "bg-my-warning" : "bg-my-white-max"
                  }`}
                ></button>
              );
            }
          )}
        </div>
      )}
    </>
  );
}

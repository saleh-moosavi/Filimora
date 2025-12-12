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
        className="text-my-white-max size-10 absolute left-0 bottom-5 md:bottom-1/2 translate-y-1/2 cursor-pointer"
        onClick={() => slider.current?.prev()}
      />

      <IoIosArrowForward
        className="text-my-white-max size-10 absolute right-0 bottom-5 md:bottom-1/2 translate-y-1/2 cursor-pointer"
        onClick={() => slider.current?.next()}
      />
      {slider.current && (
        <div className="flex items-center gap-2 absolute right-1/2 translate-x-1/2 bottom-1 md:bottom-5 cursor-pointer">
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

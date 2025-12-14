import "keen-slider/keen-slider.min.css";
import { ReactNode, useState } from "react";
import HeroIndicators from "./HeroIndicators";
import { useKeenSlider } from "keen-slider/react";

export default function HeroWrapper({ children }: { children: ReactNode }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  //Create a Slider Config
  const [sliderRef, slider] = useKeenSlider<HTMLDivElement>(
    {
      loop: true,
      slideChanged(slider) {
        setCurrentSlide(slider.track.details.rel);
      },
      slides: {
        perView: 1,
        spacing: 0,
      },
    },
    [
      (slider) => {
        let timeout: ReturnType<typeof setTimeout>;
        function clearNextTimeout() {
          clearTimeout(timeout);
        }
        function nextTimeout() {
          clearTimeout(timeout);
          timeout = setTimeout(() => {
            slider.next();
          }, 4000);
        }
        slider.on("created", () => {
          slider.container.addEventListener("mouseover", () => {
            clearNextTimeout();
          });
          slider.container.addEventListener("mouseout", () => {
            nextTimeout();
          });
          nextTimeout();
        });
        slider.on("dragStarted", clearNextTimeout);
        slider.on("animationEnded", nextTimeout);
        slider.on("updated", nextTimeout);
      },
    ]
  );

  return (
    <div
      ref={sliderRef}
      className="w-full mb-20 h-[80vh] md:h-[85vh] relative keen-slider rounded-xl overflow-hidden md:shadow-md md:shadow-my-white-min md:bg-my-black-min"
    >
      {children}
      <HeroIndicators slider={slider} currentSlide={currentSlide} />
    </div>
  );
}

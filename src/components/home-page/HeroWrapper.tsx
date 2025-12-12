import "keen-slider/keen-slider.min.css";
import HeroIndicators from "./HeroIndicators";
import { useKeenSlider } from "keen-slider/react";
import { ReactNode, useEffect, useState } from "react";

export default function HeroWrapper({ children }: { children: ReactNode }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  //Create a Slider Config
  const [sliderRef, slider] = useKeenSlider<HTMLDivElement>({
    loop: true,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    slides: {
      perView: 1,
      spacing: 0,
    },
  });

  //Set Interval For Loop in Slider
  useEffect(() => {
    if (!slider) return;

    slider.current?.update();

    const interval = setInterval(() => {
      slider.current?.next();
    }, 5000);

    return () => clearInterval(interval);
  }, [slider]);

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

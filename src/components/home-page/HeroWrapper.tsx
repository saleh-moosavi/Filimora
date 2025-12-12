import "keen-slider/keen-slider.min.css";
import { ReactNode, useEffect } from "react";
import { useKeenSlider } from "keen-slider/react";

export default function HeroWrapper({ children }: { children: ReactNode }) {
  const [sliderRef, slider] = useKeenSlider<HTMLDivElement>({
    loop: true,
    slides: {
      perView: 1,
      spacing: 0,
    },
  });

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
    </div>
  );
}

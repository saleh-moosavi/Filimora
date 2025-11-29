import Observer from "../Observer";
import Slider from "../slider/Slider";
import { IPath } from "../../types/PropTypes";
import SliderSkeleton from "../slider/SliderSkeleton";

export default function ListOfSlides() {
  const sliders = [
    { title: "Bests", path: "anime" },
    { title: "Trends", path: "top/anime" },
    { title: "Newest", path: "seasons/now" },
    { title: "Upcoming", path: "seasons/upcoming" },
  ];

  return (
    <div>
      {sliders.map((slider, index) => (
        <Observer key={slider.path + index} skeleton={<SliderSkeleton />}>
          <Slider
            title={slider.title}
            path={slider.path as IPath}
            fetchDelayMs={index * 400}
          />
        </Observer>
      ))}
    </div>
  );
}

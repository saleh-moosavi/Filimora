import Slider from "../slider/Slider";
import { IPath } from "../../libs/getAllData";

export default function ListOfSlides() {
  const sliders = [
    { title: "Bests", path: "anime" },
    { title: "Trends", path: "top/anime" },
    { title: "Newest", path: "seasons/now" },
    { title: "Upcoming", path: "seasons/upcoming" },
    { title: "Recommendations", path: "recommendations/anime" },
  ];

  return (
    <div>
      {sliders.map((slider, index) => (
        <Slider
          key={slider.path + index}
          title={slider.title}
          path={slider.path as IPath}
          fetchDelayMs={index * 400}
        />
      ))}
    </div>
  );
}

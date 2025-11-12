import { SwiperSlide } from "swiper/react";
import SliderContent from "./SliderContent";
import SliderWrapper from "./SliderWrapper";
import { useEffect, useState } from "react";
import { Anime } from "../../types/apiResponse";
import fakeData from "../../dataJson/movies.json";
import { getAllData, IPath } from "../../libs/getAllData";

export default function Slider({
  title,
  path,
  fetchDelayMs = 0,
}: {
  title: string;
  path: IPath;
  fetchDelayMs?: number;
}) {
  const [data, setData] = useState<Anime[] | null>(null);

  useEffect(() => {
    const fetchWithDelay = setTimeout(() => {
      getAllData(path).then((data) => {
        if (data.data) {
          setData(data.data);
        } else {
          setData(fakeData as unknown as Anime[]);
        }
      });
    }, fetchDelayMs);

    return () => clearTimeout(fetchWithDelay);
  }, [path, fetchDelayMs]);

  return (
    <SliderWrapper title={title}>
      {data !== null &&
        data.map((anime: Anime) => (
          <SwiperSlide
            className="cursor-pointer"
            key={anime.mal_id + anime.title}
          >
            <SliderContent
              id={anime.mal_id}
              rate={anime.score ?? "N/A"}
              title={anime.title_english || anime.title}
              desc={anime.synopsis ?? "No description available."}
              img={anime.images?.webp?.large_image_url ?? "/placeholder.jpg"}
            />
          </SwiperSlide>
        ))}
    </SliderWrapper>
  );
}

import { SwiperSlide } from "swiper/react";
import SliderContent from "./SliderContent";
import SliderWrapper from "./SliderWrapper";
import SliderSkeleton from "./SliderSkeleton";
import { Anime } from "../../types/apiResponse";
import { ISlider } from "../../types/PropTypes";
import { useQuery } from "@tanstack/react-query";
import fakeData from "../../dataJson/movies.json";
import { getAllData } from "../../libs/getAllData";

export default function Slider({ title, path, fetchDelayMs = 0 }: ISlider) {
  const { data, isLoading } = useQuery({
    queryKey: ["anime", path],
    queryFn: async () => {
      await new Promise((resolve) => setTimeout(resolve, fetchDelayMs));
      const response = await getAllData(path);
      return response.data || (fakeData as unknown as Anime[]);
    },
    retry: 2,
    staleTime: 5 * 60 * 1000,
  });

  if (isLoading) return <SliderSkeleton />;

  return (
    <SliderWrapper title={title} path={path}>
      {data?.map((anime: Anime) => (
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

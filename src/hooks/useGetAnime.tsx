import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Anime, IReview } from "../types/apiResponse";
import { getAnimeReviews, getSingleAnime } from "../libs/getAllData";

export default function useGetAnime({ id }: { id: string }) {
  const [genres, setGenres] = useState<string>("");

  const { data, isLoading } = useQuery({
    queryKey: [`anime-item-${id}`],
    queryFn: async (): Promise<Anime> => {
      const result = await getSingleAnime(id);
      const resGenres = result?.genres.map((g) => g.mal_id).join(",");
      setGenres(resGenres || "");
      return result;
    },
  });
  const { data: reviewData, isLoading: reviewIsLoading } = useQuery({
    queryKey: [`review-anime-item-${id}`],
    queryFn: async (): Promise<IReview[]> => {
      const result = await getAnimeReviews(id);
      return result;
    },
  });
  return { data, isLoading, reviewData, reviewIsLoading, genres };
}

import { Anime } from "../types/apiResponse";
import fakeData from "../dataJson/movies.json";
import { getAllData } from "../libs/getAllData";
import { useQuery } from "@tanstack/react-query";

export default function useHeroData() {
  const { data, isLoading } = useQuery({
    queryKey: ["hero-data"],
    queryFn: async () => {
      const response = await getAllData("seasons/now?limit=8");
      return response.data || (fakeData as unknown as Anime[]);
    },
    retry: 2,
    staleTime: 5 * 60 * 1000,
  });
  return { data, isLoading };
}
